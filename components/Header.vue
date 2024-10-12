<template>
  <div class="px-4 py-8 sm:px-8 sm:pb-10 sm:pt-10 xl:pt-12">
    <header class="flex flex-col gap-4">
      <NuxtLink
        to="/"
        class="m-auto flex shrink-0 flex-col items-center justify-center gap-4 overflow-hidden"
      >
        <NuxtImg
          preload
          src="me2.jpg"
          class="hide-left sm:h-[10rem] w-32 rounded-full grayscale sm:w-auto"
          width="200"
          height="200"
          fit="cover"
          placeholder
          format="webp"
        />
        <div class="text-4xl font-bold">
          <button
            class="hide-right flex flex-col items-center leading-5 after:mt-2 after:inline-block after:h-[6px]
              after:w-full after:max-w-6 after:rounded-full after:bg-yellow-600 after:sm:max-w-8"
          >
            Arthur Bianco
          </button>
        </div>
      </NuxtLink>
      <nav class="flex flex-row justify-center gap-6 text-xl text-gray-700 sm:flex-row sm:text-3xl">
        <NuxtLink class="duration-700 hover:text-yellow-600 hover:transition-opacity"
          >Projects</NuxtLink
        ><NuxtLink class="duration-700 hover:text-yellow-600 hover:transition-opacity"
          >Work</NuxtLink
        ><NuxtLink
          :class="{ 'text-yellow-600': route.path === '/contact' }"
          to="contact"
          class="duration-700 hover:text-yellow-600 hover:transition-opacity"
          >Contact</NuxtLink
        >
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
@keyframes smooth-appear {
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

.hide-left {
  opacity: 0.4;
  transform: translateX(-200%);
  animation: smooth-appear 3s ease forwards;
}
.hide-right {
  opacity: 0.4;
  transform: translateX(200%);
  animation: smooth-appear 3s ease forwards;
}
</style>
