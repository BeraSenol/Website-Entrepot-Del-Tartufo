<template>
  <UContainer class="flex flex-col gap-y-12">
    <LandingImage :image="contactImage" :title="contactTitle" :subtitle="contactSubTitle" />
    <ContactDiscription />
    <TruffleDivider />
    <ContactForm />
    <TruffleDivider />
  </UContainer>
</template>

<script setup>
const route = useRoute()
const contactTitle = ref('Contacteer Ons');
const contactSubTitle = ref('Voor verdere vragen of specifieke wensen');
const contactImage = ref('landing-images/contact.jpg');
const contactUrl = ref(`entrepotdeltartufo.netlify.app${route.path}`)

useSeoMeta({
  title: () => `${contactTitle.value}`,
  description: () => `${contactSubTitle.value}`,
  ogTitle: () => `${contactTitle.value}`,
  ogDescription: () => `${contactSubTitle.value}`,
  ogUrl: () => `${contactUrl.value}`,
  ogImage: () => `${contactImage.value}`,
  twitterTitle: () => `${contactTitle.value}`,
  twitterDescription: () => `${contactSubTitle.value}`,
  twitterImage: () => `${contactImage.value}`,
});
</script>
