<template>
  <main
    id="cards"
    class="mx-auto flex max-w-5xl flex-col gap-8 overflow-visible text-justify sm:text-left"
    @mousemove="updateCssVars($event)"
  >
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h1 class="text-4xl">Playground</h1>
      <p class="text-2xl">A space for experiments, small tools, and creative coding.</p>
    </section>

    <section class="flex flex-col gap-4 rounded-3xl px-8 py-6">
      <hr class="mb-4 opacity-50" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <NuxtLink
          to="/playground/game-of-life"
          class="card flex aspect-video flex-col justify-center overflow-hidden border border-base-content"
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
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
function updateCssVars(e: MouseEvent) {
  for (const card of document.getElementsByClassName('card')) {
    const element = card as HTMLElement;
    const rect = element.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    element.style.setProperty('--mouse-x', `${x}px`);
    element.style.setProperty('--mouse-y', `${y}px`);
  }
}
</script>

<style scoped lang="css">
.card {
  background-color: rgba(255, 255, 255, 0.06);
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

.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  );
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
  z-index: 2;
}
.card {
  border-radius: 0.2rem;
  cursor: pointer;
  position: relative;
}
.card::before,
.card::after {
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
}
.card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    var(--bc),
    transparent 40%
  );
  opacity: 0;
  z-index: 1;
}
.card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  z-index: 3;
}
#cards:hover > section > div > .card::after {
  opacity: 1;
}
.card:hover::after {
  opacity: 0.25;
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
