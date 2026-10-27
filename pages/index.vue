<template>
  <main class="mx-auto max-w-5xl px-8" :class="{ 'skip-intro': introPlayed }">
    <section class="flex flex-col gap-8 rounded-3xl">
      <div class="just flex flex-row gap-4">
        <NuxtImg
          preload
          src="me-tdc.jpg"
          class="hide-left m-auto h-32 w-32 scale-[4] rounded-full grayscale sm:m-0 sm:h-auto"
          width="200"
          height="200"
          fit="cover"
          placeholder
          format="webp"
          :alt="
            es
              ? 'Arthur Bianco hablando como coordinador del track de JavaScript en TDC Florianópolis 2026'
              : 'Arthur Bianco speaking as JavaScript track coordinator at TDC Florianópolis 2026'
          "
        />
        <div class="my-auto flex flex-col gap-2">
          <h2 class="hide-right text-4xl">{{ es ? 'Hola, soy Arthur.' : "Hi, I'm Arthur." }}</h2>
          <h1 class="hide-right-delay text-2xl">
            {{
              es
                ? 'Llevo software de un boceto en una servilleta a producción, y me quedo hasta que funciona.'
                : 'I take software from a napkin sketch to production, and I stay until it works.'
            }}
          </h1>
          <p class="hide-right-delay text-lg opacity-70">
            {{
              es
                ? 'Desarrollador uruguayo, radicado en Asunción, Paraguay.'
                : 'Uruguayan developer, based in Asunción, Paraguay.'
            }}
          </p>
        </div>
      </div>
      <div class="hide-down-delay flex flex-col gap-2">
        <div class="flex flex-col sm:flex-row">
          <p class="content-center pb-1 text-2xl leading-6 sm:pb-0">
            {{ es ? 'Construyo para la web con' : 'I build for the web with' }}&nbsp;
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
        <p v-if="es" class="text-2xl">
          De día construyo
          <NuxtLink to="/work/slick-plus" class="link">Slick+</NuxtLink> con una startup irlandesa.
          De noche, <NuxtLink to="/work/rooster" class="link">Rooster</NuxtLink> y demasiados
          proyectos paralelos.
        </p>
        <p v-else class="text-2xl">
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
          {{ es ? 'último push a' : 'last pushed to' }} {{ lastPush.repo }} {{ lastPush.ago }}
        </a>
      </div>
    </section>

    <section class="hide-down-delay flex flex-col gap-4 pt-16">
      <h2 class="text-3xl">
        {{ es ? '¿Por qué confiarme tu proyecto?' : 'Why trust me with your project' }}
      </h2>
      <hr class="opacity-50" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="r in reasons" :key="r.to + r.title.en" :to="r.to">
          <SpotlightCard class="card h-full border-base-content !p-5">
            <div class="relative z-10 flex h-full flex-col gap-2">
              <h3 class="text-xl font-bold tracking-tight">{{ r.title[lang] }}</h3>
              <p class="text-base opacity-80">{{ r.body[lang] }}</p>
              <p class="mt-auto font-mono text-xs text-yellow-600">{{ r.proof[lang] }} &rarr;</p>
            </div>
          </SpotlightCard>
        </NuxtLink>
      </div>
    </section>

    <section class="hide-down-delay flex flex-col gap-4 pt-16">
      <h2 class="text-3xl">{{ es ? 'Ahora mismo' : 'Right now' }}</h2>
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
                  es ? statusEs[p.status] : p.status
                }}</span>
              </div>
              <p class="text-base opacity-80">{{ es ? p.blurbEs : p.blurb }}</p>
              <p class="mt-auto font-mono text-xs opacity-60">{{ p.stack }}</p>
            </div>
          </SpotlightCard>
        </NuxtLink>
      </div>
    </section>

    <section class="hide-down-delay flex flex-col gap-4 pt-16">
      <h2 class="text-3xl">
        {{ es ? '¿Tienes algo que construir?' : 'Got something that needs building?' }}
      </h2>
      <p class="text-2xl">
        {{
          es
            ? 'Cuéntame el problema, no solo la tarea. Respondo en menos de dos días.'
            : 'Tell me the problem, not just the ticket. I reply within two days.'
        }}
      </p>
      <NuxtLink
        to="/contact"
        class="w-fit rounded-full bg-yellow-600 px-6 py-2 text-xl text-white duration-500
          hover:bg-yellow-700"
        >{{ es ? 'Hablemos' : "Let's talk" }} &rarr;</NuxtLink
      >
    </section>

    <section class="hide-down-delay">
      <div class="flex flex-col gap-2">
        <p class="pb-8 pt-16 text-2xl">
          {{ es ? 'Encuéntrame en' : 'Find me on' }}

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

const { lang, es } = useLang();

const statusColor: Record<string, string> = {
  live: 'text-green-500',
  shipping: 'text-yellow-600',
  wip: 'text-sky-500',
};
const statusEs: Record<string, string> = {
  live: 'en línea',
  shipping: 'publicando',
  wip: 'en curso',
};

