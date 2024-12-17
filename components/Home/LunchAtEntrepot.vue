<template>
  <div class="flex flex-col text-center place-items-center">
    <TitleAvailability days="Ma / Do / Vr" />
    <TitleLarge title="LUNCH @ ENTREPOT" />
    <UContainer class="grid grid-cols-2 px-4 w-full max-w-xl">
      <p class="text-left">Twee Gangen</p>
      <p class="text-right italic">€30</p>
      <p class="text-left">Drie Gangen</p>
      <p class="text-right italic">€40</p>
    </UContainer>
    <UContainer class="grid grid-rows-2 md:grid-cols-5 gap-2 pt-6 w-full max-w-2xl">
      <UButton to="/menu"
        class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 col-span-2 block user-button">
        Diner Menu
      </UButton>
      <UButton to="/contact"
        class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 col-span-2 col-start-4 block user-button">
        Reserveer
      </UButton>
    </UContainer>
  </div>
</template>
