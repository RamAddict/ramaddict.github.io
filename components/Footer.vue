<script lang="ts" setup>
const colorMode = useColorMode();
function playCroak() {
  new Audio('Frog-sound-ribbit.mp3').play();
}
</script>

<template>
  <hr class="mx-8 opacity-50">
  <footer
    class="flex flex-row justify-between px-8 py-6"
  >
    <span>© {{ new Date().getFullYear() }} Arthur Bianco.</span>
    <span>Made with <u>Nuxt</u>. <span class="cursor-pointer" @click="playCroak">🐸</span></span>
    <div>
      <h1>Color mode: {{ colorMode.value }}</h1>
      <select v-model="colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>
  </footer>
</template>
