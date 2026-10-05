<template>
  <main class="mx-auto max-w-5xl px-8" :class="{ 'skip-intro': introPlayed }">
    <section class="flex flex-col gap-8 rounded-3xl">
      <div class="just flex flex-row gap-4">
        <NuxtImg
          preload
          src="me.jpg"
          class="hide-left m-auto h-32 w-32 scale-[4] rounded-full grayscale sm:m-0 sm:h-auto"
          width="200"
          height="200"
          fit="cover"
          placeholder
          format="webp"
          alt="Arthur Bianco"
        />
        <div class="my-auto flex flex-col gap-2">
          <h2 class="hide-right text-4xl">Hi, my name is Arthur.</h2>
          <h1 class="hide-right-delay text-2xl">
            I am a Web & Software Developer based in Florianópolis, Brazil.
          </h1>
        </div>
      </div>
      <div class="hide-down-delay flex flex-col gap-2">
        <div class="flex flex-col sm:flex-row">
          <p class="content-center pb-1 text-2xl leading-6 sm:pb-0">
            I build software for the web with&nbsp;
          </p>
          <!-- <FlipWords :words="combinations" :duration="3000" class="text-2xl leading-6" /> -->
          <div class="flex">
            <RotatingText
              :texts="frontValues"
              :initial-delay="1200"
              mainClassName=""
              :staggerFrom="'last'"
              :initial="{ y: '100%' }"
              :animate="{ y: 0 }"
              :exit="{ y: '-120%' }"
              :staggerDuration="0.125"
              splitLevelClassName="overflow-hidden text-2xl leading-6"
              :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
              :rotationInterval="4000"
            />,&nbsp;
            <RotatingText
              :texts="backValues"
              :initial-delay="0"
              mainClassName=""
              :staggerFrom="'last'"
              :initial="{ y: '100%' }"
              :animate="{ y: 0 }"
              :exit="{ y: '-120%' }"
              :staggerDuration="0.125"
              splitLevelClassName="overflow-hidden text-2xl leading-6"
              :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
              :rotationInterval="4000"
            />,&nbsp;
            <RotatingText
              :initial-delay="600"
              :texts="infras"
              mainClassName=""
              :staggerFrom="'last'"
              :initial="{ y: '100%' }"
              :animate="{ y: 0 }"
              :exit="{ y: '-120%' }"
              :staggerDuration="0.125"
              splitLevelClassName="overflow-hidden text-2xl leading-6"
              :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
              :rotationInterval="4000"
            />.
          </div>
        </div>
        <p class="text-2xl">
          By day I'm building
          <NuxtLink to="/work/slick-plus" class="link">Slick+</NuxtLink> with an Irish startup. By
          night, <NuxtLink to="/work/rooster" class="link">Rooster</NuxtLink> and way too many side
          projects.
        </p>
        <a
          v-if="lastPush"
          :href="`https://github.com/${lastPush.repo}`"
          target="_blank"
          class="flex w-fit items-center gap-2 font-mono text-sm opacity-70 hover:opacity-100"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75"
            ></span>
            <span class="relative h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          last pushed to {{ lastPush.repo }} {{ lastPush.ago }}
        </a>
      </div>
    </section>

    <section class="hide-down-delay flex flex-col gap-4 pt-16">
      <h2 class="text-3xl">Right now</h2>
      <hr class="opacity-50" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="p in now"
          :key="p.name"
          :to="p.to"
          :target="p.to.startsWith('http') ? '_blank' : undefined"
        >
          <SpotlightCard class="card h-full border-base-content !p-5">
            <div class="relative z-10 flex h-full flex-col gap-2">
              <div class="flex items-center justify-between gap-2">
                <h3 class="text-xl font-bold tracking-tight">{{ p.name }}</h3>
                <span class="font-mono text-xs uppercase" :class="statusColor[p.status]">{{
                  p.status
                }}</span>
              </div>
              <p class="text-base opacity-80">{{ p.blurb }}</p>
              <p class="mt-auto font-mono text-xs opacity-60">{{ p.stack }}</p>
            </div>
          </SpotlightCard>
        </NuxtLink>
      </div>
    </section>

    <section class="hide-down-delay">
      <div class="flex flex-col gap-2">
        <p class="pb-8 pt-16 text-2xl">
          Find me on

          <a target="_blank" href="https://www.linkedin.com/in/arthurbianco/" class="">
            <GradientText
              text="Linkedin"
              :colors="['#0b66c2', '#ffffff', '#0b66c2', '#ffffff', '#0b66c2']"
              :animation-speed="10"
              :show-border="false"
              class="!inline"
            /> </a
          >,
          <a target="_blank" href="https://github.com/RamAddict" class="hover:underline">
            <GradientText
              text="GitHub"
              :colors="['#000000', '#ffffff', '#000000', '#ffffff', '#000000']"
              :animation-speed="20"
              :show-border="false"
              class="!inline"
            /> </a
          >,
          <a target="_blank" href="https://www.instagram.com/apbiancoo/" class="hover:underline">
            <GradientText
              text="Instagram"
              :colors="['#feda75', '#fa7e1e', '#C13584', '#833AB4', '#405DE6']"
              :animation-speed="10"
              :show-border="false"
              class="!inline"
            /> </a
          >.
        </p>
      </div>
    </section>
    <section>
      <hr class="bg-shadow mb-8 h-[1px] border-0" />
    </section>
  </main>
