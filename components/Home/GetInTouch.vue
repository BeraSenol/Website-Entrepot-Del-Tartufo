<template>
  <UContainer class="bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-gray-50 flex flex-col user-rounded-xl">
    <TitleLarge class="py-8" title="GET IN TOUCH!" />
    <p class="text-center">Heeft u nog verdere vragen? Aarzel niet om contact op te nemen via:</p>
    <UContainer class="grid grid-cols-7 py-8">
      <UButton to="/contact" class="bg-gray-200 dark:bg-gray-800 col-span-3 user-button">
        Het Contact Formulier
      </UButton>
      <UButton to="mailto:info@entrepotdeltartufo.com"
        class="bg-gray-200 dark:bg-gray-800 col-span-3 col-start-5 user-button">
        Ons Een Mail Te Sturen
      </UButton>
    </UContainer>
  </UContainer>
</template>
