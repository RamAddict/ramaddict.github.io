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
      <p>
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
          >play it full screen</a
        >
        or
        <a class="link" href="https://cancian.itch.io/tapeout" target="_blank">get it on itch.io</a>
      </p>
      <ul class="flex list-disc flex-col gap-2 pl-6">
        <li>
          <strong>Place</strong> standard cells from the open-source SkyWater 130 nm library
          (flip-flops, NANDs, XORs, muxes) with their real pin shapes and keep-outs.
        </li>
        <li>
          <strong>Route</strong> every net across two metal layers, horizontal on one and vertical
          on the other, with vias to hop between. Touch the wrong wire and it's a short.
        </li>
        <li>
          <strong>Ship it.</strong> Seal the chip in a package, drop it on a test board and watch it
          run. It's a logic simulation of the metal you actually drew; get it wrong and the LEDs
          flicker, undecided.
        </li>
        <li>
          <strong>Optimise.</strong> Every chip has targets for wire length, vias and speed. Beat
          them for three stars, then beat yourself.
        </li>
      </ul>
      <p>
        It's a callback to my VLSI routing research days at the
        <NuxtLink class="link" to="/work/ecl">ECL</NuxtLink>. Early build with 9 chips so far.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('TAPEOUT');

onMounted(() => {
  scrambler.scramble();
});
</script>
