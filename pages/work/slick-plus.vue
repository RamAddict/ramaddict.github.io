<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips
      :skills="['NestJs', 'Angular', 'Postgres', 'AWS', 'Sequelize', 'AWS CDK']"
    ></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">S</span>lick Plus (Slick+) is a platform designed to
        enhance knowledge sharing and collaboration in hybrid work environments. It focuses on
        creating, sharing, and learning through bite-sized videos, which helps in onboarding,
        mentoring, and upskilling employees.
      </p>
      <p>
        I joined in 2024, shortly after our CTO when the product was being
        made available to its early testers. Together, we created the dev and production
        environments added testing frameworks and created an aws CDK and CI configuration to run
        tests and deploys to the environments.
      </p>
      <p>
        I operated in all facets of the project, from implementing UI from figma draw ups to
        creating and testing the API in the backend to coming up with and writing the AWS
        infraestructure. The project is built with Angular in the front, Nestjs running in the a
        k8s cluster and I mostly enjoy the familiarity.
      </p>
    </section>
    <section class="flex flex-col gap-4 text-xl">
      <h2 class="text-3xl font-medium">Challenges</h2>
      <h3 class="text-2xl">Slow loading videos</h3>
      <p>
        Being a sort of streaming platform brought new challenges related to video processing I had
        to tackle. Firstly, videos that were recorded in the browser were not seekable in Chrome.
        There is an
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://issues.chromium.org/issues/40482588"
          >old issue</NuxtLink
        >
        that was marked as won't solve about this very problem. The workaround is to use Node-EBML
        which writes the appropriate time markers to the video file, making it playable. Still, this
        was not enough. I noticed that, depending on the video container and encoding, S3 is unable
        to stream the video properly. If you record a video with the 'avc1.42E01E' codec and properties,
        it won't stream properly from the bucket, sending only a few kilobytes instead of loading
        the whole video.
      </p>
      <p>
        The solution we came up with was to use a lambda to reencode the video after it had been
        uploaded. We also took the extra steps of splitting the video into chunks ready for HTTP
        live streaming (HLS) and doing adaptive bitrate streaming (ABS). After reencoding the
        videos, the lambda sends a message to the Bull.js queue which calls the backend which
        updates the DB with the new video URL. In the end, we had a massive ffmpeg command, but it
        worked like a charm. No more slow loading or unseekable videos.
      </p>
    </section>
    <section class="animate-pulse pt-32">Still being written...</section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Slick Plus');

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
