// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

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
    inject: true,
    dir: "assets"
  },

  compatibilityDate: '2024-09-12'
})