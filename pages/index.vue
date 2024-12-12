<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="homeImage" :title="homeTitle" :subtitle="homeSubTitle" />
    <HomeWelcome :description="homeDescription" />
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
const homeTitle = ref('Entrepot del Tartufo');
const homeSubTitle = ref('Italian food with a touch of truffle');
const homeDescription = ref('Van harte welkom op onze website! Restaurant Entrepot del Tartufo is gevestigd in een oude opslagplaats in het gezellige hemelrijk straatje te Hasselt. In een ongedwongen sfeer kan u genieten van de puurheid van de Italiaanse keuken met een touch of truffle in combinatie met steengoede wijnen.')
const homeImage = ref('landing-images/index.jpg');

useSeoMeta({
  title: () => `${homeTitle.value} - ${homeSubTitle.value}`,
  description: () => `${homeDescription.value}`,
  ogTitle: () => `${homeTitle.value} - ${homeSubTitle.value}`,
  ogDescription: () => `${homeDescription.value}`,
  ogImage: () => `${homeImage.value}`,
  twitterTitle: () => `${homeTitle.value} - ${homeSubTitle.value}`,
  twitterDescription: () => `${homeDescription.value}`,
  twitterImage: () => `${homeImage.value}`,
});
</script>