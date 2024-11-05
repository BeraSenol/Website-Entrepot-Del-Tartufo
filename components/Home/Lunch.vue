<template>
  <UContainer class="w-full pb-8">
    <UContainer class="flex flex-col text-center place-items-center">
      <GeneralLunchDays/>
        <h1 class="text-5xl font-bold tracking-wide pb-8">LUNCH @ ENTREPOT</h1>
        <div class="text-xl font-light tracking-wide grid grid-cols-2 gap-x-36">
          <p class="text-left pb-2">Twee Gangen</p>
          <p class="text-right italic">€30</p>
          <p class="text-left pb-2">Drie Gangen</p>
          <p class="text-right italic">€40</p>
        </div>
        <UButton to="/contact" class="bg-gray-200 dark:bg-gray-800 text-xl px-5 mt-8">
          Reserveer Hier
        </UButton>
    </UContainer>
    <UContainer>
      <MenuLunch class="pb-12" />
      <GeneralTruffleDivider />
    </UContainer>
  </UContainer>
</template>
