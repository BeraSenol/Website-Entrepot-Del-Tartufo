<script setup lang="ts">
import ParmigianoAtCasa from '../components/Home/ParmigianoAtCasa.vue';
</script>

<template>
  <div>
    <LandingImage image="landing-images/index.jpg" title="ENTREPOT DEL TARTUFO"
      subtitle="Italian food with a touch of truffle" />
    <UContainer>
      <HomeWelcome class="mt-12" />
      <HomeLunchAtEntrepot class="my-12" />
      <MenuLunch class="my-12" />
      <TruffleDivider />
      <ParmigianoAtCasa class="my-12"/>
      <ParmezaanMenu />
      <HomeGetInTouch />
    </UContainer>
  </div>
</template>
