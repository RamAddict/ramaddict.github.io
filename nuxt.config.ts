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

  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/color-mode'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'base-100': 'var(--b1)',
            'base-content': 'var(--bc)',
          },
        },
        fontFamily: {
          spartan: ['League Spartan', 'sans-serif'],
          sans: ['League Spartan', ...fontFamily.sans],
          cursive: ['Lavishly Yours', 'cursive'],
        },
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
});
