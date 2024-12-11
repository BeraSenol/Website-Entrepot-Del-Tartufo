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
const parmezanTitle = ref('Parmezaan Bus');
const parmezanSubTitle = ref('Italian food with a touch of truffle');
const parmezanDescription = ref('Parmigiano @ Casa.')
const parmezanImage = ref('landing-images/parmezan.jpg');

useSeoMeta({
  title: () => `${parmezanTitle.value} - ${parmezanSubTitle.value}`,
  description: () => `${parmezanDescription.value}`,
  ogTitle: () => `${parmezanTitle.value} - ${parmezanSubTitle.value}`,
  ogDescription: () => `${parmezanDescription.value}`,
  ogImage: () => `${parmezanImage.value}`,
});
</script>
