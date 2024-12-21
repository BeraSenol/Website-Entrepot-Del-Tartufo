<template>
  <div class="flex flex-col text-center">
    <TitleAvailability days="Ma / Do / Vr" />
    <TitleLarge title="LUNCH @ ENTREPOT" />
    <UContainer class="grid grid-cols-2 py-8 w-full max-w-2xl">
      <p class="text-left">Twee Gangen</p>
      <p class="text-right italic">€30</p>
      <p class="text-left">Drie Gangen</p>
      <p class="text-right italic">€40</p>
    </UContainer>
    <UContainer class="grid md:grid-cols-5 grid-rows-2 w-full max-w-2xl">
      <UButton to="/menu" class="block u-border-gray-200 col-span-2 u-bg-gray-100 u-button">
        Diner Menu
      </UButton>
      <UButton to="/contact" class="block u-border-gray-200 col-span-2 col-start-4 u-bg-gray-100 u-button">
        Reserveer
      </UButton>
    </UContainer>
  </div>
</template>
