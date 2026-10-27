<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16  text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips
      :skills="['Svelte', 'Spring', 'Angular', 'React', 'AngularJS', 'Wasm', 'Postgres', 'Kubernetes']"
    ></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p v-if="es">
        <span class="font-cursive text-6xl">E</span>ntré como desarrollador de software junior en
        2022, unos meses después de graduarme de la universidad. Todo lo que sabía de desarrollo web
        en ese momento venía de algunos proyectos de la facultad (bastante grandes, hay que decirlo)
        y, sobre todo, de mi trabajo de fin de carrera.
      </p>
      <p v-else>
        <span class="font-cursive text-6xl">I</span> joined as a junior software developer in 2022 a few months after graduating from college.
        The only knowledge of web development I had then were some (arguably big) uni projects and, most
        importantly, my course conclusion thesis.
      </p>
      <p v-if="es">
        Rápidamente me pusieron a trabajar en su instancia de la red <i>PSBIO</i>, la red de
        validación biométrica de la infraestructura de clave pública brasileña (ICP-Brasil). En
        ella, cada usuario debe proporcionar una plantilla biométrica para validar su identidad al
        emitir un certificado digital. Normalmente recolectamos las huellas digitales y una foto del
        usuario. La plantilla se genera a partir de esos datos y se almacena en la red. Si alguien
        intenta emitir un certificado usando la biometría de otra persona, la red rechaza la
        solicitud.
      </p>
      <p v-else>
        I was quickly put to work on their instance of the <i>PSBIO</i> network which is the
        biometric validation network of the brazilian public key infrastructure (ICP-Brasil). In it,
        every user is required to provide a biometric template to validate their identity when
        issuing a digital certificate. Usually, we collect the user's fingerprints, and picture. The
        template is generated from this data, and stored in the network. If users ever try to issue
        a certificate using someone else's biometrics, the network will reject the request.
      </p>
      <p v-if="es">
        Las primeras tareas fueron mejorar el proceso de captura y validación biométrica. Los pasos
        principales eran: capturar las huellas del usuario, hacer los controles de calidad de las
        huellas y la verificación de duplicados en el back-end, capturar una imagen del rostro y,
        por último, enviar la solicitud de certificado a la red.
      </p>
      <p v-else>
        The Initial tasks were on improving the biometric capture and validation process. The
        primary steps involved: capturing users' fingerprints, conducting fingerprint quality checks
        and duplicate verification in the back-end, capturing a facial image, and finally, sending
        this certificate request to the network.
      </p>
      <h2 class="text-2xl font-medium">{{ es ? 'Huellas en Wasm' : 'Fingerprint Wasm' }}</h2>
      <p v-if="es">
        En esa época me di cuenta de que la validación de huellas se podía hacer en el front-end. No
        encontré ninguna librería que lo hiciera, así que me propuse crear la mía. En vez de
        reinventar la rueda, encontré el viejo proyecto del NIST con el código C que hacía las
        validaciones que necesitábamos. Lo adapté y usé emscripten para compilarlo a WebAssembly,
        creando así una librería de código abierto llamada
        <NuxtLink class="link" to="https://github.com/RamAddict/NBIS-JS">NBIS-JS</NuxtLink>.
      </p>
      <p v-else>
        During that time, I realized that the fingerprint validation could be performed in the
        front-end. I didn't find any libraries that performed this task, so I set out to create my
        own. Instead of reinventing the wheel, I found the old NIST project with the C code that did
        the validations we needed. I then adapted it and used emscripten to compile to web assembly,
        thus creating an open-source library called
        <NuxtLink class="link" to="https://github.com/RamAddict/NBIS-JS">NBIS-JS</NuxtLink>.
      </p>
      <p v-if="es">
        El resultado fue un proceso de captura de huellas que ya no necesitaba una API, lo que
        simplificó la integración para clientes nuevos y aceleró la validación biométrica para
        usuarios con mala conexión a internet. Además, abrió la posibilidad de recolectar la
        biometría en el navegador incluso sin conexión para llegar a la API.
      </p>
      <p v-else>
        The result was a finger capturing process that no longer required an API, simplifying the
        integration process for new clients and speeding up biometric validation for end users with
        poor internet connections. Also, this opened up the possibility to collect user biometrics
        in the browser even in situations without an internet connection to hit the API.
      </p>
      <p v-if="es">
        Con los resultados de este proyecto di una charla sobre WebAssembly y sus aplicaciones en
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://thedevconf.com/tdc/2023/future/trilha-web-e-front-end"
          >The Developers Conference 2023 en Porto Alegre</NuxtLink
        >.
      </p>
      <p v-else>
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
        :alt="
          es
            ? 'Foto de Arthur Bianco dando una charla sobre WebAssembly en The Developers Conference 2023 en Porto Alegre'
            : 'Picture of Arthur Bianco giving presentation on Web Assembly at The Developers Conference 2023 in Porto Alegre'
        "
        class="m-auto py-4"
      >
      </NuxtImg>
      <h2 class="text-2xl font-medium">Web component</h2>
      <p v-if="es">
        Después de todo esto, entendimos que la recolección de la biometría de los usuarios era una
        parte lo bastante grande del sistema como para merecer su propio módulo. Como yo era quien
        más tiempo había pasado trabajando con biometría, me encargaron planificar y construir un web
        component que encapsulara el proceso de recolección. Acordamos que fuera muy personalizable,
        para poder usarlo en varios productos de la empresa.
      </p>
      <p v-else>
        After all this, we understood that the process of collecting the users biometrics was a big
        enough part of the whole system that it deserved its own module. Having spent the most time
        working with biometrics, I was tasked with planning and building a web component that
        encapsulated the collection process. We agreed upon creating a web component that would very
        customizable so it could be used in an array of company products.
      </p>
      <NuxtImg
        class="m-auto py-4"
        width="700"
        src="/work/bry/fingers-collector.png"
        :alt="
          es
            ? 'Captura de la pestaña de captura de huellas del componente recolector'
            : `Print of the web collector component's finger capture tab`
        "
      ></NuxtImg>
      <p v-if="es">
        Las herramientas que usé para construir este componente fueron:
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://daisyui.com/"
          >DaisyUI</NuxtLink
        >, Tailwind y Svelte. La combinación resultó muy efectiva: daba la personalización que
        necesitábamos, era fácil de desarrollar y tenía el rendimiento de la API de web components de
        Svelte. Este web component también permitió ampliar la captura de rostro, sumando detección
        de rostro con validación de parámetros personalizados, toma automática de la foto y prueba de
        vida, todo configurable por el usuario y cargado dinámicamente, ahorrando espacio cuando está
        desactivado.
      </p>
      <p v-else>
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
        :alt="
          es
            ? 'Captura de la pestaña de captura de rostro del componente recolector'
            : `Print of the web collector component's face capture tab`
        "
      ></NuxtImg>
      <p v-if="es">
        Aunque este componente no es de código abierto, está disponible en
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://www.npmjs.com/package/bry-biometric-collector"
          >npm</NuxtLink
        >.
      </p>
      <p v-else>
        Although this component is not open-source, it is available on
        <NuxtLink
          class="underline duration-700 hover:text-yellow-600 hover:transition-opacity"
          to="https://www.npmjs.com/package/bry-biometric-collector"
          >npm</NuxtLink
        >.
      </p>
      <p v-if="es">
        En resumen, fue una gran experiencia. Me encantaba lo que hacía y los resultados que
        logramos. Aprendí muchísimo y me alegra haber trabajado con un equipo tan talentoso en
        proyectos tan interesantes.
      </p>
      <p v-else>
        All things considered, this was a great experience. I loved the stuff I was working on and
        the results we got. It was a great learning experience and I'm glad I got to work with such
        a talented team on such interesting projects.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Bry Tecnologia');
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
