<template>
  <div class="m-auto max-w-4xl py-6">
    <header class="flex flex-col gap-4">
      <nav class="flex flex-row justify-between">
        <div class="flex flex-row gap-4">
          <NuxtLink
            to="/"
            class="m-auto flex shrink-0 flex-col items-center justify-center gap-4 overflow-hidden"
          >
            <svg
              class="hover:stroke-yellow-600"
              height="56"
              width="56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <
              <text y="45" x="" class="font-cursive text-5xl">A &gt;</text>
            </svg>
            <div class="m-auto"></div>
          </NuxtLink>
        </div>
        <div class="flex flex-row gap-8 text-lg">
          <NuxtLink class="m-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >Projects</NuxtLink
          ><NuxtLink class="m-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >Work</NuxtLink
          ><NuxtLink
            :class="{ 'text-yellow-600': route.path === '/contact' }"
            to="contact"
            class="m-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >Contact</NuxtLink
          >
        </div>
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
