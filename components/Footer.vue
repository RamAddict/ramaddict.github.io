<script lang="ts" setup>
const colorMode = useColorMode();
function playCroak() {
  new Audio('Frog-sound-ribbit.mp3').play();
}
</script>

<template>
  <footer
    class="mx-auto mt-10 flex max-w-5xl justify-between border-t-2 border-current px-4 pt-8 text-sm sm:mt-14
      sm:px-0 sm:pt-10 sm:text-base xl:mt-20"
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
