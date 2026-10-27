<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 overflow-visible text-justify sm:text-left">
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h1 class="text-4xl">{{ es ? 'Trabajo' : 'Work' }}</h1>
      <p class="text-2xl">
        {{
          es
            ? 'Los problemas que me tocaron y lo que hice con ellos.'
            : 'The problems I was handed, and what I did about them.'
        }}
      </p>
    </section>
    <section class="flex flex-col gap-4 rounded-3xl px-8">
      <h2 class="text-2xl">{{ es ? 'Trabajo reciente' : 'Most recent work' }}</h2>
      <hr class="mb-4 opacity-50" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <h3 class="m-auto text-center text-3xl font-bold tracking-tighter">
                Impact Early Education
              </h3>
              <div class="absolute bottom-0">
                <p>Impact Early Education</p>
                <p class="text-xs">{{ es ? 'May 2026 - Actualidad · más pronto' : 'May 2026 - Present · more soon' }}</p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        <NuxtLink to="/work/slick-plus">
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <NuxtImg
                width="160"
                src="/work/slick-plus-logo.svg"
                alt="slick plus logo"
                class="m-auto"
              />
              <div class="absolute bottom-0">
                <p>Slick Plus</p>
                <p class="text-xs">{{ es ? 'Mar 2024 - Actualidad' : 'Mar 2024 - Present' }}</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>

        <NuxtLink to="/work/reps-co">
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <h3 class="m-auto text-center text-3xl font-bold tracking-tighter">Reps&Co</h3>
              <div class="absolute bottom-0">
                <p>Reps&Co</p>
                <p class="text-xs">{{ es ? 'Abr 2025 - Nov 2025' : 'Apr 2025 - Nov 2025' }}</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>

        <NuxtLink to="/work/bry">
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <NuxtImg width="120" src="/work/bry-logo-blue.webp" alt="bry logo" class="m-auto" />
              <div class="absolute bottom-0">
                <p>Bry Tecnologia</p>
                <p class="text-xs">Mar 2022 - Mar 2024</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>

        <NuxtLink to="/work/ecl">
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <NuxtImg width="120" src="/work/ecl-logo.png" alt="ecl logo" class="m-auto" />
              <div class="absolute bottom-0">
                <p>{{ es ? 'Laboratorio de Computación Embebida' : 'Embedded Computing Laboratory' }}</p>
                <p class="text-xs">{{ es ? 'Ago 2018 - Jul 2020' : 'Aug 2018 - Jul 2020' }}</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
      </div>
    </section>
    <section class="flex flex-col gap-4 rounded-3xl px-8 py-6">
      <h2 class="text-2xl">{{ es ? 'Proyectos propios' : 'Side projects' }}</h2>
      <hr class="mb-4 opacity-50" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <NuxtLink to="/work/rooster">
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <div class="m-auto flex items-center gap-3">
                <NuxtImg width="64" src="/work/rooster/mark.svg" alt="rooster logo" />
                <span class="text-4xl font-bold tracking-tighter">Rooster</span>
              </div>
              <div class="absolute bottom-0">
                <p>Rooster (PondLabs)</p>
                <p class="text-xs">{{ es ? 'Sep 2026 - Actualidad' : 'Sep 2026 - Present' }}</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>

        <NuxtLink to="/work/tenacit">
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <NuxtImg width="160" src="/work/tenacit_logo.png" alt="tenacit logo" class="m-auto" />
              <div class="absolute bottom-0">
                <p>Tenacit</p>
                <p class="text-xs">{{ es ? 'Dic 2022 - Mar 2024' : 'Dec 2022 - Mar 2024' }}</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>

        <NuxtLink to="/work/nbisjs">
          <SpotlightCard class="card flex aspect-video flex-col justify-center border-base-content">
            <div class="card-content">
              <NuxtImg width="120" src="/work/npmjs.svg" alt="nbisjs logo" class="m-auto invert" />
              <div class="absolute bottom-0">
                <p>NBISJS</p>
                <p class="text-xs">Jun 2023</p>
              </div>
            </div>
          </SpotlightCard>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { es } = useLang();
</script>

<style scoped lang="css">
.card {
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 0.2rem;
  cursor: pointer;
  position: relative;
}

.card > .card-content {
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
