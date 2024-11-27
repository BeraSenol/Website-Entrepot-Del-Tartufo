<template>
  <div class="flex flex-col text-center place-items-center">
    <AvailableDays days="Ma / Do / Vr" />
    <TitleLarge title="LUNCH @ ENTREPOT" />
    <UContainer class="grid grid-cols-2 px-8 w-full max-w-xl">
      <p class="text-left">Twee Gangen</p>
      <p class="text-right italic">€30</p>
      <p class="text-left">Drie Gangen</p>
      <p class="text-right italic">€40</p>
    </UContainer>
    <UContainer class="grid grid-cols-5 pt-6 w-full max-w-2xl">
      <UButton to="/menu" class="bg-gray-100 dark:bg-gray-900 col-span-2 block user-button">
        Bekijk Diner Menu
      </UButton>
      <UButton to="/contact" class="bg-gray-100 dark:bg-gray-900 col-span-2 block col-start-4 user-button">
        Reserveer Hier
      </UButton>
    </UContainer>
  </div>
</template>
