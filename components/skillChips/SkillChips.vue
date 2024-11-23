<script setup lang="ts">
defineProps({ skills: Array<string> });
</script>
<template>
  <div class="text-base-100 flex flex-row gap-2 leading-5 flex-wrap">
    <SkillChip v-for="skill in skills" :skill-name="skill" :key="skill"></SkillChip>
  </div>
</template>

<style scoped lang="css"></style>
