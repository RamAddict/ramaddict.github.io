<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips
      :skills="['Svelte 4 & 5', 'Firebase', 'GCP', 'Electron', 'AWS', 'GetStream', 'TypeScript']"
    ></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">R</span>eps & Co is a technology company operating in
        the ticketing industry, using data-driven strategies to improve the live event ecosystem. I
        joined as a Full Stack Developer, working primarily with Svelte (versions 4 and 5) and
        Firebase to build and maintain high-traffic applications.
      </p>

      <p>
        My main focus was on the flagship ticket request management system. This critical piece of
        infrastructure had been originally developed by non-engineers, leading to significant
        technical debt. I spearheaded a comprehensive refactoring effort, prioritizing code
        readability, modern best practices, and performance. By leveraging Svelte's reactive
        lifecycle and implementing efficient data fetching strategies like proper pagination, I was
        able to significantly reduce load times and improve the overall developer experience.
      </p>

      <h2 class="text-2xl font-medium text-yellow-600">Electron & Real-time Integration</h2>
      <p>
        One of the most exciting projects was the development of a new Electron-based application. I
        was responsible for studying and implementing the integration of <b>GetStream</b>, for the
        purpose of providing support in the form of messaging features and real-time notifications.
        I successfully integrated GetStream into both this new desktop application and the existing
        flagship management system, ensuring a cohesive experience across platforms.
      </p>

      <h2 class="text-2xl font-medium text-yellow-600">Engineering & Collaboration</h2>
      <p>
        Beyond refactors, I delivered massive feature additions across the entire product suite.
        This involved deep dives into the <b>Firebase/GCP</b> ecosystem—debugging complex issues
        through Cloud Logging and optimizing database performance with strategic indexing.
      </p>
      <p>
        Working closely with a talented team of 5-10 engineers, I found the environment both
        challenging and incredibly rewarding. The fast-paced nature of the ticketing industry
        provided the perfect backdrop for exploring the latest Svelte features and building
        scalable, user-centric software.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Reps & Co');

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
