<template>
  <div class="text-gray-950 dark:text-gray-50 flex flex-col user-rounded-xl">
    <TitleLarge title="GET IN TOUCH!" />
    <p class="text-center">Heeft u nog verdere vragen? Aarzel niet om contact op te nemen via:</p>
    <UContainer class="grid grid-cols-7 pt-8">
      <UButton to="/contact"
        class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 col-span-3 user-button">
        Contact Formulier
      </UButton>
      <UButton to="mailto:info@entrepotdeltartufo.com"
        class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 col-span-3 col-start-5 user-button">
        Een Mail Te Sturen
      </UButton>
    </UContainer>
  </div>
</template>
