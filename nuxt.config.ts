// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 + ts',
      meta: [{ name: 'description', content: 'Шаблон проекта' }],
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }],
    },
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/tools/_mixins.scss";',
        },
      },
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: ['@vueuse/nuxt'],
});
