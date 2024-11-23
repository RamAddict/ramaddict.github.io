<script setup lang="ts">
defineProps({ skillName: String });
</script>
<template>
  <span class="chip">{{ skillName }}</span>
</template>

<style scoped lang="css">
.chip {
  @apply rounded-full bg-yellow-700 px-2;
}
</style>
