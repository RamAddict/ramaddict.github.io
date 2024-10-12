<template>
  <footer
    class="mx-auto mt-10 flex max-w-5xl justify-between border-t-2 border-slate-200 pt-8 text-sm sm:mt-14
      sm:pt-10 sm:text-base xl:mt-20"
  >
    <span>© {{ new Date().getFullYear() }} Arthur Bianco.</span>
    <span>Made with <u>Nuxt</u>. <span class="cursor-pointer" @click="playCroak">🐸</span></span>
  </footer>
</template>

<script lang="ts" setup>
function playCroak() {
  new Audio('Frog-sound-ribbit.mp3').play();
}
</script>
