<template>
  <div class="bg-gray-50 dark:bg-gray-950">
    <TruffleDivider />
    <UContainer class="flex flex-col md:flex-row justify-center text-center py-6">
      <!-- ENTREPOT DEL TARTUFO CONTAINER -->
      <UContainer class="flex flex-col pb-12 md:pb-0">
        <NuxtLink to="/" class="text-2xl font-bold pb-2">ENTREPOT DEL TARTUFO</NuxtLink>
        <UContainer class="italic font-light pb-2">Italian food with a touch of truffle</UContainer>
        <!-- SOCIAL MEDIA LOGOS -->
        <UContainer class="flex justify-center">
          <div>
            <a href="https://www.facebook.com/share/k9shNpfCWvVqujP6/" target="_blank">
              <svg width="2em" height="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                  fill="currentColor"> </path>
              </svg>
            </a href="">
          </div>
          <div class="mx-1">
            <a href="https://www.instagram.com/entrepotdeltartufo" target="_blank">
              <svg width="2em" height="2em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3">
                </path>
              </svg>
            </a>
          </div>
        </UContainer>
      </UContainer>
      <!-- CONTACT CONTAINER -->
      <UContainer class="flex flex-col pb-12 md:pb-0">
        <NuxtLink to="/contact" class="text-2xl font-bold pb-2">CONTACT</NuxtLink>
        <NuxtLink class="pb-1 font-light" href="https://maps.app.goo.gl/i2vfzT5QpC8Rm1QT8" target="_blank">
          Hemelrijk 22 / 3500 Hasselt
        </NuxtLink>
        <NuxtLink href="tel:0472930869" class="pb-1 font-light">
          0472 93 08 69
        </NuxtLink>
        <NuxtLink href="mailto:info@entrepotdeltartufo.com" class="pb-1 font-light">
          info@entrepotdeltartufo.com
        </NuxtLink>
        <UContainer class="font-light">
          BTW: OD BV BE0734.961.476
        </UContainer>
      </UContainer>
      <!-- OPENINGSUREN CONTAINER -->
      <UContainer class="flex flex-col">
        <UContainer class="text-2xl font-bold pb-2">OPENINGSUREN</UContainer>
        <UContainer class="grid grid-cols-2 gap-x-10 font-light">
          <div class="tracking-widest text-right pb-1">Ma / Do / Vr</div>
          <div class="text-left pb-2">12h - 14h<br>18h - 22h</div>
          <div class="tracking-widest text-right">Za / Zo</div>
          <div class="text-left pb-1">18h - 22h</div>
          <div class="tracking-widest text-right">Di / Wo</div>
          <div class="text-left">Gesloten</div>
        </UContainer>
      </UContainer>
    </UContainer>
  </div>
</template>

<script lang="ts">
export default {
  name: "MdiFacebookBox, MdiInstagram",
};
</script>
