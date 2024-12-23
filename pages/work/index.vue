<template>
  <main
    id="cards"
    class="mx-auto flex max-w-5xl flex-col gap-8 overflow-visible  text-justify sm:text-left"
    @mousemove="updateCssVars($event)"
  >
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h1 class="text-4xl">Work</h1>
      <p class="text-2xl">Thing's I've made or learned at the companies I have worked for.</p>
    </section>
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h2 class="text-2xl">Most recent work</h2>
      <hr class="mb-4 opacity-50" />
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <NuxtLink
          to="/work/slick-plus"
          class="border-base-content card flex aspect-video flex-col justify-center border"
        >
          <div class="card-content">
            <NuxtImg width="160" src="/work/slick-plus-logo.svg" alt="bry logo" class="m-auto">
            </NuxtImg>
            <div class="absolute bottom-0">
              <p>Slick Plus</p>
              <p class="text-xs">Mar 2024 - Present</p>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/work/bry"
          class="border-base-content card flex aspect-video flex-col justify-center border"
        >
          <div class="card-content">
            <NuxtImg width="120" src="/work/bry-logo-blue.webp" alt="bry logo" class="m-auto">
            </NuxtImg>
            <div class="absolute bottom-0">
              <p>Bry Tecnologia</p>
              <p class="text-xs">Mar 2022 - Mar 2024</p>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/work/ecl"
          class="border-base-content card flex aspect-video flex-col justify-center border"
        >
          <div class="card-content">
            <NuxtImg width="120" src="/work/ecl-logo.png" alt="bry logo" class="m-auto"> </NuxtImg>
            <div class="absolute bottom-0">
              <p>Embedded Computing Laboratory</p>
              <p class="text-xs">Aug 2018 - Jul 2020</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
    <section class="flex flex-col gap-4 rounded-3xl px-8 py-6">
      <h2 class="text-2xl">Side projects</h2>
      <hr class="mb-4 opacity-50" />
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <NuxtLink
          to="/work/tenacit"
          class="border-base-content card flex aspect-video flex-col justify-center border"
        >
          <div class="card-content">
            <NuxtImg width="160" src="/work/tenacit_logo.png" alt="bry logo" class="m-auto">
            </NuxtImg>
            <div class="absolute bottom-0">
              <p>Tenacit</p>
              <p class="text-xs">Dec 2022 - Mar 2024</p>
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
#cards:hover > .card::after {
  opacity: 1;
}
.card:hover::after {
  opacity: 0.25;
}

.card > .card-content {
  /* background-color: var(--card-color); */
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
