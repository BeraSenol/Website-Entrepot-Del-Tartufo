<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen">
    <Header />
    <NuxtPage />
    <Footer />
    <MadeWithNuxt />
  </div>
</template>

<script setup>
useSeoMeta({
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