// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: ["@nuxt/ui", '@nuxt/image'],

  colorMode: {
          preference: 'dark'
  },

  ui: {
  },

  image: {
          // Options
  },

  compatibilityDate: '2024-09-12'
})