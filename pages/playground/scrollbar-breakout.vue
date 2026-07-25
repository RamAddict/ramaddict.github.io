<template>
  <main class="mx-auto max-w-6xl px-8 pb-16">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <!-- text column: this is also the game's controller, since its height is the scroll range -->
      <div
        class="order-2 flex flex-col gap-6 text-justify sm:text-left lg:order-1 lg:min-h-[140vh]
          lg:w-[44%] lg:shrink-0"
      >
        <h1 class="mt-8 font-mono text-4xl font-bold text-yellow-600">
          <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
        </h1>
        <SkillChips :skills="['Vue', 'Canvas 2D', 'requestAnimationFrame', 'window.scrollY']" />

        <p class="text-xl">
          <span class="font-cursive text-6xl">T</span>he most under-appreciated input device on the
          web is the one you already have. There is no keyboard handler here, no mouse position, no
          touch listener. The paddle is driven by exactly one number: how far down this page you
          have scrolled.
        </p>

        <h2 class="mt-4 text-3xl font-medium">How to play</h2>
        <p class="text-xl">
          Scroll. That is the whole control scheme. Drag the browser's own scrollbar over on the
          right, spin the wheel, press the arrow keys, flick a trackpad — anything that moves the
          page moves the paddle with it. The board stays pinned in place while this column slides
          past it.
        </p>
        <p class="text-xl">
          The top of the page puts the paddle at the top of the board, the bottom puts it at the
          bottom, and everything in between maps linearly. Which means reading this page and playing
          the game are, mechanically, the same activity.
        </p>

        <h2 class="mt-4 text-3xl font-medium">How it works</h2>
        <p class="text-xl">
          Every frame the loop reads
          <code class="font-mono text-yellow-600"
            >scrollY / (scrollHeight - innerHeight)</code
          >, gets a number between 0 and 1, and maps it onto the paddle's vertical travel. Top of
          the document is the top of the board, bottom is the bottom. That is the entire input
          layer.
        </p>
        <p class="text-xl">
          The board itself is <code class="font-mono text-yellow-600">position: sticky</code>, which
          is the only reason this is playable at all — it pins to the top of the viewport so the
          game stays in front of you while the column you are reading slides past underneath.
        </p>
        <p class="text-xl">
          The nice part of leaning on the scrollbar is everything that arrives for free: wheel
          acceleration, keyboard paging, drag, touch momentum, and the accessibility semantics of a
          scroll container. The paddle's velocity is sampled between frames too, so flicking the
          page puts spin on the ball.
        </p>
        <p class="text-xl">
          The catch is equally free: a scrollbar has ends. Scroll past the bottom of the section and
          the paddle simply stops, parked at the edge of the board, while the ball carries on
          without you.
        </p>
      </div>

      <!-- game column -->
      <!-- sticky at every breakpoint so the board never leaves the screen while you play it -->
      <div
        class="sticky top-4 z-10 order-1 self-start rounded-sm bg-base-100 py-2 lg:order-2
          lg:flex-1"
      >
        <div class="mb-3 flex flex-row flex-wrap items-baseline justify-between gap-4 font-mono">
          <div class="flex flex-row gap-5">
            <span>Score <strong class="text-yellow-600">{{ score }}</strong></span>
            <span>Best <strong class="text-yellow-600">{{ best }}</strong></span>
            <span>Level <strong class="text-yellow-600">{{ level }}</strong></span>
          </div>
          <div class="flex flex-row items-center gap-1" aria-label="lives">
            <span
              v-for="i in MAX_LIVES"
              :key="i"
              class="h-3 w-3 rounded-full border border-current"
              :class="i <= lives ? 'bg-yellow-600' : 'opacity-30'"
            ></span>
          </div>
        </div>

        <div class="board relative">
          <canvas ref="canvas" class="block aspect-[3/2] w-full rounded-sm shadow-md"></canvas>

          <div
            v-if="state !== 'playing'"
            class="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-sm
              bg-black/55 text-center text-white"
          >
            <p class="font-mono text-3xl font-bold">{{ overlay.title }}</p>
            <p class="max-w-sm px-6 text-base">{{ overlay.body }}</p>
            <button
              class="mt-2 rounded-sm border border-white/70 px-4 py-2 font-mono text-sm uppercase
                tracking-widest duration-300 hover:bg-white hover:text-black"
              @click="primaryAction"
            >
              {{ overlay.action }}
            </button>
          </div>
        </div>

        <p class="mt-2 text-center font-mono text-xs opacity-60">
          scroll position {{ Math.round(paddleT * 100) }}%
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Scrollbar Breakout');

