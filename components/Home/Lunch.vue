<template>
  <div>
    <UContainer class="flex flex-col text-center place-items-center w-full pb-8">
      <GeneralLunchDays />
      <GeneralText5XL title="LUNCH @ ENTREPOT" class="pb-8" />
      <div class="text-xl font-light tracking-wide grid grid-cols-2 gap-x-28">
        <p class="text-left pb-2">Twee Gangen</p>
        <p class="text-right italic">€30</p>
        <p class="text-left pb-2">Drie Gangen</p>
        <p class="text-right italic">€40</p>
      </div>
      <UContainer class="flex gap-6 pt-8">
        <UButton to="/menu" class="bg-gray-200 dark:bg-gray-800 text-xl">
          Bekijk Diner Menu
        </UButton>
        <UButton to="/contact" class="bg-gray-200 dark:bg-gray-800 text-xl">
          Reserveer Hier
        </UButton>
      </UContainer>
    </UContainer>
    <UContainer>
      <MenuLunch class="pb-12" />
      <GeneralTruffleDivider />
    </UContainer>
  </div>
</template>
