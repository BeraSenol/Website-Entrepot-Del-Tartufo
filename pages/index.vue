<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="homeImage" :title="homeTitle" :subtitle="homeSubTitle" />
    <HomeWelcome/>
    <HomeLunchAtEntrepot />
    <MenuLunch />
    <TruffleDivider />
    <HomeParmigianoAtCasa />
    <ParmezaanMenu />
    <TruffleDivider />
    <HomeGetInTouch />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const homeTitle = ref('Entrepot del Tartufo');
const homeSubTitle = ref('Italian food with a touch of truffle');
const homeImage = ref('landing-images/index.jpg');
const homeUrl = ref(`entrepotdeltartufo.netlify.app${route.path}`)

useSeoMeta({
  title: () => `${homeTitle.value}`,
  description: () => `${homeSubTitle.value}`,
  ogTitle: () => `${homeTitle.value}`,
  ogDescription: () => `${homeSubTitle.value}`,
  ogUrl: () => `${homeUrl.value}`,
  ogImage: () => `${homeImage.value}`,
  twitterTitle: () => `${homeTitle.value}`,
  twitterDescription: () => `${homeSubTitle.value}`,
  twitterImage: () => `${homeImage.value}`,
});
</script>