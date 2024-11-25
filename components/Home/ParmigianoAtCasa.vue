<template>
  <UContainer class="flex flex-col">
    <AvailableDays days="Ma / Do / Vr / Za / Zo" />
    <TitleLarge title="PARMIGIANO @ CASA" />
    <UContainer class="grid grid-cols-2 px-8 w-full">
      <p class="text-left">Regio Limburg</p>
      <p class="text-right italic">18h00 - 20h00</p>
      <p class="text-left">6+ Personen</p>
      <p class="text-right italic">€70 pp.</p>
    </UContainer>
    <UButton to="/parmezaan-bus" class="bg-gray-100 dark:bg-gray-900 mx-auto mt-8 user-button">
      Reserveer De Bus
    </UButton>
  </UContainer>
</template>
