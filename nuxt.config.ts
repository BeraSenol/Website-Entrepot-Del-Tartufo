import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "slide-left", mode: "out-in" },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@nuxt/image"],

  colorMode: {
    preference: "dark",
  },
  compatibilityDate: "2024-09-12",
});
