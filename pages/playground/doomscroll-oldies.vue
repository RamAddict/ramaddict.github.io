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
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">E</span>ver wanted to doom-scroll old video game titles?
        <br /><br />... not really? <br />
        <br />
        Well now you can! <br />Seriously though, try it out, its actually fun. <br /><br />
        I built Doomscroll Oldies to redirect a behavior pattern most of us are already familiar
        with *mindless scrolling* toward something genuinely enriching. Instead of algorithmic feeds
        engineered for engagement, users discover classic video games from gaming history.
      </p>
      <p>
        The concept emerged from recognizing that the infinite scroll mechanic itself isn't the
        problem; it's what we're scrolling through. By applying the same interaction pattern to
        curated retro game metadata, the app creates a unique nostalgia-driven experience. Each
        swipe reveals a new (old) title with cover art, release information, and details, turning
        idle moments into discovery opportunities.
      </p>
    </section>

    <section class="flex flex-col gap-4 text-xl">
      <h2 class="text-3xl font-medium">Technical Implementation</h2>
      <p><strong>Frontend:</strong> Next.js with virtual scrolling and lazy-loaded images.</p>
      <p><strong>Backend:</strong> Convex backend as a service and DB.</p>
      <p><strong>Infrastructure:</strong> Deployed on Vercel, just for convenience.</p>
      Data pulled from IGDB.
    </section>

    <section class="flex flex-col gap-4 text-xl">
      <h2 class="text-3xl font-medium">Live Application</h2>
      <p>
        <a
          href="https://doomscroll-oldies.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
        >
          doomscroll-oldies.vercel.app
        </a>
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
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
