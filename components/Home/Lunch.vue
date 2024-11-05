<template>
  <UContainer class="w-full pb-8">
    <UContainer class="flex flex-col text-center place-items-center">
      <p class="pb-2 tracking-widest font-light"> Ma / Do / Vr</p>
      <p class="text-5xl font-bold pb-8">LUNCH @ ENTREPOT</p>
      <div class="text-xl font-light">
        <div class="grid grid-cols-2 gap-x-40">
          <p class="text-left pb-2">Twee Gangen</p>
          <p class="text-right italic">€30</p>
          <p class="text-left pb-2">Drie Gangen</p>
          <p class="text-right italic">€40</p>
        </div>
      </div>
      <UButton size="xl" variant="soft" to="/contact" class="bg-gray-200 dark:bg-gray-800 text-xl mt-8 px-5">
        Reserveer Hier
      </UButton>
    </UContainer>
    <UContainer>
      <MenuLunch class="pb-12" />
      <TruffleDivider />
    </UContainer>
  </UContainer>
</template>
