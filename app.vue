<template>
  <div class="bg-gray-50 dark:bg-gray-950 min-h-screen select-text appearance-none scroll-smooth">
    <LayoutHeader />
    <NuxtPage class="pt-16" keepalive />
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta, useHead } from 'nuxt/app';

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
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.2s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(100px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100px, 0);
}
</style>