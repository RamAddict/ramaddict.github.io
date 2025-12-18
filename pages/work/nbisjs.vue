<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips :skills="['C', 'WebAssembly', 'Emscripten', 'TypeScript', 'NPM']"></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">N</span>BIS-JS is an open-source port of the NIST
        Biometric Image Software (NBIS) to JavaScript using WebAssembly. This project was born out
        of a professional need at BRy Tecnologia, where I realized that biometric validation and
        template generation didn't necessarily need to happen in the backend.
      </p>
      <p>
        The original NBIS is a massive C project developed by the National Institute of Standards
        and Technology. It includes tools for image processing, fingerprint feature extraction
        (mitosis), and matching. I focused on extracting the core functionality needed for web
        applications: capturing a fingerprint image, extracting its minutiae, and generating a
        standardized template (MINEX II).
      </p>
      <p>
        Using <b>Emscripten</b>, I compiled the performance-critical C code into WebAssembly. This
        allowed the browser to perform complex biometric calculations at near-native speeds. The
        result was a library that could be easily integrated into any web application, providing a
        seamless and secure biometric collection process without the need for constant round-trips
        to an API.
      </p>

      <h2 class="text-2xl font-medium text-yellow-600">Impact and Connectivity</h2>
      <p>
        The introduction of NBIS-JS significantly improved the user experience for biometric
        enrollment. It allowed for real-time quality checks directly in the browser, giving users
        immediate feedback on whether their fingerprint capture was successful. Furthermore, it
        enabled offline biometric capture, a crucial feature for field workers or users with
        unstable internet connections.
      </p>

      <p>
        This project also gave me the opportunity to dive deep into the world of WebAssembly and
        low-level optimizations. I shared these findings in a talk titled "WebAssembly:
        High-performance applications in the browser" at
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://thedevconf.com/tdc/2023/future/trilha-web-e-front-end"
          >The Developers Conference 2023 in Porto Alegre</NuxtLink
        >.
      </p>

      <NuxtImg
        width="260px"
        src="/work/bry/presentation2.jpg"
        alt="Picture of Arthur Bianco giving presentation on Web Assembly at The Developers Conference 2023 in Porto Alegre"
        class="m-auto rounded-lg py-4 shadow-lg"
      />

      <p>
        NBIS-JS is available as an open-source project on GitHub and can be easily installed via
        NPM. It continues to be a testament to how modern web technologies can breathe new life into
        battle-tested legacy software.
      </p>

      <div class="flex items-center justify-center gap-4 py-8">
        <a
          href="https://github.com/RamAddict/NBIS-JS"
          target="_blank"
          class="flex items-center gap-2 rounded-full bg-stone-800 px-6 py-2 text-white transition-colors
            hover:bg-stone-700"
        >
          <NuxtImg width="24" src="/work/knight_fl_warrior.svg" alt="GitHub" />
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/nbis-js"
          target="_blank"
          class="flex items-center gap-2 rounded-full bg-[#cb3837] px-6 py-2 text-white transition-colors
            hover:bg-[#b33130]"
        >
          <NuxtImg width="24" src="/work/npmjs.svg" alt="NPM" />
          NPM
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('NBISJS');

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
