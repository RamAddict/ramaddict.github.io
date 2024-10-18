<template>
  <main class="mx-auto max-w-5xl">
    <section class="flex flex-col gap-8 rounded-3xl px-8">
      <div class="just flex flex-row gap-4">
        <NuxtImg
          preload
          src="me2.jpg"
          class="hide-left h-32 w-32 rounded-full grayscale sm:h-auto"
          width="200"
          height="200"
          fit="cover"
          placeholder
          format="webp"
        />
        <div class="my-auto flex flex-col gap-2">
          <h2 class="hide-right text-4xl">Hi, my name is Arthur.</h2>
          <h1 class="hide-right-delay text-2xl">
            I am a Web & Software Developer based in Florianópolis, Brazil.
          </h1>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-2xl leading-4">
          I build software for the web with
          <span class="inline-block w-20 border-b-4 border-b-[#41b883]">{{ front }}</span
          >, <span class="inline-block w-20 border-b-4 border-b-[#ea2868]">{{ back }}</span
          >, and <span class="inline-block border-b-4 border-b-[#ff9900]">AWS</span>.
          <!-- <select class="border-b-4 border-b-[#41b883] transition-opacity" id="">
            <option class="transition-opacity">Nuxt</option>
            <option class="transition-opacity">Angular</option></select
          >,
          <select class="border-b-4 border-b-[#ea2868]" name="" id="">
            <option class="">Nestjs</option>
            <option class="">Express</option>
            <option class="">Spring</option></select
          >, and
          <select class="border-b-4 border-b-[#ff9900]" name="" id="">
            <option class="z-10 border-b-4 border-b-[#009900]">AWS</option>
          </select> -->
        </p>
        <p class="text-2xl">
          I'm currently working with an Irish startup on a product called
          <a href="https://www.slick.plus" target="_blank" class="hover:underline">Slick+</a>.
        </p>
        <p class="text-2xl">
          Find me on
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arthurbianco/"
            class="hover:underline"
            >Linkedin</a
          >,
          <a target="_blank" href="https://github.com/RamAddict" class="hover:underline">GitHub</a>
          and
          <a target="_blank" href="https://www.instagram.com/apbiancoo/" class="hover:underline"
            >Instagram</a
          >.
        </p>
      </div>
    </section>
    <section>
      <hr class="bg-shadow mb-8 h-[1px] border-0" />
    </section>
  </main>
</template>

<script setup lang="ts">
const frontValues = ['Nuxt', 'Angular', 'Nextjs', 'Svelte'];
const backValues = ['Express', 'Spring', 'Nestjs'];
const front = ref<string>(frontValues[0]);
const back = ref<string>(backValues[0]);

onMounted(() => {
  setInterval(() => {
    front.value = frontValues[Math.floor(Math.random() * frontValues.length)];
    back.value = backValues[Math.floor(Math.random() * backValues.length)];
  }, 1000);
});
</script>

<style lang="css">
body {
  @apply overflow-hidden;
}
</style>

<style scoped lang="scss">
@keyframes smooth-appear {
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

.hide-left {
  opacity: 0;
  transform: translateX(-200%);
  animation: smooth-appear 3s ease forwards;
}
.hide-right {
  opacity: 0;
  transform: translateX(200%);
  animation: smooth-appear 3s ease forwards;
  animation-delay: 1s;
}
.hide-right-delay {
  opacity: 0;
  transform: translateX(200%);
  animation: smooth-appear 3s ease forwards;
  animation-delay: 3s;
}
</style>
