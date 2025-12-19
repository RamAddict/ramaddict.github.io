<script setup lang="ts">
interface Props {
  to: string;
  title?: string;
  subtitle?: string;
  image?: string;
  imageOpacity?: number;
}
const props = withDefaults(defineProps<Props>(), {
  imageOpacity: 0.12,
});
const cardRef = ref<HTMLElement | null>(null);
function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return;
  const rect = cardRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  cardRef.value.style.setProperty('--mouse-x', `${x}px`);
  cardRef.value.style.setProperty('--mouse-y', `${y}px`);
}
</script>
<template>
  <NuxtLink
    ref="cardRef"
    :to="to"
    class="interactive-card flex aspect-video flex-col justify-center overflow-hidden border
      border-base-content"
    @mousemove="handleMouseMove"
  >
    <!-- Background Image Layer -->
    <div
      v-if="image"
      class="card-image-bg"
      :style="{ backgroundImage: `url(${image})`, opacity: imageOpacity }"
    ></div>
    <div class="card-content">
      <!-- Slot for logo or custom visualization -->
      <div class="flex flex-grow items-center justify-center">
        <slot name="logo">
          <h3 v-if="title" class="text-center text-3xl font-bold tracking-tighter">
            {{ title }}
          </h3>
        </slot>
      </div>
      <!-- Bottom Info -->
      <div class="absolute bottom-0 left-0 right-0 p-4 pt-0">
        <p v-if="title" class="font-medium text-white">{{ title }}</p>
        <p v-if="subtitle" class="text-xs text-base-content/70">{{ subtitle }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped lang="css">
.interactive-card {
  background-color: rgba(255, 255, 255, 0.06);
  position: relative;
  border-radius: 0.2rem;
  cursor: pointer;
  z-index: 1;
}
.card-image-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}
.interactive-card::before,
.interactive-card::after {
  border-radius: inherit;
  content: '';
  height: 100%;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 500ms;
  width: 100%;
  pointer-events: none;
}
/* Base interactive effect (the subtle glow around the mouse) */
.interactive-card::after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    var(--bc),
    transparent 40%
  );
  opacity: 0;
  z-index: 1;
}
/* Inner border glow */
.interactive-card::before {
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  z-index: 3;
}
/* Individual card hover makes it more prominent */
.interactive-card:hover::after {
  opacity: 0.25;
}
.card-content {
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
