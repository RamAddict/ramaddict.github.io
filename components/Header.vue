<template>
  <div class="m-auto max-w-5xl px-8 py-6">
    <header class="flex flex-col gap-4">
      <nav class="flex flex-col gap-4 md:flex-row md:justify-between">
        <div class="flex flex-row">
          <div class="m-auto flex shrink-0 flex-row items-center justify-center gap-1">
            <NuxtLink to="/" class="">
              <span
                class="font-cursive text-5xl font-bold antialiased duration-700 hover:text-yellow-600
                  hover:transition-opacity"
                >A</span
              >
            </NuxtLink>
            <NuxtLink class="mt-auto" v-for="p of links" :to="p.to">
              <span
                class="font-cursive text-2xl font-bold antialiased duration-700 hover:text-yellow-600
                  hover:transition-opacity"
                >/{{ segmentLabel(getLastSegment(p.to)) }}</span
              >
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-row justify-center gap-4 text-lg md:gap-8">
          <NuxtLink
            :class="{ 'text-yellow-600': route.path === '/work' }"
            to="/work"
            class="mt-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >{{ es ? 'Trabajo' : 'Work' }}</NuxtLink
          >
          <NuxtLink
            :class="{ 'text-yellow-600': route.path === '/playground' }"
            to="/playground"
            class="mt-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >{{ es ? 'Experimentos' : 'Playground' }}</NuxtLink
          >
          <NuxtLink
            :class="{ 'text-yellow-600': route.path === '/contact' }"
            to="/contact"
            class="mt-auto duration-700 hover:text-yellow-600 hover:transition-opacity"
            >{{ es ? 'Contacto' : 'Contact' }}</NuxtLink
          >
          <button
            class="mt-auto font-mono text-sm duration-700 hover:text-yellow-600 hover:transition-opacity"
            :aria-label="es ? 'Switch to English' : 'Cambiar a español'"
            @click="setLang(es ? 'en' : 'es')"
          >
            <span :class="{ 'text-yellow-600': !es }">EN</span>/<span
              :class="{ 'text-yellow-600': es }"
              >ES</span
            >
          </button>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const links = useBreadcrumbItems({ hideRoot: true });
const { es, setLang } = useLang();

const segmentsEs: Record<string, string> = {
  work: 'Trabajo',
  playground: 'Experimentos',
  contact: 'Contacto',
};
const segmentLabel = (segment: string) =>
  capitalizeFirst(es.value ? (segmentsEs[segment] ?? segment) : segment);

const capitalizeFirst = (str: string | undefined) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getLastSegment = (path: string | undefined) => {
  if (!path) return '';
  return path.split('/').filter(Boolean).at(-1) || '';
};
</script>

<style scoped>
@keyframes smooth-appear {
  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

.hide-left {
  opacity: 0.4;
  transform: translateX(-200%);
  animation: smooth-appear 3s ease forwards;
}
.hide-right {
  opacity: 0.4;
  transform: translateX(200%);
  animation: smooth-appear 3s ease forwards;
}
</style>
