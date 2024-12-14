<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="data.contact.image" :title="data.contact.title" :subtitle="data.contact.subtitle" />
    <ContactDiscription />
    <TruffleDivider />
    <ContactForm />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const { data } = await useFetch('/api/seo')

useSeoMeta({
  title: data.value.contact.title,
  description: data.value.contact.subtitle,
  ogTitle: data.value.contact.title,
  ogDescription: data.value.contact.subtitle,
  ogUrl: () => `${data.value.url}${route.path}`,
  ogImage: data.value.contact.image,
  twitterTitle: data.value.contact.title,
  twitterDescription: data.value.contact.subtitle,
  twitterImage: data.value.contact.image,
});
</script>