</template>

<script setup lang="ts">
const frontValues = ['Nuxt', 'Angular', 'Nextjs', 'Svelte'];
const backValues = ['Express', 'Spring', 'Nestjs'];
const infras = ['AWS', 'Firebase', 'Supabase'];

// intro only plays on the first visit; useState survives client-side navigation
const introPlayed = useState('introPlayed', () => false);
onMounted(() => setTimeout(() => (introPlayed.value = true), 4000));

const statusColor: Record<string, string> = {
  live: 'text-green-500',
  shipping: 'text-yellow-600',
  wip: 'text-sky-500',
};

const now = [
  {
    name: 'Slick+',
    to: '/work/slick-plus',
    status: 'live',
    stack: 'Angular · NestJS · AWS',
    blurb: 'Bite-sized video for knowledge sharing at work. Full stack, from Figma to the CDK.',
  },
  {
    name: 'Rooster',
    to: '/work/rooster',
    status: 'shipping',
    stack: 'Flutter · Matrix · WebRTC',
    blurb: 'Discord-style voice rooms, soundboard and DJ booth, on Matrix. Open source.',
  },
  {
    name: 'Impact Early Education',
    to: 'https://impact-early-education.vercel.app',
    status: 'live',
    stack: 'FastAPI · Next.js · GCP · LLMs',
    blurb: 'Helping early childhood educators track progress, with AI-generated insights.',
  },
  {
    name: 'TAPEOUT',
    to: '/playground/tapeout',
    status: 'wip',
    stack: 'React · PixiJS · Babylon.js',
    blurb: 'Place the cells. Route the metal. Ship the chip. A chip design puzzle game.',
  },
];

// ponytail: unauthenticated GitHub API, 60 req/h per visitor IP; the line just hides if it fails
const { data: events } = useFetch<{ type: string; repo: { name: string }; created_at: string }[]>(
  'https://api.github.com/users/RamAddict/events/public?per_page=30',
  { server: false, lazy: true }
);
const lastPush = computed(() => {
  // the feed isn't strictly time-ordered, so take the newest push
  const e = events.value
    ?.filter((e) => e.type === 'PushEvent')
    .sort((a, b) => b.created_at.localeCompare(a.created_at))[0];
  if (!e) return null;
  const mins = Math.round((Date.now() - Date.parse(e.created_at)) / 60000);
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const ago =
    mins < 60
      ? rtf.format(-mins, 'minute')
      : mins < 1440
        ? rtf.format(-Math.round(mins / 60), 'hour')
        : rtf.format(-Math.round(mins / 1440), 'day');
  return { repo: e.repo.name, ago };
});
</script>

<style lang="css">
body {
  @apply overflow-x-hidden;
}

.link {
  @apply underline duration-700 hover:text-yellow-600 hover:transition-opacity;
}
</style>

<style scoped lang="css">
@keyframes smooth-appear {
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

.hide-down-delay {
  opacity: 0;
  transform: translateY(100%);
  animation: smooth-appear 1s ease forwards;
  animation-delay: 2.5s;
}

.hide-left {
  opacity: 0;
  transform: translateX(-200%);
  animation: smooth-appear 1.5s ease forwards;
}
.hide-right {
  opacity: 0;
  transform: translateX(200%);
  animation: smooth-appear 1.5s ease forwards;
  animation-delay: 0.5s;
}
.hide-right-delay {
  opacity: 0;
  transform: translateX(200%);
  animation: smooth-appear 1.5s ease forwards;
  animation-delay: 1.5s;
}

.skip-intro :is(.hide-down-delay, .hide-left, .hide-right, .hide-right-delay) {
  animation: none;
  opacity: 1;
  transform: translateX(0%);
}
</style>

<style scoped lang="css">
.card {
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 0.2rem;
}
</style>