// the page's own scrollbar is the controller, so make it impossible to miss while you are here.
// daisyUI sets scrollbar-color on `*`, and any non-auto value makes Chrome drop the
// ::-webkit-scrollbar rules and hand back a thin overlay scrollbar instead.
useHead({
  style: [
    {
      // daisyUI's rule is `:hover{scrollbar-color:…}`, which outranks a plain `html` selector
      children: `html,html:hover{scrollbar-color:auto !important}
        html::-webkit-scrollbar{width:20px}
        html::-webkit-scrollbar-track{background:rgba(127,127,127,0.12)}
        html::-webkit-scrollbar-thumb{background:#ca8a04;border-radius:3px}
        html::-webkit-scrollbar-thumb:hover{background:#eab308}
        @supports (-moz-appearance:none){html,html:hover{scrollbar-color:#ca8a04 rgba(127,127,127,0.12) !important;scrollbar-width:auto}}`,
    },
  ],
});

// --- logical playfield (the canvas is scaled to fit, physics stays resolution independent) ---
const W = 720;
const H = 480;
const MAX_LIVES = 3;

const PADDLE_W = 12;
const PADDLE_H = 96;
const PADDLE_X = W - 26;
const BALL_R = 8;

const BRICK_COLS = 7;
const BRICK_ROWS = 8;
const BRICK_X0 = 40;
const BRICK_W = 44;
const BRICK_GAP = 8;
const BRICK_Y0 = 22;

const canvas = ref<HTMLCanvasElement | null>(null);

const score = ref(0);
const best = ref(0);
const level = ref(1);
const lives = ref(MAX_LIVES);
const state = ref<'ready' | 'playing' | 'lost-life' | 'gameover' | 'cleared'>('ready');
const paddleT = ref(0);

type Brick = { x: number; y: number; w: number; h: number; alive: boolean; row: number };

const ball = { x: 0, y: 0, vx: 0, vy: 0, speed: 300 };
const trail: { x: number; y: number }[] = [];
let bricks: Brick[] = [];
let paddleY = H / 2;
let paddleV = 0;
let raf = 0;
let last = 0;
let colors = { fg: '#e8e8e8', bg: 'rgba(127,127,127,0.10)' };

const overlay = computed(() => {
  switch (state.value) {
    case 'ready':
      return {
        title: 'Scrollbar Breakout',
        body: 'The page scroll is your paddle. Scroll down to move it down. Clear every brick.',
        action: 'Launch',
      };
    case 'lost-life':
      return { title: 'Missed', body: `${lives.value} ball(s) left.`, action: 'Launch' };
    case 'gameover':
      return { title: 'Game Over', body: `Final score: ${score.value}.`, action: 'Play again' };
    case 'cleared':
      return {
        title: `Level ${level.value - 1} cleared`,
        body: 'Fresh bricks, faster ball.',
        action: 'Continue',
      };
    default:
      return { title: '', body: '', action: '' };
  }
});

const buildBricks = () => {
  const brickH = (H - BRICK_Y0 * 2 - BRICK_GAP * (BRICK_ROWS - 1)) / BRICK_ROWS;
  bricks = [];
  for (let c = 0; c < BRICK_COLS; c++) {
    for (let r = 0; r < BRICK_ROWS; r++) {
      bricks.push({
        x: BRICK_X0 + c * (BRICK_W + BRICK_GAP),
        y: BRICK_Y0 + r * (brickH + BRICK_GAP),
        w: BRICK_W,
        h: brickH,
        alive: true,
        row: r,
      });
    }
  }
};

const resetBall = () => {
  ball.speed = 290 + (level.value - 1) * 35;
  ball.x = PADDLE_X - BALL_R - 2;
  ball.y = paddleY;
  const angle = Math.PI + (Math.random() - 0.5) * 0.7;
  ball.vx = Math.cos(angle) * ball.speed;
  ball.vy = Math.sin(angle) * ball.speed;
  trail.length = 0;
};

const primaryAction = () => {
  if (state.value === 'gameover') {
    score.value = 0;
    level.value = 1;
    lives.value = MAX_LIVES;
    buildBricks();
  } else if (state.value === 'cleared') {
    buildBricks();
  }
  resetBall();
  state.value = 'playing';
};

/** The document's full scroll range, i.e. exactly what the browser's scrollbar spans. */
const scrollRange = () => document.documentElement.scrollHeight - window.innerHeight;

/** How far down the page we are, 0..1 — the only input the game has. */
const readScroll = () => {
  const range = scrollRange();
  paddleT.value = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0.5;
};

const bounceOffPaddle = () => {
  const top = paddleY - PADDLE_H / 2;
  const bottom = paddleY + PADDLE_H / 2;
  if (ball.vx <= 0) return false;
  if (ball.x + BALL_R < PADDLE_X || ball.x - BALL_R > PADDLE_X + PADDLE_W) return false;
  if (ball.y < top - BALL_R || ball.y > bottom + BALL_R) return false;

  ball.x = PADDLE_X - BALL_R;
  const offset = Math.max(-1, Math.min(1, (ball.y - paddleY) / (PADDLE_H / 2)));
  ball.speed = Math.min(ball.speed + 8, 620);
  // angle away from the paddle, steeper the further from centre, plus a bit of scroll spin
  const angle = Math.PI - offset * 1.0;
  ball.vx = Math.cos(angle) * ball.speed;
  ball.vy = Math.sin(angle) * ball.speed + paddleV * 0.12;
  return true;
};

