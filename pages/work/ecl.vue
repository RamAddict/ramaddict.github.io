<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips :skills="['C++', 'CMake', 'Linux']"></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">E</span>CL is a scientific research laboratory I joined
        in late 2018, as a research assistant. Contrary to what its name might suggest, Its purpose
        is to study video processing techniques, VLSI circuit algorithms design, and EDA.
      </p>
      <p class="">
        During my time there I was involved in the development of
        <NuxtLink to="https://github.com/eclufsc/ophidian" class="link">Ophidian</NuxtLink> which is
        an Open-Source Library for Physical Design Research and Teaching. The problems we were
        trying to tackle during those years were detailed routing phase of IC design and later
        Global Routing. Though we weren't successful in the competitions we participated in, we
        learned a lot about the design process and how to make it more efficient. In the end I
        published a paper and gave a presentation on
        <NuxtLink
          class="link"
          to="https://media.licdn.com/dms/document/media/C4E2DAQGHqQrRjboe8g/profile-treasury-document-pdf-analyzed/0/1613531249242?e=1732147200&v=beta&t=LuFH19Q8oS7iPogfPvVlwFH-JYv80NxBq3w7g9cApcU"
          > The effects of global routing</NuxtLink
        >.
      </p>
      <p>
        While this experience had nothing to do with web development, it primarily served as a first
        working experience with other people in the context of research in Brazil. Sharing a
        workplace, interacting with soon-to-be doctors and masters, learning to think and work
        scientifically, reading lots of articles, participating in congresses, and writing but
        mostly reviewing papers were just a few of the things I learned. I am thankful to my
        professor for inviting me to the team and for those years that taught me so much.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Embedded Computing Laboratory (ECL)', 15);

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
