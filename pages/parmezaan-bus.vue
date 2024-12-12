<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="parmezanImage" :title="parmezanTitle" :subtitle="parmezanSubTitle" />
    <HomeParmigianoAtCasa />
    <TruffleDivider />
    <ParmezaanMenu />
    <TruffleDivider />
    <ParmezaanForm />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const parmezanTitle = ref('Parmezaan Bus');
const parmezanSubTitle = ref('Ervaar de restaurant ervaring aan je deur');
const parmezanImage = ref('landing-images/parmezan.jpg');
const parmezanUrl = ref(`entrepotdeltartufo.netlify.app${route.path}`)

useSeoMeta({
  title: () => `${parmezanTitle.value}`,
  description: () => `${parmezanSubTitle.value}`,
  ogTitle: () => `${parmezanTitle.value}`,
  ogDescription: () => `${parmezanSubTitle.value}`,
  ogUrl: () => `${parmezanUrl.value}`,
  ogImage: () => `${parmezanImage.value}`,
  twitterTitle: () => `${parmezanTitle.value}`,
  twitterDescription: () => `${parmezanSubTitle.value}`,
  twitterImage: () => `${parmezanImage.value}`,
});
</script>