const hitBricks = () => {
  for (const b of bricks) {
    if (!b.alive) continue;
    const cx = b.x + b.w / 2;
    const cy = b.y + b.h / 2;
    const ox = b.w / 2 + BALL_R - Math.abs(ball.x - cx);
    const oy = b.h / 2 + BALL_R - Math.abs(ball.y - cy);
    if (ox <= 0 || oy <= 0) continue;

    b.alive = false;
    score.value += 10 * level.value;
    if (ox < oy) {
      ball.vx = -ball.vx;
      ball.x += Math.sign(ball.x - cx || 1) * ox;
    } else {
      ball.vy = -ball.vy;
      ball.y += Math.sign(ball.y - cy || 1) * oy;
    }
    return;
  }
};

const saveBest = () => {
  if (best.value >= score.value) return;
  best.value = score.value;
  localStorage.setItem('scrollbar-breakout-best', String(best.value));
};

const loseLife = () => {
  lives.value -= 1;
  trail.length = 0;
  saveBest();
  state.value = lives.value > 0 ? 'lost-life' : 'gameover';
};

const update = (dt: number) => {
  readScroll();
  const target = PADDLE_H / 2 + paddleT.value * (H - PADDLE_H);
  paddleV = (target - paddleY) / dt;
  paddleY = target;

  if (state.value !== 'playing') {
    ball.x = PADDLE_X - BALL_R - 2;
    ball.y = paddleY;
    return;
  }

  // substep so a fast ball can never tunnel through a brick
  const steps = Math.max(1, Math.ceil(((Math.abs(ball.vx) + Math.abs(ball.vy)) * dt) / 6));
  const sdt = dt / steps;
  for (let i = 0; i < steps; i++) {
    ball.x += ball.vx * sdt;
    ball.y += ball.vy * sdt;

    if (ball.x - BALL_R < 0) {
      ball.x = BALL_R;
      ball.vx = Math.abs(ball.vx);
    }
    if (ball.y - BALL_R < 0) {
      ball.y = BALL_R;
      ball.vy = Math.abs(ball.vy);
    }
    if (ball.y + BALL_R > H) {
      ball.y = H - BALL_R;
      ball.vy = -Math.abs(ball.vy);
    }

    bounceOffPaddle();
    hitBricks();

    if (ball.x - BALL_R > W) {
      loseLife();
      return;
    }
  }

  trail.unshift({ x: ball.x, y: ball.y });
  if (trail.length > 14) trail.pop();

  if (!bricks.some((b) => b.alive)) {
    level.value += 1;
    saveBest();
    state.value = 'cleared';
  }
};

const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
};

const draw = () => {
  const el = canvas.value;
  const ctx = el?.getContext('2d');
  if (!el || !ctx) return;

  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, W, H);

  for (const b of bricks) {
    if (!b.alive) continue;
    ctx.fillStyle = `hsl(${38 + b.row * 9} 62% ${46 + (b.row % 2) * 6}%)`;
    roundRect(ctx, b.x, b.y, b.w, b.h, 3);
  }

  for (let i = trail.length - 1; i >= 0; i--) {
    const p = trail[i];
    ctx.globalAlpha = (1 - i / trail.length) * 0.35;
    ctx.fillStyle = colors.fg;
    ctx.beginPath();
    ctx.arc(p.x, p.y, BALL_R * (1 - i / trail.length), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = colors.fg;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, BALL_R, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ca8a04';
  roundRect(ctx, PADDLE_X, paddleY - PADDLE_H / 2, PADDLE_W, PADDLE_H, 6);

  // the line the ball must not cross
  ctx.strokeStyle = colors.fg;
  ctx.globalAlpha = 0.15;
  ctx.setLineDash([4, 8]);
  ctx.beginPath();
  ctx.moveTo(W - 1, 0);
  ctx.lineTo(W - 1, H);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;
};

const resize = () => {
  const el = canvas.value;
  if (!el) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const scale = (el.clientWidth / W) * dpr;
  el.width = Math.round(W * scale);
  el.height = Math.round(H * scale);
  el.getContext('2d')?.setTransform(scale, 0, 0, scale, 0, 0);
  colors.fg = getComputedStyle(el).color;
  draw();
};

const loop = (t: number) => {
  raf = requestAnimationFrame(loop);
  const dt = last ? Math.min((t - last) / 1000, 1 / 30) : 1 / 60;
  last = t;
  update(dt);
  draw();
};

const onKey = (e: KeyboardEvent) => {
  if (e.code !== 'Space' && e.code !== 'Enter') return;
  if (state.value === 'playing') return;
  e.preventDefault();
  primaryAction();
};

onMounted(() => {
  best.value = Number(localStorage.getItem('scrollbar-breakout-best') || 0);
  buildBricks();
  readScroll();
  paddleY = PADDLE_H / 2 + paddleT.value * (H - PADDLE_H);
  resetBall();

  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('keydown', onKey);
  raf = requestAnimationFrame(loop);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  window.removeEventListener('resize', resize);
  window.removeEventListener('keydown', onKey);
});
</script>

