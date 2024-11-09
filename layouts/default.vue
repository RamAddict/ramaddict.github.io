<template>
  <Header class="pb-12"></Header>
  <slot />
  <Footer></Footer>
</template>

<script setup lang="ts">
useHead({
  title: "Arthur Bianco's - Personal website",
  meta: [{ name: 'description', content: "Arthur Bianco's personal website" }],
});
</script>

<style lang="scss">
:root {
  --b1: oklch(100% 3.5594404384177905e-8 106.37411429114086);
  --bc: oklch(38.67% 0 0);
}

.transition-color-change {
  transition: background-color 0.2s ease-in-out;
}

body {
  @apply bg-base-100;
  @apply text-base-content;
  @apply stroke-base-content;
  select, input, textarea { 
    @apply bg-base-100;
    @apply transition-color-change;
    @apply border border-base-content;
  }
  @apply transition-color-change;
}
.dark-mode {
  --b1: oklch(27.31% 0.0039 84.58);
  --bc: oklch(95.96% 0.0103 174.27);
}

.sepia-mode {
  --b1: oklch(92.98% 0.0323 87.29);
  --bc: oklch(33.66% 0.0362 71.19);
}

*:focus {
  outline: none;
}
</style>
