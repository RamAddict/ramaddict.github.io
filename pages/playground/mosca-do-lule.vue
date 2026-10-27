<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-16 text-justify sm:text-left">
    <h1 class="mb-2 mt-8 font-mono text-4xl font-bold text-yellow-600">
      <a
        href="https://github.com/RamAddict/mosca-do-lule"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:underline"
      >
        <span @mouseenter="scrambler.scramble()">{{ scrambler.text }}</span>
      </a>
    </h1>
    <SkillChips :skills="['Python', 'MuJoCo', 'flybody', 'PPO', 'Stable-Baselines3']" />
    <section class="flex flex-col gap-4 text-xl">
      <p v-if="es">
        <span class="font-cursive text-6xl">U</span>na mosca de la fruta simulada (el
        <a class="link" href="https://github.com/TuragaLab/flybody" target="_blank">flybody</a> de
        DeepMind y HHMI Janelia, en MuJoCo), con una gorrita roja, entrenada con aprendizaje por
        refuerzo para votar en una urna electrónica brasileña. Se para sobre la mesa, aprieta 1,
        después 3, espera a que el candidato aparezca en pantalla y le da a CONFIRMA con la pata
        delantera. PIRIRIRI.
      </p>
      <p v-else>
        <span class="font-cursive text-6xl">A</span> simulated fruit fly (DeepMind and HHMI
        Janelia's
        <a class="link" href="https://github.com/TuragaLab/flybody" target="_blank">flybody</a>, in
        MuJoCo), wearing a tiny red cap, trained with reinforcement learning to vote on a Brazilian
        electronic ballot box. It stands on the table, presses 1, then 3, waits for the candidate to
        show up on screen and hits CONFIRMA with its front leg. PIRIRIRI.
      </p>
      <img
        src="/playground/mosca.gif"
        :alt="
          es
            ? 'La mosca simulada apretando 1, 3 y CONFIRMA en la urna'
            : 'The simulated fly pressing 1, 3 and CONFIRMA on the ballot box'
        "
        class="mx-auto rounded-lg"
        loading="lazy"
      />
      <p v-if="es">
        Todo está en unidades CGS, como el propio flybody: la mosca mide unos 3,7 mm y pesa
        alrededor de 1 mg. El voto limpio apareció cerca de los 3,8M pasos de PPO, después de un
        currículum sobre la posición inicial y una penalización por teclas equivocadas. Sí, es un
        meme. También es lo que más aprendí sobre reward shaping.
      </p>
      <p v-else>
        Everything is in CGS units like flybody itself: the fly is about 3.7 mm long and weighs
        about 1 mg. The clean vote showed up around 3.8M PPO steps, after a curriculum on the
        starting position and a penalty for wrong keys. Yes, it's a meme. It's also the most I've
        learned about reward shaping.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
const { es } = useLang();
const scrambler = useScrambler('Mosca do Lule');

onMounted(() => {
  scrambler.scramble();
});
</script>
