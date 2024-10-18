<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8">
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h1 class="text-4xl">Work</h1>
      <p class="text-2xl">Thing's I've made or learned at the companies I have worked for.</p>
    </section>
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h2 class="text-2xl">Most recent work</h2>
      <hr class="mb-8 opacity-50" />
      <div class="grid grid-cols-2 gap-4">
          <NuxtLink class="bg-base-content flex aspect-video flex-col justify-center">
            <NuxtImg width="160" src="/work/slick-plus-logo.svg" alt="bry logo" class="m-auto">
            </NuxtImg>
          </NuxtLink>
          <NuxtLink class="bg-base-content flex aspect-video flex-col justify-center">
            <NuxtImg width="120" src="/work/bry-logo-blue.webp" alt="bry logo" class="m-auto"> </NuxtImg>
          </NuxtLink>
          <NuxtLink class="bg-base-content flex aspect-video flex-col justify-center">
            <NuxtImg width="120" src="/work/ecl-logo.png" alt="bry logo" class="m-auto"> </NuxtImg>
          </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
h2 {
  background-color: --cas;
}
</style>
