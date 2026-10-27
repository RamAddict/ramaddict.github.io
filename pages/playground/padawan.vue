<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <a
        href="https://github.com/RamAddict/padawan"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
      >
        <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
      </a>
    </h1>
    <SkillChips :skills="['JavaScript', 'Web Audio API', 'GitHub Pages']" />
    <section class="flex flex-col gap-4 text-xl">
      <p v-if="es">
        <span class="font-cursive text-6xl">U</span>n entrenador gratuito de pad de práctica para
        los 40 rudimentos internacionales de batería de la PAS. Elige un rudimento, mira el
        sticking, escúchalo sonar sobre un metrónomo y tócalo junto en tu pad. Sin registro, sin
        instalar nada, sin rastreo.
      </p>
      <p v-else>
        <span class="font-cursive text-6xl">A</span> free practice-pad trainer for the 40 PAS
        International Drum Rudiments. Pick a rudiment, see the sticking, hear it played over a
        metronome and play along on your pad. No login, no install, no tracking.
      </p>
      <div
        class="overflow-hidden rounded-lg border-4 border-base-content/60 bg-black shadow-lg"
        style="aspect-ratio: 16 / 10"
      >
        <iframe
          src="https://ramaddict.github.io/padawan/"
          title="Padawan"
          allow="autoplay"
          loading="lazy"
          class="h-full w-full border-0"
        ></iframe>
      </div>
      <p class="text-center text-base">
        <a class="link" href="https://ramaddict.github.io/padawan/" target="_blank"
          >{{ es ? 'ábrelo en pantalla completa' : 'open it full screen' }}</a
        >
      </p>
      <ul class="flex list-disc flex-col gap-2 pl-6">
        <li v-if="es">
          <strong>Sticking</strong> con acentos, flams, drags y buzz strokes, con la nota actual
          iluminada mientras suena.
        </li>
        <li v-else>
          <strong>Sticking</strong> with accents, flams, drags and buzz strokes, the current note
          lit up as it plays.
        </li>
        <li v-if="es">
          <strong>Entrenador de velocidad:</strong> +5 BPM cada 4 vueltas, y recuerda tu tempo para
          cada rudimento.
        </li>
        <li v-else>
          <strong>Speed trainer:</strong> +5 BPM every 4 loops, and it remembers your tempo for each
          rudiment.
        </li>
        <li v-if="es">
          <strong>Metrónomo libre</strong> con compases, subdivisiones hasta seisillos, acentos por
          tiempo, un péndulo y tap tempo.
        </li>
        <li v-else>
          <strong>Free metronome</strong> with time signatures, subdivisions up to sextuplets,
          per-beat accents, a pendulum and tap tempo.
        </li>
        <li v-if="es">
          <strong>Editor</strong> para tus propios rudimentos, guardados en el navegador. En inglés,
          portugués y español.
        </li>
        <li v-else>
          <strong>Editor</strong> for your own rudiments, saved in the browser. English, Portuguese
          and Spanish.
        </li>
      </ul>
      <p v-if="es">
        Archivos estáticos sin más, sin paso de build, con licencia MIT. Cada rudimento es un patrón
        corto en un string, así que una corrección es un PR de una línea.
      </p>
      <p v-else>
        Plain static files, no build step, MIT licensed. Every rudiment is one short pattern string,
        so corrections are a one-line PR.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const { es } = useLang();
const scrambler = useScrambler('Padawan');

onMounted(() => {
  scrambler.scramble();
});
</script>
