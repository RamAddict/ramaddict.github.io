<template>
  <main class="mx-auto max-w-5xl px-8">
    <section class="flex flex-col gap-8 rounded-3xl">
      <div class="just flex flex-row gap-4">
        <NuxtImg
          preload
          src="me.jpg"
          class="hide-left h-32 w-32 scale-[4] rounded-full grayscale sm:h-auto m-auto sm:m-0"
          width="200"
          height="200"
          fit="cover"
          placeholder
          format="webp"
          alt="Arthur Bianco"
        />
        <div class="my-auto flex flex-col gap-2">
          <h2 class="hide-right text-4xl">Hi, my name is Arthur.</h2>
          <h1 class="hide-right-delay text-2xl">
            I am a Web & Software Developer based in Florianópolis, Brazil.
          </h1>
        </div>
      </div>
      <div class="flex flex-col gap-2 hide-down-delay">
        <div class="flex flex-row">
          <p class="text-2xl leading-6">I build software for the web with</p>
          <FlipWords :words="combinations" :duration="3000" class="text-2xl leading-6" />
        </div>
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
const infras = ['AWS'];
const combinations = frontValues
  .flatMap((f) => backValues.flatMap((b) => infras.map((i) => `${f}, ${b}, and ${i}.`)))
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
</script>

<style lang="css">
body {
  @apply overflow-x-hidden;
}

.link {
  @apply underline duration-700 hover:text-yellow-600 hover:transition-opacity;
}
</style>

<style scoped lang="css">
@keyframes smooth-appear {
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

.hide-down-delay {
  opacity: 0;
  transform: translateY(100%);
  animation: smooth-appear 2s ease forwards;
  animation-delay: 5s;
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
