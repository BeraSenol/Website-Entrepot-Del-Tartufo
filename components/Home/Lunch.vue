<template>
  <div class="w-full pb-8">
    <UContainer class="flex flex-col text-center place-items-center">
      <GeneralLunchDays />
      <GeneralText5XL title="LUNCH @ ENTREPOT" class="pb-8" />
      <div class="text-xl font-light tracking-wide grid grid-cols-2 gap-x-28">
        <p class="text-left pb-2">Twee Gangen</p>
        <p class="text-right italic">€30</p>
        <p class="text-left pb-2">Drie Gangen</p>
        <p class="text-right italic">€40</p>
      </div>
      <UContainer class="pt-8">
        <UButton to="/menu" class="bg-gray-200 dark:bg-gray-800 text-xl mr-4 px-5">
          Bekijk Diner Menu
        </UButton>
        <UButton to="/contact" class="bg-gray-200 dark:bg-gray-800 text-xl ml-4 px-5">
          Reserveer Hier
        </UButton>
      </UContainer>
    </UContainer>
    <UContainer>
      <MenuLunch class="pb-12" />
      <UContainer>
        <GeneralTruffleDivider />
      </UContainer>
    </UContainer>
  </div>
</template>
