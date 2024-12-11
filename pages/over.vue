<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="aboutUsImage" :title="aboutUsTitle" :subtitle="aboutUsSubTitle" />
    <OverOns :description="aboutUsDescription"/>
    <TruffleDivider />
    <OverDenEntrepot />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const aboutUsTitle = ref('Over Ons');
const aboutUsSubTitle = ref('Italian food with a touch of truffle');
const aboutUsDescription = ref(' Restaurant Entrepot del Tartufo brengt de puurheid van de Italiaanse keuken naar hartje Hasselt. Nicolino Salvatore, alom gewaardeerd als chef van de vroegere Mario\'s Trattoria bereidt klassieke en minder klassieke Italiaanse gerechten met een touch of truffle.')
const aboutUsImage = ref('landing-images/about_us.jpg');

useSeoMeta({
  title: () => `${aboutUsTitle.value} - ${aboutUsSubTitle.value}`,
  description: () => `${aboutUsDescription.value}`,
  ogTitle: () => `${aboutUsTitle.value} - ${aboutUsSubTitle.value}`,
  ogDescription: () => `${aboutUsDescription.value}`,
  ogImage: () => `${aboutUsImage.value}`,
});
</script>
