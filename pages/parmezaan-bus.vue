<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="data.parmezan.image" :title="data.parmezan.title" :subtitle="data.parmezan.subtitle" />
    <HomeParmigianoAtCasa />
    <TruffleDivider />
    <ParmezanMenu />
    <TruffleDivider />
    <ParmezanForm />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const { data } = await useFetch('/api/seo')

useSeoMeta({
  title: data.value.parmezan.title,
  description: data.value.parmezan.subtitle,
  ogTitle: data.value.parmezan.title,
  ogDescription: data.value.parmezan.subtitle,
  ogUrl: () => `${data.value.url}${route.path}`,
  ogImage: data.value.parmezan.image,
  twitterTitle: data.value.parmezan.title,
  twitterDescription: data.value.parmezan.subtitle,
  twitterImage: data.value.parmezan.image,
});
</script>
