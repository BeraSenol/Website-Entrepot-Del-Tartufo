<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="data.about.image" :title="data.about.title" :subtitle="data.about.subtitle" />
    <AboutUs />
    <TruffleDivider />
    <AboutDenEntrepot />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const { data } = await useFetch('/api/seo')

useSeoMeta({
  title: data.value.about.title,
  description: data.value.about.subtitle,
  ogTitle: data.value.about.title,
  ogDescription: data.value.about.subtitle,
  ogUrl: () => `${data.value.url}${route.path}`,
  ogImage: data.value.about.image,
  twitterTitle: data.value.about.title,
  twitterDescription: data.value.about.subtitle,
  twitterImage: data.value.about.image,
});
</script>
