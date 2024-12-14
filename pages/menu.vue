<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="data.menu.image" :title="data.menu.title" :subtitle="data.menu.subtitle" />
    <MenuLunch />
    <MenuDiner />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const { data } = await useFetch('/api/seo')

useSeoMeta({
  title: () => `${data.value.menu.title}`,
  description: () => `${data.value.menu.subtitle}`,
  ogTitle: () => `${data.value.menu.title}`,
  ogDescription: () => `${data.value.menu.subtitle}`,
  ogUrl: () => `${data.value.url}${route.path}`,
  ogImage: () => `${data.value.menu.image}`,
  twitterTitle: () => `${data.value.menu.title}`,
  twitterDescription: () => `${data.value.menu.subtitle}`,
  twitterImage: () => `${data.value.menu.image}`,
});
</script>