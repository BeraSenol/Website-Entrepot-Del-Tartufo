<template>
  <div class="bg-gray-50 dark:bg-gray-950">
    <UContainer class="flex flex-col md:flex-row text-center gap-y-12 py-8">
      <!-- ENTREPOT DEL TARTUFO CONTAINER -->
      <UContainer class="flex flex-col gap-y-1">
        <NuxtLink to="/">
          <h5>ENTREPOT DEL TARTUFO</h5>
        </NuxtLink>
        <p class="italic font-extralight">Italian food with a touch of truffle</p>
        <div class="flex justify-center">
          <LogoFacebook />
          <LogoInstagram />
        </div>
      </UContainer>
      <!-- CONTACT CONTAINER -->
      <UContainer class="flex flex-col gap-y-1 font-extralight">
        <NuxtLink to="/contact">
          <h5>CONTACT</h5>
        </NuxtLink>
        <NuxtLink href="https://maps.app.goo.gl/i2vfzT5QpC8Rm1QT8" target="_blank">
          <p>Hemelrijk 22 / 3500 Hasselt</p>
        </NuxtLink>
        <NuxtLink>
          <p>0472 93 08 69</p>
        </NuxtLink>
        <NuxtLink href="mailto:info@entrepotdeltartufo.com">
          <p>info@entrepotdeltartufo.com</p>
        </NuxtLink>
        <p>BTW: OD BV BE0734.961.476</p>
      </UContainer>
      <!-- OPENINGSUREN CONTAINER -->
      <UContainer class="flex flex-col">
        <h5 class="mb-2">OPENINGSUREN</h5>
        <div class="grid grid-cols-2 gap-x-10 gap-y-2 font-extralight tracking-wider">
          <p class="text-right">Ma / Do / Vr</p>
          <p class="text-left">12h - 14h<br>18h - 22h</p>
          <p class="text-right">Za / Zo</p>
          <p class="text-left">18h - 22h</p>
          <p class="text-right">Di / Wo</p>
          <p class="text-left italic">Gesloten</p>
        </div>
      </UContainer>
    </UContainer>
  </div>
</template>
