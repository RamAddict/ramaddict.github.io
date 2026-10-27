<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips
      :skills="['Svelte 4 & 5', 'Firebase', 'GCP', 'Electron', 'AWS', 'GetStream', 'TypeScript']"
    ></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p v-if="es">
        <span class="font-cursive text-6xl">R</span>eps & Co es una empresa de tecnología de la
        industria de venta de entradas, que usa estrategias basadas en datos para mejorar el
        ecosistema de eventos en vivo. Entré como desarrollador Full Stack, trabajando principalmente
        con Svelte (versiones 4 y 5) y Firebase para construir y mantener aplicaciones de alto
        tráfico.
      </p>
      <p v-else>
        <span class="font-cursive text-6xl">R</span>eps & Co is a technology company operating in
        the ticketing industry, using data-driven strategies to improve the live event ecosystem. I
        joined as a Full Stack Developer, working primarily with Svelte (versions 4 and 5) and
        Firebase to build and maintain high-traffic applications.
      </p>

      <p v-if="es">
        Mi foco principal fue el sistema insignia de gestión de solicitudes de entradas. Esta pieza
        crítica de la infraestructura había sido desarrollada originalmente por personas que no eran
        ingenieros, lo que dejó una deuda técnica importante. Lideré una refactorización completa,
        priorizando la legibilidad del código, las buenas prácticas modernas y el rendimiento.
        Aprovechando el ciclo de vida reactivo de Svelte e implementando estrategias eficientes de
        carga de datos, como una paginación bien hecha, logré reducir mucho los tiempos de carga y
        mejorar la experiencia de desarrollo en general.
      </p>
      <p v-else>
        My main focus was on the flagship ticket request management system. This critical piece of
        infrastructure had been originally developed by non-engineers, leading to significant
        technical debt. I spearheaded a comprehensive refactoring effort, prioritizing code
        readability, modern best practices, and performance. By leveraging Svelte's reactive
        lifecycle and implementing efficient data fetching strategies like proper pagination, I was
        able to significantly reduce load times and improve the overall developer experience.
      </p>

      <h2 class="text-2xl font-medium text-yellow-600">
        {{ es ? 'Electron e integración en tiempo real' : 'Electron & Real-time Integration' }}
      </h2>
      <p v-if="es">
        Uno de los proyectos más emocionantes fue el desarrollo de una nueva aplicación en Electron.
        Me encargué de estudiar e implementar la integración de <b>GetStream</b>, para ofrecer
        soporte con mensajería y notificaciones en tiempo real. Integré GetStream tanto en esta nueva
        aplicación de escritorio como en el sistema de gestión principal, logrando una experiencia
        coherente entre plataformas.
      </p>
      <p v-else>
        One of the most exciting projects was the development of a new Electron-based application. I
        was responsible for studying and implementing the integration of <b>GetStream</b>, for the
        purpose of providing support in the form of messaging features and real-time notifications.
        I successfully integrated GetStream into both this new desktop application and the existing
        flagship management system, ensuring a cohesive experience across platforms.
      </p>

      <h2 class="text-2xl font-medium text-yellow-600">
        {{ es ? 'Ingeniería y colaboración' : 'Engineering & Collaboration' }}
      </h2>
      <p v-if="es">
        Más allá de las refactorizaciones, entregué funcionalidades grandes en toda la suite de
        productos. Eso implicó meterme a fondo en el ecosistema <b>Firebase/GCP</b>: depurar
        problemas complejos con Cloud Logging y optimizar el rendimiento de la base de datos con
        índices bien pensados.
      </p>
      <p v-else>
        Beyond refactors, I delivered massive feature additions across the entire product suite.
        This involved deep dives into the <b>Firebase/GCP</b> ecosystem—debugging complex issues
        through Cloud Logging and optimizing database performance with strategic indexing.
      </p>
      <p v-if="es">
        Trabajando de cerca con un equipo talentoso de 5 a 10 ingenieros, el ambiente fue desafiante
        y muy gratificante. El ritmo acelerado de la industria de las entradas fue el escenario
        perfecto para explorar lo último de Svelte y construir software escalable y centrado en el
        usuario.
      </p>
      <p v-else>
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
