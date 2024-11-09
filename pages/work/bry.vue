<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <div class="flex flex-row gap-2 text-base-100 leading-5">
      <span class="chip">Svelte</span> <span class="chip">Spring</span
      ><span class="chip">Angular</span> <span class="chip">Wasm</span>
      <span class="chip">Postgres</span> <span class="chip">Kubernetes</span>
    </div>
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">M</span>y very first job working with web development. I
        joined as a junior software developer in 2022 a few months after graduating from college.
        The only knowledge of web development I had then were some uni projects and, most
        importantly, my course conclusion thesis.
      </p>
      <p>
        I was quickly put to work on their instance of the <i>PSBIO</i> network which is the
        biometric validation network of the brazilian public key infrastructure (ICP-Brasil). In it,
        every user is required to provide a biometric template to validate their identity when
        issuing a digital certificate. Usually, we collect the user's fingerprints, and picture. The
        template is generated from this data, and stored in the network. If users ever try to issue
        a certificate using someone else's biometrics, the network will reject the request.
      </p>
      <p>
        The Initial tasks were on improving the biometric capture and validation process. The
        primary steps involved: capturing users' fingerprints, conducting fingerprint quality checks
        and duplicate verification in the back-end, capturing a facial image, and finally, sending
        this certificate request to the network.
      </p>
      <h2 class="text-2xl font-medium">Fingerprint Wasm</h2>
      <p>
        During that time, I realized that the fingerprint validation could be performed in the
        front-end. I didn't find any libraries that performed this task, so I set out to create my
        own. Instead of reinventing the wheel, I found the old NIST project with the C code that did
        the validations we needed. I then adapted it and used emscripten to compile to web assembly,
        thus creating an open-source library called
        <NuxtLink
          class="link"
          to="https://github.com/RamAddict/NBIS-JS"
          >NBIS-JS</NuxtLink
        >.
      </p>
      <p>
        The result was a finger capturing process that no longer required an API, simplifying the
        integration process for new clients and speeding up biometric validation for end users with
        poor internet connections. Also, this opened up the possibility to collect user biometrics
        in the browser even in situations without an internet connection to hit the API.
      </p>
      <p>
        With the results of this project I went on to give a presentation on the subject of web
        assembly and its applications at
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
        class="m-auto py-4"
      >
      </NuxtImg>
      <h2 class="text-2xl font-medium">Web component</h2>
      <p>
        After all this, we understood that the process of collecting the users biometrics was a big
        enough part of the whole system that it deserved its own module. Having spent the most time
        working with biometrics, I was tasked with planning and building a web component that
        encapsulated the collection process. We agreed upon creating a web component that would very
        customizable to be able to be used in an array of products the company had.
      </p>
      <NuxtImg
        class="m-auto py-4"
        width="700"
        src="/work/bry/fingers-collector.png"
        alt="Print of the web collector component's finger capture tab"
      ></NuxtImg>
      <p>
        The tools I used to build this component were:
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://daisyui.com/"
          >DaisyUI</NuxtLink
        >, Tailwind, Svelte. This combination proved very effective in providing the customizability
        needed along with ease of development and performance granted by Svelte's web-component api.
        This web-component also allowed for the expansion of the face capture capabilities. Namely,
        including face detection with custom parameter validation, automatic picture taking, and
        liveness checking, all able to be configured by the user and loaded dynamically, saving
        space when turned off.
      </p>
      <NuxtImg
        class="m-auto py-4"
        width="700"
        src="/work/bry/face-collector.png"
        alt="Print of the web collector component's face capture tab"
      ></NuxtImg>
      <p>
        Although this component is not open-source, it is available on
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://www.npmjs.com/package/bry-biometric-collector"
          >npm</NuxtLink
        >.
      </p>
      <p>
        All things considered, this was a great experience. I loved the stuff I was working on and
        the results we got. It was a great learning experience and I'm glad I got to work with such
        a talented team on such interesting projects.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Bry Tecnologia');

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
