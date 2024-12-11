<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="menuImage" :title="menuTitle" :subtitle="menuSubTitle" />
    <MenuLunch />
    <MenuDiner />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const menuTitle = ref('Het Menu');
const menuSubTitle = ref('Italian food with a touch of truffle');
const menuDescription = ref('Lunch & Diner Menu')
const menuImage = ref('landing-images/menu.jpg');

useSeoMeta({
  title: () => `${menuTitle.value} - ${menuSubTitle.value}`,
  description: () => `${menuDescription.value}`,
  ogTitle: () => `${menuTitle.value} - ${menuSubTitle.value}`,
  ogDescription: () => `${menuDescription.value}`,
  ogImage: () => `${menuImage.value}`,
});
</script>