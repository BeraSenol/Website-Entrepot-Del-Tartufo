import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@nuxt/image"],

  colorMode: {
    preference: "dark"
  },

  image: {
    inject: true,
    dir: "assets"
  },
  compatibilityDate: "2024-09-12"
})