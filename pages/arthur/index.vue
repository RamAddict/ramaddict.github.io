<template>
  <div class="flex flex-col items-center antialiased" style="font-family: 'Inter', sans-serif">
    <header class="flex w-full max-w-[700px] justify-end px-6 py-8">
      <div class="space-x-2 text-sm font-medium opacity-70">
        <NuxtLink to="/arthur" class="font-bold transition hover:opacity-100">🇧🇷 PT</NuxtLink>
        <span>|</span>
        <NuxtLink to="/arthur/en" class="transition hover:opacity-100">🇺🇸 EN</NuxtLink>
      </div>
    </header>

    <main class="w-full max-w-[700px] flex-grow space-y-16 px-6 py-10 md:py-16">
      <section class="space-y-6 text-center">
        <h1 class="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Crio sites que geram clientes para negócios locais
        </h1>
        <p class="mx-auto max-w-lg text-lg opacity-80">
          Mais de 25 sites criados com foco em geração de leads
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-bold">O que eu faço</h2>
        <ul
          class="list-inside list-disc space-y-3 rounded-2xl border border-base-content/10 bg-base-100/50 p-6 text-lg
            opacity-90 shadow-sm backdrop-blur-sm md:p-8"
        >
          <li>Sites de geração de leads locais</li>
          <li>Sites para negócios de serviços</li>
          <li>Foco em performance e conversão</li>
        </ul>
      </section>

      <section class="space-y-6">
        <h2 class="text-xl font-bold">Performance comprovada</h2>
        <div
          class="flex flex-col items-center gap-6 rounded-2xl border border-base-content/10 bg-base-100/50 p-6
            shadow-sm backdrop-blur-sm sm:flex-row md:p-8"
        >
          <div class="flex-1 space-y-3 text-center sm:text-left">
            <p class="text-lg opacity-90">
              Todos os projetos são otimizados para alcançar a <strong>nota máxima</strong> no
              Google Lighthouse, garantindo carregamento rápido, acessibilidade e SEO perfeito.
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
        <h2 class="text-xl font-bold">Projetos</h2>
        <p class="text-lg opacity-80">
          Aqui vão alguns exemplos de sites que criei e produzem <i>leads</i> para clientes.
        </p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href="https://wigpsicologavinhedo.com.br"
            target="_blank"
            rel="noopener noreferrer"
            class="block rounded-2xl border border-base-content/10 bg-base-100/60 p-6 text-center font-medium shadow-sm
              backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-base-200/60 hover:shadow-md"
          >
            WIG Psicologia Vinhedo
          </a>
        </div>
      </section>

      <section class="space-y-6">
        <div class="rounded-3xl border border-base-content/10 bg-base-100/50 p-6 shadow-sm backdrop-blur-sm md:p-10">
          <h2 class="text-2xl font-bold md:text-3xl">Quer algo assim para o seu negócio?</h2>
          <p class="mt-2 text-lg opacity-80">
            Preencha os dados abaixo e entrarei em contato o mais rápido possível para conversarmos sobre o seu projeto.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST" class="mt-8 space-y-5 text-left">
            <input type="hidden" name="access_key" value="1d90509a-8019-4438-89fc-e4560455b566" />
            <input type="hidden" name="subject" value="Nova Mensagem de Contato - Site Arthur" />
            <input type="hidden" name="from_name" value="Site Arthur Bianco" />
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

            <div>
              <label for="name" class="mb-2 block text-sm font-semibold opacity-90">Nome</label>
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
                <label for="email" class="mb-2 block text-sm font-semibold opacity-90">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  class="w-full rounded-xl border border-base-content/20 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition focus:border-base-content/50 focus:ring-1 focus:ring-base-content/50"
                />
              </div>
              <div>
                <label for="phone" class="mb-2 block text-sm font-semibold opacity-90">WhatsApp / Telefone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  class="w-full rounded-xl border border-base-content/20 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition focus:border-base-content/50 focus:ring-1 focus:ring-base-content/50"
                />
              </div>
            </div>

            <div>
              <label for="message" class="mb-2 block text-sm font-semibold opacity-90">Como posso ajudar?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Me conte um pouco sobre o que você precisa..."
                class="w-full rounded-xl border border-base-content/20 bg-base-100 px-4 py-3 text-base text-base-content outline-none transition focus:border-base-content/50 focus:ring-1 focus:ring-base-content/50"
              ></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-xl bg-neutral px-8 py-4 text-lg font-semibold text-neutral-content transition hover:bg-neutral/90"
            >
              Enviar Mensagem
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
