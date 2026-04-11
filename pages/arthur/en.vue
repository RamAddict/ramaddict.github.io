<template>
  <div
    class="flex flex-col items-center antialiased"
    style="font-family: 'Inter', sans-serif"
  >
    <header class="flex w-full max-w-[700px] justify-end px-6 py-8">
      <div class="space-x-2 text-sm font-medium opacity-70">
        <NuxtLink to="/arthur" class="transition hover:opacity-100">🇧🇷 PT</NuxtLink>
        <span>|</span>
        <NuxtLink to="/arthur/en" class="font-bold transition hover:opacity-100">🇺🇸 EN</NuxtLink>
      </div>
    </header>

    <main class="w-full max-w-[700px] flex-grow space-y-16 px-6 py-10 md:py-16">
      <section class="space-y-6 text-center">
        <h1 class="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          I build websites that generate customers for local businesses
        </h1>
        <p class="mx-auto max-w-lg text-lg opacity-80">
          25+ websites built with a focus on lead generation
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-bold">What I do</h2>
        <ul
          class="list-inside list-disc space-y-3 rounded-2xl border border-base-content/10 bg-base-100/50 p-6 text-lg
            opacity-90 shadow-sm backdrop-blur-sm md:p-8"
        >
          <li>Local lead generation websites</li>
          <li>Websites for service businesses</li>
          <li>Performance-focused builds</li>
        </ul>
      </section>

      <section class="space-y-6">
        <h2 class="text-xl font-bold">Proven Performance</h2>
        <div class="flex flex-col items-center gap-6 rounded-2xl border border-base-content/10 bg-base-100/50 p-6 shadow-sm backdrop-blur-sm sm:flex-row md:p-8">
          <div class="flex-1 space-y-3 text-center sm:text-left">
            <p class="text-lg opacity-90">
              Every project is optimized to achieve a <strong>perfect score</strong> on Google Lighthouse, ensuring lightning-fast load times, accessibility, and flawless SEO.
            </p>
          </div>
          <div class="w-full max-w-[260px] shrink-0">
            <img
              src="/arthur/lighthouse-score.png"
              alt="Google Lighthouse Score"
              class="h-auto w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-xl font-bold">Projects</h2>
        <p class="text-lg opacity-80">
          I’ve built websites for professionals like psychologists who use them to attract new clients.
        </p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="https://wigpsicologavinhedo.com.br"
            target="_blank"
            rel="noopener noreferrer"
            class="block rounded-2xl border border-base-content/10 bg-base-100/60 p-6 text-center font-medium
              shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-base-200/60 hover:shadow-md"
          >
            WIG Psicologia Vinhedo
          </a>
          <a
            href="https://dcsuperiorconcrete.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="block rounded-2xl border border-base-content/10 bg-base-100/60 p-6 text-center font-medium
              shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-base-200/60 hover:shadow-md"
          >
            DC Superior Concrete
          </a>
          <a
            href="https://miamistoneveneer.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="block rounded-2xl border border-base-content/10 bg-base-100/60 p-6 text-center font-medium
              shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-base-200/60 hover:shadow-md"
          >
            Miami Stone Veneer
          </a>
        </div>
      </section>

      <section class="space-y-6">
        <div class="rounded-3xl border border-base-content/10 bg-base-100/50 p-6 shadow-sm backdrop-blur-sm md:p-10">
          <h2 class="text-2xl font-bold md:text-3xl">Want something like this for your business?</h2>
          <p class="mt-2 text-lg opacity-80">
            Fill out the form below and I'll get back to you as soon as possible to discuss your project.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST" class="mt-8 space-y-5 text-left">
            <input type="hidden" name="access_key" value="1d90509a-8019-4438-89fc-e4560455b566" />
            <input type="hidden" name="subject" value="New Contact Message - Arthur Website" />
            <input type="hidden" name="from_name" value="Arthur Bianco Website" />
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

            <div>
              <label for="name" class="mb-2 block text-sm font-semibold opacity-90">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                class="w-full rounded-xl border border-base-content/20 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition focus:border-base-content/50 focus:ring-1 focus:ring-base-content/50"
              />
            </div>

            <div class="grid gap-5 md:grid-cols-2">
              <div>
                <label for="email" class="mb-2 block text-sm font-semibold opacity-90">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  class="w-full rounded-xl border border-base-content/20 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition focus:border-base-content/50 focus:ring-1 focus:ring-base-content/50"
                />
              </div>
              <div>
                <label for="phone" class="mb-2 block text-sm font-semibold opacity-90">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  class="w-full rounded-xl border border-base-content/20 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition focus:border-base-content/50 focus:ring-1 focus:ring-base-content/50"
                />
              </div>
            </div>

            <div>
              <label for="message" class="mb-2 block text-sm font-semibold opacity-90">How can I help you?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Tell me a bit about what you need..."
                class="w-full rounded-xl border border-base-content/20 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition focus:border-base-content/50 focus:ring-1 focus:ring-base-content/50"
              ></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-xl bg-neutral px-8 py-4 text-lg font-semibold text-neutral-content transition hover:bg-neutral/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Arthur Bianco - Web Developer',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
  ],
});
</script>
