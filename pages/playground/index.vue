<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 overflow-visible text-justify sm:text-left">
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h1 class="text-4xl">{{ es ? 'Experimentos' : 'Playground' }}</h1>
      <p class="text-2xl">
        {{
          es
            ? 'Un espacio para experimentos, herramientas pequeñas y programación creativa.'
            : 'A space for experiments, small tools, and creative coding.'
        }}
      </p>
    </section>

    <section class="flex flex-col gap-4 rounded-3xl px-8 py-6">
      <hr class="mb-4 opacity-50" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <NuxtLink to="/playground/padawan">
          <SpotlightCard
            class="padawan card flex aspect-video flex-col justify-center overflow-hidden border-base-content"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">Padawan</h3>
              <div class="absolute bottom-0">
                <p>{{ es ? 'Entrenador de rudimentos de batería + metrónomo' : 'Drum rudiments trainer + metronome' }}</p>
                <p class="text-xs">Vanilla JS + Web Audio</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
        <NuxtLink to="/playground/tapeout">
          <SpotlightCard
            class="tapeout card flex aspect-video flex-col justify-center overflow-hidden border-base-content"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">TAPEOUT</h3>
              <div class="absolute bottom-0">
                <p>{{ es ? 'Un juego de puzles de enrutado de chips' : 'A chip-routing puzzle game' }}</p>
                <p class="text-xs">React + PixiJS + Babylon.js</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
        <NuxtLink to="/playground/mosca-do-lule">
          <SpotlightCard
            class="mosca card flex aspect-video flex-col justify-center overflow-hidden border-base-content"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">Mosca do Lule</h3>
              <div class="absolute bottom-0">
                <p>{{ es ? 'Una mosca de la fruta entrenada con RL para votar' : 'A fruit fly trained with RL to vote' }}</p>
                <p class="text-xs">MuJoCo + PPO</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
        <NuxtLink to="/playground/game-of-life">
          <SpotlightCard
            class="card flex aspect-video flex-col justify-center overflow-hidden border-base-content"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">
                Conway's Game of Life w/ WebGPU
              </h3>
              <div class="absolute bottom-0">
                <p>Game of Life</p>
                <p class="text-xs">{{ es ? 'Experimento con WebGPU' : 'WebGPU Experiment' }}</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
        <NuxtLink to="/playground/doomscroll-oldies">
          <SpotlightCard
            class="doomscroll-oldies card flex aspect-video flex-col justify-center overflow-hidden border-base-content"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">
                Doomscroll Oldies
              </h3>
              <div class="absolute bottom-0">
                <p>{{ es ? 'Descubre juegos retro' : 'Retro Game Discovery' }}</p>
                <p class="text-xs">Next.js + Convex</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
        <NuxtLink to="/playground/scrollbar-breakout">
          <SpotlightCard
            class="scrollbar-breakout card flex aspect-video flex-col justify-center overflow-hidden
              border-base-content"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">
                Scrollbar Breakout
              </h3>
              <div class="absolute bottom-0">
                <p>{{ es ? 'Un juego que se juega con la barra de scroll' : 'A game played with the page scrollbar' }}</p>
                <p class="text-xs">Canvas 2D + window.scrollY</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { es } = useLang();
</script>

<style scoped lang="css">
.card {
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 0.2rem;
  cursor: pointer;
  position: relative;
}

.card-image-bg {
  position: absolute;
  inset: 0;
  background-image: url('/playground/game-of-life.png');
  background-size: cover;
  opacity: 0.12;
  z-index: 0;
}

.doomscroll-oldies .card-image-bg {
  background-image: url('/playground/doomscroll-oldies.png');
  opacity: 0.15;
}

.tapeout .card-image-bg {
  background-image: url('/playground/tapeout.png');
  opacity: 0.2;
}

.mosca .card-image-bg {
  background-image: url('/playground/mosca.gif');
  background-position: center;
  opacity: 0.2;
}

/* no screenshot for this one — a stack of scrollbar thumbs stands in for it */
.scrollbar-breakout .card-image-bg {
  background-image: repeating-linear-gradient(
    to right,
    rgba(202, 138, 4, 0.55) 0 10px,
    transparent 10px 46px
  );
  background-size: auto;
  opacity: 0.35;
}

/* no screenshot either — drumstick stripes */
.padawan .card-image-bg {
  background-image: repeating-linear-gradient(
    to right,
    rgba(202, 138, 4, 0.55) 0 6px,
    transparent 6px 24px,
    rgba(202, 138, 4, 0.55) 24px 30px,
    transparent 30px 60px
  );
  background-size: auto;
  opacity: 0.3;
}

.card > .card-content {
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  inset: 1px;
  padding: 10px;
  position: absolute;
  z-index: 2;
}
</style>
