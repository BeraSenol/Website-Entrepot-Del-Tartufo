<template>
  <div>
    <UContainer class="place-items-center text-center w-full pt-8">
      <GeneralOpeningDays />
      <GeneralText5XL title="PARMIGIANO @ CASA" class="pb-8" />
      <UContainer class="flex flex-col text-xl font-light tracking-wide">
        <UContainer>
          <div class="text-xl font-light tracking-wide grid grid-cols-2 gap-x-28">
            <p class="text-left pb-2">Regio Limburg</p>
            <p class="text-right italic">18h00 - 20h00</p>
            <p class="text-left pb-2">6+ Personen</p>
            <p class="text-right italic">€70 pp.</p>
          </div>
        </UContainer>
      </UContainer>
      <UButton to="/parmezaan-bus" class="bg-gray-200 dark:bg-gray-800 text-xl px-5 my-8">
        Reserveer De Bus
      </UButton>
      <ParmezaanMenu />
    </UContainer>
  </div>
</template>

<style></style>
