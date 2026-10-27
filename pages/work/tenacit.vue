<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips
      :skills="['Express', 'Angular', 'Angular Material', 'AWS', 'MongoDB', 'Serverless']"
    ></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p v-if="es">
        <span class="font-cursive text-6xl">T</span>enacit es una startup que cofundé mientras
        trabajaba en BRy Tecnologia. Es una plataforma de gestión de mantenimiento pensada para
        pequeñas y medianas empresas. Después de medio año en BRy, tenía ganas de probar algo
        distinto a un monolito en Spring corriendo en un Kubernetes propio. Y eso hice.
      </p>
      <p v-else>
        <span class="font-cursive text-6xl">T</span>enacit is a startup I co-founded during my time
        at BRy Tecnologia. It is a maintenance management platform targeted at small and medium
        enterprises. Having worked at BRy for half a year, I was anxious to try out something other
        than a Spring monolith running on self-hosted Kubernetes. So that's what I did.
      </p>
      <p v-if="es">
        Optamos por una arquitectura serverless, con AWS como proveedor de nube. La solución resultó
        bastante efectiva y económica: corre casi gratis. Los tres entornos. Nuestros mayores costos
        son la zona alojada y el nombre de dominio. Claro que no vino sin problemas: el desarrollo
        lleva un poco más de tiempo porque hay que probar en la nube y esquivar algunas limitaciones
        propias de la arquitectura. Por ejemplo, crear warmers para las lambdas y usar tópicos de SNS
        para no congelar al usuario mientras se envían correos, por nombrar algunas.
      </p>
      <p v-else>
        We settled for a serverless architecture, using AWS as the cloud provider. This solution
        proved to be quite effective and cost-efficient. It runs almost for free. All three
        environments. Our biggest costs are the hosted zone and the domain name. It didn't
        come with its issues, though, development does take a bit longer as we have to test in
        the cloud and also work around some issues inherent to the architecture. Such as creating
        warmers for the lambdas and dealing with SNS topics so we don't freeze the user while
        sending emails, just to name a few.
      </p>
      <p v-if="es">
        Como siempre, trabajé en todas las partes del proyecto: desde bocetar la interfaz e
        implementarla, hasta crear y probar la API en el backend y diseñar y escribir la
        infraestructura en AWS. El proyecto se construyó con Angular y Angular Material en el front,
        y Express corriendo en lambda con una base de datos MongoDB.
      </p>
      <p v-else>
        As usual, I operated in all facets of the project, from coming up with UI sketches and
        implementing them to creating and testing the API in the backend to coming up with and
        writing the AWS infrastructure. The project was built with Angular and Angular Material in
        the front, and Express running in lambda and a MongoDB database.
      </p>
      <p v-if="es">
        Fue la mejor experiencia de aprendizaje de mi carrera hasta ahora. Aprendí mucho sobre
        arquitectura serverless, sobre cómo trabajar con AWS y cómo construir una aplicación
        escalable y confiable. También aprendí sobre modelos de negocio, cómo manejar las distintas
        etapas y prioridades de una startup, y cómo construir un producto que la gente realmente
        quiera usar, y convencerla de comprarlo.
      </p>
      <p v-else>
        This was the best learning experience I had in my career so far. I learned a lot about
        serverless architecture, how to work with AWS, and how to build a scalable and reliable
        application. I also learned about business models, how to deal with the different phases and
        priorities of a startup, and how to build a product that people actually want to use and
        convince them to buy it.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrambler = useScrambler('Tenacit');
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
