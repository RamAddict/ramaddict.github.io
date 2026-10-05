<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <a
        href="https://pondlabs.github.io/roosterchat/"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
      >
        <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
      </a>
    </h1>
    <SkillChips :skills="['Flutter', 'Dart', 'Matrix', 'WebRTC', 'CEF']" />
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">R</span>ooster is a voice-first chat app for hanging out
        with your people: always-on voice rooms, screen sharing, a soundboard, a DJ booth and text
        channels. Think Discord, except it runs on
        <a class="link" href="https://matrix.org" target="_blank">Matrix</a>, so your crew can host
        its own server, federate with others and keep conversations end-to-end encrypted. It runs on
        desktop (Linux and Windows) and in the browser.
      </p>
      <p>
        We started it at PondLabs as a fork of
        <a class="link" href="https://github.com/commetchat/commet" target="_blank">Commet</a>
        and have been shipping releases almost daily since. I work all over it: the voice audio
        pipeline, the soundboard (heard by every client on its own track), the installers and the
        auto-updater, Windows notifications, and the CI that keeps all of it honest.
      </p>
    </section>
    <section class="flex flex-row flex-wrap gap-4 text-xl">
      <a class="link" href="https://github.com/PondLabs/roosterchat" target="_blank">Source</a>
      <a class="link" href="https://github.com/PondLabs/roosterchat/releases/latest" target="_blank"
        >Download</a
      >
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Rooster');

onMounted(() => {
  scrambler.scramble();
});
</script>
