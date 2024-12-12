<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="menuImage" :title="menuTitle" :subtitle="menuSubTitle" />
    <MenuLunch />
    <MenuDiner />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const menuTitle = ref('Het Menu');
const menuSubTitle = ref('Ondek een stukje Italië in uw buurt');
const menuImage = ref('landing-images/menu.jpg');
const menuUrl = ref(`entrepotdeltartufo.netlify.app${route.path}`)

useSeoMeta({
  title: () => `${menuTitle.value}`,
  description: () => `${menuSubTitle.value}`,
  ogTitle: () => `${menuTitle.value}`,
  ogDescription: () => `${menuSubTitle.value}`,
  ogUrl: () => `${menuUrl.value}`,
  ogImage: () => `${menuImage.value}`,
  twitterTitle: () => `${menuTitle.value}`,
  twitterDescription: () => `${menuSubTitle.value}`,
  twitterImage: () => `${menuImage.value}`,
});
</script>