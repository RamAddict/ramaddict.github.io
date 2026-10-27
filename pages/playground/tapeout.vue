<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <a
        href="https://cancian.itch.io/tapeout"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
      >
        <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
      </a>
    </h1>
    <SkillChips :skills="['TypeScript', 'React', 'PixiJS', 'Babylon.js', 'Playwright', 'SKY130']" />
    <section class="flex flex-col gap-4 text-xl">
      <p v-if="es">
        <span class="font-cursive text-6xl">C</span>oloca las celdas. Enruta el metal. Fabrica el
        chip. TAPEOUT es un juego de puzles al estilo Zachtronics sobre construir chips reales. Los
        chips reales están hechos de millones de pequeñas celdas estándar, conectadas por capas de
        metal más finas que un pelo, y el juego te da ese trabajo.
      </p>
      <p v-else>
        <span class="font-cursive text-6xl">P</span>lace the cells. Route the metal. Ship the chip.
        TAPEOUT is a Zachtronics-style puzzle game about building real chips. Real chips are made of
        millions of tiny standard cells, wired together by layers of metal thinner than a hair, and
        the game hands you the job.
      </p>
      <div
        class="overflow-hidden rounded-lg border-4 border-base-content/60 bg-black shadow-lg"
        style="aspect-ratio: 14 / 9"
      >
        <iframe
          src="/playground/tapeout-game/index.html"
          title="TAPEOUT"
          allow="fullscreen; autoplay"
          loading="lazy"
          class="h-full w-full border-0"
        ></iframe>
      </div>
      <p class="text-center text-base">
        <a class="link" href="/playground/tapeout-game/index.html" target="_blank"
          >{{ es ? 'juégalo en pantalla completa' : 'play it full screen' }}</a
        >
        {{ es ? 'o' : 'or' }}
        <a class="link" href="https://cancian.itch.io/tapeout" target="_blank">{{
          es ? 'consíguelo en itch.io' : 'get it on itch.io'
        }}</a>
      </p>
      <ul class="flex list-disc flex-col gap-2 pl-6">
        <li v-if="es">
          <strong>Coloca</strong> celdas estándar de la biblioteca open source SkyWater 130 nm
          (flip-flops, NANDs, XORs, muxes) con sus formas de pines y zonas de exclusión reales.
        </li>
        <li v-else>
          <strong>Place</strong> standard cells from the open-source SkyWater 130 nm library
          (flip-flops, NANDs, XORs, muxes) with their real pin shapes and keep-outs.
        </li>
        <li v-if="es">
          <strong>Enruta</strong> cada red en dos capas de metal, horizontal en una y vertical en la
          otra, con vías para saltar entre ellas. Toca el cable equivocado y es un cortocircuito.
        </li>
        <li v-else>
          <strong>Route</strong> every net across two metal layers, horizontal on one and vertical
          on the other, with vias to hop between. Touch the wrong wire and it's a short.
        </li>
        <li v-if="es">
          <strong>Fabrícalo.</strong> Sella el chip en un encapsulado, ponlo en una placa de prueba
          y míralo funcionar. Es una simulación lógica del metal que realmente dibujaste; si te
          equivocas, los LEDs parpadean, indecisos.
        </li>
        <li v-else>
          <strong>Ship it.</strong> Seal the chip in a package, drop it on a test board and watch it
          run. It's a logic simulation of the metal you actually drew; get it wrong and the LEDs
          flicker, undecided.
        </li>
        <li v-if="es">
          <strong>Optimiza.</strong> Cada chip tiene metas de largo de cable, vías y velocidad.
          Supéralas para tener tres estrellas, y después supérate a ti mismo.
        </li>
        <li v-else>
          <strong>Optimise.</strong> Every chip has targets for wire length, vias and speed. Beat
          them for three stars, then beat yourself.
        </li>
      </ul>
      <p v-if="es">
        Es un guiño a mis días de investigación en enrutado VLSI en el
        <NuxtLink class="link" to="/work/ecl">ECL</NuxtLink>. Versión temprana, con 9 chips por
        ahora.
      </p>
      <p v-else>
        It's a callback to my VLSI routing research days at the
        <NuxtLink class="link" to="/work/ecl">ECL</NuxtLink>. Early build with 9 chips so far.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const { es } = useLang();
const scrambler = useScrambler('TAPEOUT');

onMounted(() => {
  scrambler.scramble();
});
</script>
