<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips
      :skills="['NestJs', 'Angular', 'Postgres', 'AWS', 'Sequelize', 'AWS CDK']"
    ></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p v-if="es">
        <span class="font-cursive text-6xl">S</span>lick Plus (Slick+) es una plataforma pensada
        para mejorar el intercambio de conocimiento y la colaboración en entornos de trabajo
        híbridos. Se centra en crear, compartir y aprender con videos cortos, lo que ayuda en el
        onboarding, la mentoría y la capacitación de los empleados.
      </p>
      <p v-else>
        <span class="font-cursive text-6xl">S</span>lick Plus (Slick+) is a platform designed to
        enhance knowledge sharing and collaboration in hybrid work environments. It focuses on
        creating, sharing, and learning through bite-sized videos, which helps in onboarding,
        mentoring, and upskilling employees.
      </p>
      <p v-if="es">
        Entré en 2024, poco después de nuestro CTO, cuando el producto se estaba abriendo a sus
        primeros testers. Juntos creamos los entornos de desarrollo y producción, sumamos frameworks
        de testing y armamos la configuración de AWS CDK y CI para correr los tests y desplegar en
        los entornos.
      </p>
      <p v-else>
        I joined in 2024, shortly after our CTO when the product was being
        made available to its early testers. Together, we created the dev and production
        environments added testing frameworks and created an aws CDK and CI configuration to run
        tests and deploys to the environments.
      </p>
      <p v-if="es">
        Trabajé en todas las partes del proyecto: desde implementar la interfaz a partir de los
        diseños en Figma, hasta crear y probar la API en el backend y diseñar y escribir la
        infraestructura en AWS. El proyecto está hecho con Angular en el front y NestJS corriendo en
        un clúster de k8s, y la verdad es que disfruto mucho esa familiaridad.
      </p>
      <p v-else>
        I operated in all facets of the project, from implementing UI from figma draw ups to
        creating and testing the API in the backend to coming up with and writing the AWS
        infraestructure. The project is built with Angular in the front, Nestjs running in the a
        k8s cluster and I mostly enjoy the familiarity.
      </p>
    </section>
    <section class="flex flex-col gap-4 text-xl">
      <h2 class="text-3xl font-medium">{{ es ? 'Desafíos' : 'Challenges' }}</h2>
      <h3 class="text-2xl">
        {{
          es
            ? 'Problemas al transmitir videos grabados en Chrome'
            : 'Issues with streaming videos recorded in chrome'
        }}
      </h3>
      <p v-if="es">
        Ser una especie de plataforma de streaming trajo desafíos nuevos de procesamiento de video que
        tuve que resolver. Primero, los videos grabados en el navegador no se podían adelantar en
        Chrome. Hay un
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://issues.chromium.org/issues/40482588"
          >issue viejo</NuxtLink
        >
        sobre este mismo problema, marcado como "no se arreglará". La solución alternativa es usar
        Node-EBML, que escribe las marcas de tiempo correctas en el archivo de video y lo vuelve
        reproducible. Aun así, no alcanzaba. Noté que, según el contenedor y la codificación del
        video, S3 no logra transmitirlo bien. Si grabas un video con el códec 'avc1.42E01E' y sus
        propiedades, no se transmite correctamente desde el bucket: envía solo unos pocos kilobytes
        en lugar de cargar el video completo.
      </p>
      <p v-else>
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
      <p v-if="es">
        La solución que encontramos fue usar una lambda para re-codificar el video después de
        subirlo. También fuimos un paso más allá: dividimos el video en fragmentos listos para HTTP
        Live Streaming (HLS) e hicimos streaming con bitrate adaptativo (ABS). Después de
        re-codificar los videos, la lambda envía un mensaje a la cola de Bull.js, que llama al
        backend, que actualiza la base de datos con la nueva URL del video. Al final quedó un comando
        de ffmpeg gigante, pero funcionó de maravilla. Se acabaron los videos lentos o que no se
        podían adelantar.
      </p>
      <p v-else>
        The solution we came up with was to use a lambda to reencode the video after it had been
        uploaded. We also took the extra steps of splitting the video into chunks ready for HTTP
        live streaming (HLS) and doing adaptive bitrate streaming (ABS). After reencoding the
        videos, the lambda sends a message to the Bull.js queue which calls the backend which
        updates the DB with the new video URL. In the end, we had a massive ffmpeg command, but it
        worked like a charm. No more slow loading or unseekable videos.
      </p>
    </section>
    <section class="animate-pulse pt-32">
      {{ es ? 'Todavía en escritura...' : 'Still being written...' }}
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Slick Plus');
const { es } = useLang();

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
