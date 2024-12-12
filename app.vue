<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
    <MadeWithNuxt />
  </div>
</template>

<script setup>
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({
  ogUrl: 'https://entrepotdeltartufo.netlify.app',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'nl'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.ico'
    }
  ]
})
</script>