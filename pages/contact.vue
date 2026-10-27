<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-12  text-justify sm:text-left">
    <section class="m-auto flex max-w-2xl flex-col gap-4 text-xl">
      <h1 class="m-auto text-center text-4xl text-yellow-600">{{ es ? 'Hablemos' : "Let's talk" }}</h1>
      <p v-if="es">
        Cuéntame qué quieres construir o qué se rompió. Si no soy la persona indicada, te lo digo
        con honestidad, y probablemente conozca a alguien que sí lo sea. Respondo en menos de dos
        días.
      </p>
      <p v-else>
        Tell me what you're trying to build, or what's broken. If I'm not the right person for it,
        I'll say so honestly, and I probably know someone who is. I reply within two days.
      </p>
    </section>
    <section class="flex flex-col gap-4 text-xl">
      <form
        action="https://formspree.io/f/xwpkbkjy"
        class="m-auto flex w-full max-w-2xl flex-col gap-4"
        method="post"
      >
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-6 sm:gap-7">
          <div class="col-span-full flex flex-col gap-5 sm:flex-row sm:gap-12">
            <div class="flex w-full flex-col gap-2">
              <label for="name" class="text-base">{{ es ? 'Nombre' : 'Name' }}</label>
              <input :value="name" type="text" name="name" class="rounded-md px-2" />
            </div>
            <div class="flex w-full flex-col gap-2">
              <label for="email" class="text-base">{{ es ? 'Correo' : 'Email' }}</label>
              <input :value="email" type="email" name="email" class="rounded-md px-2" />
            </div>
          </div>
          <div class="col-span-full flex flex-col">
            <label for="subject" class="text-base">{{ es ? 'Asunto' : 'Subject' }}</label>
            <input :value="subject" type="text" name="subject" class="rounded-md px-2" />
          </div>
          <div class="col-span-full flex flex-col">
            <label for="message" class="text-base">{{ es ? 'Mensaje' : 'Message' }}</label>
            <textarea :value="message" name="message" class="rounded-md px-2" rows="5"></textarea>
          </div>
          <button type="submit" class="rounded-full bg-yellow-600 px-4 py-2">{{ es ? 'Enviar' : 'Send' }}</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts" setup>
const { es } = useLang();
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
// const handleSubmit = async (e: Event) => {
//   const body = new FormData();
//   body.append('name', name.value);
//   body.append('email', email.value);
//   body.append('subject', subject.value);
//   body.append('message', message.value);
//   await $fetch(`https://formspree.io/f/xwpkbkjy`, { method: 'post', body });
// };
</script>
