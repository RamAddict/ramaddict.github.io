<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <a
        href="https://doomscroll-oldies.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
      >
        <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
      </a>
    </h1>
    <SkillChips :skills="['Next.js', 'React', 'TypeScript', 'Convex', 'Tailwind CSS', 'Vercel']" />

    <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
      <section class="flex flex-col gap-4 text-xl lg:flex-1">
        <p v-if="es">
          <span class="font-cursive text-6xl">S</span>iempre quisiste hacer doom-scroll de
          videojuegos viejos, ¿no? <br /><br />... ¿la verdad que no? <br />
          <br />
          ¡Bueno, ahora puedes! <br />En serio, pruébalo, es divertido de verdad. <br /><br />
          Hice Doomscroll Oldies para redirigir un hábito que casi todos conocemos, *el scroll sin
          pensar*, hacia algo que realmente aporte. En lugar de feeds algorítmicos diseñados para
          engancharte, descubres videojuegos clásicos de la historia de los videojuegos.
        </p>
        <p v-else>
          <span class="font-cursive text-6xl">E</span>ver wanted to doom-scroll old video game
          titles? <br /><br />... not really? <br />
          <br />
          Well now you can! <br />Seriously though, try it out, its actually fun. <br /><br />
          I built Doomscroll Oldies to redirect a behavior pattern most of us are already familiar
          with *mindless scrolling* toward something genuinely enriching. Instead of algorithmic
          feeds engineered for engagement, users discover classic video games from gaming history.
        </p>
        <p v-if="es">
          La idea surgió de darme cuenta de que el scroll infinito en sí no es el problema; el
          problema es lo que estamos scrolleando. Al aplicar el mismo patrón de interacción a
          metadatos curados de juegos retro, la app crea una experiencia única impulsada por la
          nostalgia. Cada swipe muestra un título nuevo (viejo) con su portada, datos de
          lanzamiento y detalles, convirtiendo los ratos muertos en oportunidades para descubrir.
        </p>
        <p v-else>
          The concept emerged from recognizing that the infinite scroll mechanic itself isn't the
          problem; it's what we're scrolling through. By applying the same interaction pattern to
          curated retro game metadata, the app creates a unique nostalgia-driven experience. Each
          swipe reveals a new (old) title with cover art, release information, and details, turning
          idle moments into discovery opportunities.
        </p>
      </section>

      <section class="flex w-full flex-col gap-3 self-start lg:sticky lg:top-4 lg:w-[22rem]">
        <h2 class="text-3xl font-medium">{{ es ? 'La app en vivo' : 'Live Application' }}</h2>
        <p v-if="es" class="text-base opacity-80">
          La app real, corriendo aquí mismo. Scrollea dentro del marco para empezar a explorar.
        </p>
        <p v-else class="text-base opacity-80">
          The real thing, running right here. Scroll inside the frame to start digging.
        </p>

        <div class="mx-auto w-full max-w-sm">
          <div
            class="overflow-hidden rounded-3xl border-4 border-base-content/60 bg-black shadow-lg"
            style="aspect-ratio: 9 / 16"
          >
            <iframe
              src="https://doomscroll-oldies.vercel.app/"
              title="Doomscroll Oldies"
              referrerpolicy="no-referrer"
              class="h-full w-full border-0"
            ></iframe>
          </div>
        </div>

        <p class="text-center text-base">
          <a
            href="https://doomscroll-oldies.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          >
            {{ es ? 'ábrelo en una pestaña nueva' : 'open it in a new tab' }}
          </a>
        </p>
      </section>
    </div>

    <section class="flex flex-col gap-4 text-xl">
      <h2 class="text-3xl font-medium">
        {{ es ? 'Implementación técnica' : 'Technical Implementation' }}
      </h2>
      <p v-if="es"><strong>Frontend:</strong> Next.js con scroll virtual e imágenes con carga diferida.</p>
      <p v-else><strong>Frontend:</strong> Next.js with virtual scrolling and lazy-loaded images.</p>
      <p v-if="es"><strong>Backend:</strong> Convex como backend as a service y base de datos.</p>
      <p v-else><strong>Backend:</strong> Convex backend as a service and DB.</p>
      <p v-if="es"><strong>Infraestructura:</strong> Desplegado en Vercel, solo por comodidad.</p>
      <p v-else><strong>Infrastructure:</strong> Deployed on Vercel, just for convenience.</p>
      {{ es ? 'Datos obtenidos de IGDB.' : 'Data pulled from IGDB.' }}
    </section>
  </main>
</template>

<script setup lang="ts">
const { es } = useLang();
const scrambler = useScrambler('Doomscroll Oldies');

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
