<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <a
        href="https://pondlabs.github.io/roosterchat/"
        target="_blank"
        rel="noopener noreferrer"
        class="flex w-fit items-center gap-3 hover:underline"
      >
        <NuxtImg width="48" src="/work/rooster/mark.svg" :alt="es ? 'Logo de Rooster' : 'Rooster logo'" />
        <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
      </a>
    </h1>
    <SkillChips :skills="['Flutter', 'Dart', 'Matrix', 'WebRTC', 'CEF']" />
    <a
      href="https://pondlabs.github.io/roosterchat/"
      target="_blank"
      rel="noopener noreferrer"
      class="group flex flex-col gap-2"
    >
      <NuxtImg
        src="/work/rooster/landing.jpg"
        width="1200"
        height="630"
        :alt="
          es
            ? 'Página de inicio de Rooster: Habla. Juega. Pasa el rato. Una sala de voz con amigos, una cabina de DJ y una pantalla compartida.'
            : 'Rooster\'s landing page: Talk. Play. Hang out. A voice room with friends, a DJ booth and a shared screen.'
        "
        class="rounded-lg border-4 border-base-content/60 shadow-lg transition duration-500 group-hover:scale-[1.01] group-hover:border-yellow-600"
      />
      <span class="text-center font-mono text-base group-hover:text-yellow-600"
        >pondlabs.github.io/roosterchat &rarr;</span
      >
    </a>
    <section v-if="es" class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">R</span>ooster es una app de chat centrada en la voz para
        pasar el rato con tu gente: salas de voz siempre abiertas, pantalla compartida, soundboard,
        cabina de DJ y canales de texto. Como Discord, pero sobre
        <a class="link" href="https://matrix.org" target="_blank">Matrix</a>, así que tu grupo puede
        tener su propio servidor, federarse con otros y mantener las conversaciones cifradas de
        extremo a extremo. Funciona en escritorio (Linux y Windows) y en el navegador.
      </p>
      <p>
        La empezamos en PondLabs como un fork de
        <a class="link" href="https://github.com/commetchat/commet" target="_blank">Commet</a>
        y desde entonces publicamos versiones casi todos los días. Trabajo en todas partes: el
        pipeline de audio de voz, el soundboard (que cada cliente escucha en su propia pista), los
        instaladores y el auto-actualizador, las notificaciones de Windows y el CI que mantiene todo
        eso honesto.
      </p>
    </section>
    <section v-else class="flex flex-col gap-4 text-xl">
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
      <a class="link" href="https://pondlabs.github.io/roosterchat/" target="_blank">{{ es ? 'Sitio web' : 'Website' }}</a>
      <a class="link" href="https://github.com/PondLabs/roosterchat" target="_blank">{{ es ? 'Código' : 'Source' }}</a>
      <a class="link" href="https://github.com/PondLabs/roosterchat/releases/latest" target="_blank"
        >{{ es ? 'Descargar' : 'Download' }}</a
      >
    </section>
  </main>
</template>

<script setup lang="ts">
const { es } = useLang();
const scrambler = useScrambler('Rooster');

onMounted(() => {
  scrambler.scramble();
});
</script>
