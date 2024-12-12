<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="aboutUsImage" :title="aboutUsTitle" :subtitle="aboutUsSubTitle" />
    <OverOns />
    <TruffleDivider />
    <OverDenEntrepot />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const aboutUsTitle = ref('Over Ons');
const aboutUsSubTitle = ref('De geschiedenis van het Entrepot');
const aboutUsImage = ref('landing-images/about_us.jpg');
const aboutUsUrl = ref(`entrepotdeltartufo.netlify.app${route.path}`)


useSeoMeta({
  title: () => `${aboutUsTitle.value}`,
  description: () => `${aboutUsSubTitle.value}`,
  ogTitle: () => `${aboutUsTitle.value}`,
  ogDescription: () => `${aboutUsSubTitle.value}`,
  ogUrl: () => `${aboutUsUrl.value}`,
  ogImage: () => `${aboutUsImage.value}`,
  twitterTitle: () => `${aboutUsTitle.value}`,
  twitterDescription: () => `${aboutUsSubTitle.value}`,
  twitterImage: () => `${aboutUsImage.value}`,
});
</script>
