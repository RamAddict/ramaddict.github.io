<template>
  <Header></Header>
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
.transition-color-change {
  transition: background-color 0.2s ease-in-out;
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.99);
  stroke: rgba(0, 0, 0, 0.99);
  select {
    @apply bg-[#fff];
    @apply transition-color-change;
  }
  @apply transition-color-change;
}
.dark-mode {
  body {
    @apply bg-[#282725];
    stroke: #ebf4f1;
    color: #ebf4f1;
  }
  select {
    @apply bg-[#282725];
  }
}
.sepia-mode body {
  background-color: #f1e7d0;
  stroke: #433422;
  color: #433422;
  select {
    @apply bg-[#f1e7d0];
  }
}
*:focus {
  outline: none;
}
</style>
