<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 overflow-visible text-justify sm:text-left">
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h1 class="text-4xl">Playground</h1>
      <p class="text-2xl">A space for experiments, small tools, and creative coding.</p>
    </section>

    <section class="flex flex-col gap-4 rounded-3xl px-8 py-6">
      <hr class="mb-4 opacity-50" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <NuxtLink to="/playground/game-of-life">
          <SpotlightCard
            class="card flex aspect-video flex-col justify-center overflow-hidden border-base-content"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">
                Conway's Game of Life w/ WebGPU
              </h3>
              <div class="absolute bottom-0">
                <p>Game of Life</p>
                <p class="text-xs">WebGPU Experiment</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
        <NuxtLink to="/playground/doomscroll-oldies">
          <SpotlightCard
            class="card flex aspect-video flex-col justify-center overflow-hidden border-base-content doomscroll-oldies"
          >
            <div class="card-image-bg"></div>
            <div class="card-content">
              <h3 class="m-auto text-center text-2xl font-bold tracking-tighter">
                Doomscroll Oldies
              </h3>
              <div class="absolute bottom-0">
                <p>Retro Game Discovery</p>
                <p class="text-xs">Next.js + Convex</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
.card {
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 0.2rem;
  cursor: pointer;
  position: relative;
}

.card-image-bg {
  position: absolute;
  inset: 0;
  background-image: url('/playground/game-of-life.png');
  background-size: cover;
  opacity: 0.12;
  z-index: 0;
}

.doomscroll-oldies .card-image-bg {
  background-image: url('/playground/doomscroll-oldies.png');
  opacity: 0.15;
}

.card > .card-content {
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  inset: 1px;
  padding: 10px;
  position: absolute;
  z-index: 2;
}
</style>
