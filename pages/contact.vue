<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="contactImage" :title="contactTitle" :subtitle="contactSubTitle" />
    <ContactDiscription :description="contactDescription" />
    <TruffleDivider />
    <ContactForm />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const contactTitle = ref('Contacteer Ons');
const contactSubTitle = ref('Italian food with a touch of truffle');
const contactDescription = ref('Entrepot del Tartufo ligt in hartje Hasselt, op slechts enkele meters van het Dusartplein en de Zuivelmarkt! Parking Dusartplein en parking TT bevinden zich op 5m wandelafstand.')
const contactImage = ref('landing-images/contact.jpg');

useSeoMeta({
  title: () => `${contactTitle.value} - ${contactSubTitle.value}`,
  description: () => `${contactDescription.value}`,
  ogTitle: () => `${contactTitle.value} - ${contactSubTitle.value}`,
  ogDescription: () => `${contactDescription.value}`,
  ogImage: () => `${contactImage.value}`,
});
</script>
