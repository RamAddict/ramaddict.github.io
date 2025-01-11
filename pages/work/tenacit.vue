<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
    </h1>
    <SkillChips
      :skills="['Express', 'Angular', 'Angular Material', 'AWS', 'MongoDB', 'Serverless']"
    ></SkillChips>
    <section class="flex flex-col gap-4 text-xl">
      <p>
        <span class="font-cursive text-6xl">T</span>enacit is a startup I co-founded during my time
        at BRy Tecnologia. It is a maintenance management platform targeted at small and medium
        enterprises. Having worked at BRy for half a year, I was anxious to try out something other
        than a Spring monolith running on self-hosted Kubernetes. So that's what I did.
      </p>
      <p>
        We settled for a serverless architecture, using AWS as the cloud provider. This solution
        proved to be quite effective and cost-efficient. It runs almost for free. All three
        environments. Our biggest costs are the hosted zone and the domain name. It didn't
        come with its issues, though, development does take a bit longer as we have to test in
        the cloud and also work around some issues inherent to the architecture. Such as creating
        warmers for the lambdas and dealing with SNS topics so we don't freeze the user while
        sending emails, just to name a few.
      </p>
      <p>
        As usual, I operated in all facets of the project, from coming up with UI sketches and
        implementing them to creating and testing the API in the backend to coming up with and
        writing the AWS infrastructure. The project was built with Angular and Angular Material in
        the front, and Express running in lambda and a MongoDB database.
      </p>
      <p>
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

onMounted(() => {
  scrambler.scramble();
});
</script>

<style lang="css" scoped>
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
