<template>
  <main class="mx-auto flex max-w-5xl flex-col gap-8 px-8 pb-12">
    <section class="m-auto flex max-w-2xl flex-col gap-4 text-xl">
      <h1 class="m-auto text-center text-4xl text-yellow-600">Contact Me</h1>
      <h1>
        If you'd like to chat about a project or just have question, please fill in the form below.
        I aim to get back within 2 days.
      </h1>
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
              <label for="name" class="text-base">Name</label>
              <input :value="name" type="text" name="name" class="rounded-md px-2" />
            </div>
            <div class="flex w-full flex-col gap-2">
              <label for="email" class="text-base">Email</label>
              <input :value="email" type="email" name="email" class="rounded-md px-2" />
            </div>
          </div>
          <div class="col-span-full flex flex-col">
            <label for="subject" class="text-base">Subject</label>
            <input :value="subject" type="text" name="subject" class="rounded-md px-2" />
          </div>
          <div class="col-span-full flex flex-col">
            <label for="message" class="text-base">Message</label>
            <textarea :value="message" name="message" class="rounded-md px-2" rows="5"></textarea>
          </div>
          <button type="submit" class="rounded-full bg-yellow-600 px-4 py-2">Send</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script lang="ts" setup>
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
