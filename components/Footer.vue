<script lang="ts" setup>
const colorMode = useColorMode();
function playCroak() {
  new Audio('Frog-sound-ribbit.mp3').play();
}
</script>

<template>
  <!-- TODO: fix pages with scroll not showing particles on the bottom -->
  <ParticlesBg
    class="absolute inset-0 -z-10"
    :quantity="100"
    :ease="100"
    :color="colorMode.value === 'dark' ? '#FFF' : colorMode.value === 'sepia' ? '#433422' : '#000'"
    :staticity="10"
    refresh
  />
  <div class="mx-auto max-w-5xl">
    <hr class="mx-8 opacity-50" />
    <footer class="m-auto flex max-w-5xl flex-row justify-center sm:justify-between px-8 py-6 text-sm sm:text-base">
      <span>© {{ new Date().getFullYear() }} Arthur Bianco.</span>
      <span class="hidden sm:block"
        >Made with <u>Nuxt</u>. <span class="cursor-pointer" @click="playCroak">🐸</span></span
      >
      <div class="hidden sm:block">
        <h1>Color mode: {{ colorMode.value }}</h1>
        <select v-model="colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
    </footer>
  </div>
</template>