type Copy = { en: string; es: string };
const reasons: { to: string; title: Copy; body: Copy; proof: Copy }[] = [
  {
    to: '/work/slick-plus',
    title: { en: 'I own the whole thing', es: 'Me hago cargo de todo' },
    body: {
      en: 'At Slick+ I went from the Figma mockups to the API to the AWS CDK and CI that deploy it. No hand-offs, no "not my layer".',
      es: 'En Slick+ fui desde los diseños en Figma hasta la API, el AWS CDK y el CI que la despliega. Sin pasar la pelota, sin "esa capa no es mía".',
    },
    proof: { en: 'Slick+', es: 'Slick+' },
  },
  {
    to: '/work/slick-plus',
    title: { en: 'I fix the "won\'t fix" bugs', es: 'Arreglo los bugs "sin solución"' },
    body: {
      en: "Videos recorded in Chrome couldn't be seeked and S3 wouldn't stream them. Chromium marked it won't fix; I re-encoded everything into adaptive HLS with a Lambda.",
      es: 'Los videos grabados en Chrome no se podían adelantar y S3 no los transmitía. Chromium lo marcó como "no se arreglará"; yo lo resolví re-codificando todo a HLS adaptativo con una Lambda.',
    },
    proof: { en: 'The video saga', es: 'La saga del video' },
  },
  {
    to: '/work/nbisjs',
    title: { en: 'I make slow things fast', es: 'Hago rápido lo que es lento' },
    body: {
      en: "I compiled NIST's fingerprint C code to WebAssembly so biometric checks run in the browser: no API round trip, and it works offline.",
      es: 'Compilé el código C de huellas digitales del NIST a WebAssembly para que la validación biométrica corra en el navegador: sin ida y vuelta a la API, y funciona sin conexión.',
    },
    proof: { en: 'NBIS-JS, open source', es: 'NBIS-JS, código abierto' },
  },
  {
    to: '/work/reps-co',
    title: { en: 'I clean up messes', es: 'Ordeno el desorden' },
    body: {
      en: 'At Reps&Co I took over a ticketing system written by non-engineers and turned it into something fast that the team could actually work on.',
      es: 'En Reps&Co tomé un sistema de tickets escrito por no ingenieros y lo convertí en algo rápido, en lo que el equipo realmente podía trabajar.',
    },
    proof: { en: 'Reps&Co', es: 'Reps&Co' },
  },
  {
    to: '/work/rooster',
    title: { en: 'I ship, constantly', es: 'Publico, constantemente' },
    body: {
      en: "Rooster gets a release almost every day. The green dot up top is my last push, live from GitHub. It's rarely old.",
      es: 'Rooster tiene una versión nueva casi todos los días. El punto verde de arriba es mi último push, en vivo desde GitHub. Casi nunca es viejo.',
    },
    proof: { en: 'Rooster', es: 'Rooster' },
  },
  {
    to: '/work/tenacit',
    title: { en: "I've been the founder", es: 'He sido fundador' },
    body: {
      en: 'I co-founded Tenacit and ran it serverless on AWS for almost nothing. I know a feature is only done when someone pays for it.',
      es: 'Cofundé Tenacit y la corrí serverless en AWS por casi nada. Sé que una funcionalidad solo está terminada cuando alguien paga por ella.',
    },
    proof: { en: 'Tenacit', es: 'Tenacit' },
  },
];

const now = [
  {
    name: 'Slick+',
    to: '/work/slick-plus',
    status: 'live',
    stack: 'Angular · NestJS · AWS',
    blurb: 'Bite-sized video for knowledge sharing at work. Full stack, from Figma to the CDK.',
    blurbEs: 'Videos cortos para compartir conocimiento en el trabajo. Full stack, de Figma al CDK.',
  },
  {
    name: 'Rooster',
    to: '/work/rooster',
    status: 'shipping',
    stack: 'Flutter · Matrix · WebRTC',
    blurb: 'Discord-style voice rooms, soundboard and DJ booth, on Matrix. Open source.',
    blurbEs: 'Salas de voz estilo Discord, soundboard y cabina de DJ, sobre Matrix. Código abierto.',
  },
  {
    name: 'Impact Early Education',
    to: 'https://impact-early-education.vercel.app',
    status: 'live',
    stack: 'FastAPI · Next.js · GCP · LLMs',
    blurb: 'Helping early childhood educators track progress, with AI-generated insights.',
    blurbEs: 'Ayuda a educadores de primera infancia a seguir el progreso, con análisis generados por IA.',
  },
  {
    name: 'TAPEOUT',
    to: '/playground/tapeout',
    status: 'wip',
    stack: 'React · PixiJS · Babylon.js',
    blurb: 'Place the cells. Route the metal. Ship the chip. A chip design puzzle game.',
    blurbEs: 'Coloca las celdas. Enruta el metal. Fabrica el chip. Un juego de puzles de diseño de chips.',
  },
  {
    name: 'Padawan',
    to: '/playground/padawan',
    status: 'live',
    stack: 'JavaScript · Web Audio',
    blurb: 'Practice-pad trainer for the 40 drum rudiments, with a metronome. No login.',
    blurbEs: 'Entrenador de los 40 rudimentos de batería en pad, con metrónomo. Sin registro.',
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
  const rtf = new Intl.RelativeTimeFormat(lang.value, { numeric: 'auto' });
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
