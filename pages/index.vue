<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="data.home.image" :title="data.home.title" :subtitle="data.home.subtitle" />
    <HomeWelcome />
    <HomeLunchAtEntrepot />
    <MenuLunch />
    <MenuVegetarian />
    <TruffleDivider />
    <HomeParmigianoAtCasa />
    <ParmezanMenu />
    <TruffleDivider />
    <HomeGetInTouch />
    <TruffleDivider />
  </UContainer>
</template>

<script setup lang="ts">
import { useFetch, useSeoMeta } from 'nuxt/app';
import { useRoute } from 'vue-router';


const route = useRoute()
const { data } = await useFetch('/api/seo')


useSeoMeta({
  title: data.value.home.title,
  description: data.value.home.subtitle,
  ogTitle: data.value.home.title,
  ogDescription: data.value.home.subtitle,
  ogUrl: () => `${data.value.url}${route.path}`,
  ogImage: data.value.home.image,
  twitterTitle: data.value.home.title,
  twitterDescription: data.value.home.subtitle,
  twitterImage: data.value.home.image,
});
</script>