import { fontFamily } from 'tailwindcss/defaultTheme';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devServer: {
    port: 4501,
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/robots'],
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          spartan: ['League Spartan', 'sans-serif'],
          sans: ['League Spartan', ...fontFamily.sans],
        },
      },
    },
  },
});
