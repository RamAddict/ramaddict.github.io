<template>
  <main class="mx-auto max-w-4xl">
    <section class="flex h-80 flex-col gap-3 rounded-3xl p-8 py-12">
      <div class="flex flex-row gap-4">
        <NuxtImg
          preload
          src="me2.jpg"
          class="hide-left w-32 rounded-full grayscale h-32 sm:h-auto"
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
      <p class="text-2xl">
        I build software for the web with
        <select class="border-b-4 border-b-[#41b883]" id="">
          <option class="">Nuxt</option>
          <option class="">Angular</option></select
        >,
        <select class="border-b-4 border-b-[#ea2868]" name="" id="">
          <option class="">Nestjs</option>
          <option class="">Express</option>
          <option class="">Spring</option></select
        >, and
        <select class="border-b-4 border-b-[#ff9900]" name="" id="">
          <option class="z-10 border-b-4 border-b-[#009900]">AWS</option>
        </select>
      </p>
      <p class="text-xl">
        I'm currently working with an Irish startup on a product called
        <a href="https://www.slick.plus" target="_blank" class="underline hover:text-[#ff3adf]"
          >Slick+</a
        >.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts"></script>
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
  // animation-delay: 2s;
}
.hide-right {
  opacity: 0.4;
  transform: translateX(200%);
  animation: smooth-appear 3s ease forwards;
  animation-delay: 1s;
}
.hide-right-delay {
  opacity: 0.4;
  transform: translateX(200%);
  animation: smooth-appear 3s ease forwards;
  animation-delay: 3s;
}

</style>
