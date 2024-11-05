<template>
  <UContainer class="place-items-center text-center w-full">
    <GeneralOpeningDays />
    <h1 class="text-5xl font-bold pb-8">PARMEZAANBUS @ CASA</h1>
    <UContainer class="flex flex-col text-xl font-light tracking-wide">
      <p>De Parmezaanbus brengt de restaurant-experience bij jouw thuis.</p>
      <p>18h - 20h / vanaf 6 personen</p>
    </UContainer>
    <UButton to="/parmezaan-bus" class="bg-gray-200 dark:bg-gray-800 text-xl px-5 mt-8">
      Reserveer De Bus
    </UButton>
    <ParmezaanMenu />
    <UContainer>
      <GeneralTruffleDivider />
    </UContainer>
  </UContainer>
</template>

<style></style>
