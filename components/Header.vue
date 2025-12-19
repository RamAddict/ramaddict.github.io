<template>
  <div class="m-auto max-w-5xl px-8 py-6">
    <header class="flex flex-col gap-4">
      <nav class="flex flex-row justify-between">
        <div class="flex flex-row">
          <div class="m-auto flex shrink-0 flex-row items-center justify-center gap-1">
            <NuxtLink to="/" class="">
              <span
                class="font-cursive text-5xl font-bold antialiased duration-700 hover:text-yellow-600
                  hover:transition-opacity"
                >A</span
              >
            </NuxtLink>
            <NuxtLink class="mt-auto" v-for="p of links" :to="p.to">
              <span
                class="font-cursive text-2xl font-bold antialiased duration-700 hover:text-yellow-600
                  hover:transition-opacity"
                >/{{ p.label.toLowerCase().split(' ').at(-1) }}</span
              >
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-row gap-8 text-lg">
          <NuxtLink
            :class="{ 'text-yellow-600': route.path === '/work' }"
            to="/work"
            class="mt-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >Work</NuxtLink
          >
          <NuxtLink
            :class="{ 'text-yellow-600': route.path === '/playground' }"
            to="/playground"
            class="mt-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >Playground</NuxtLink
          >
          <NuxtLink
            :class="{ 'text-yellow-600': route.path === '/contact' }"
            to="/contact"
            class="mt-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >Contact</NuxtLink
          >
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const links = useBreadcrumbItems({ hideRoot: true });
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
