<template>
  <div class="flex flex-col">
    <TitleLarge title="GET IN TOUCH!" />
    <p class="py-8 text-center">Heeft u nog verdere vragen? Aarzel niet om contact op te nemen via:</p>
    <UContainer class="grid grid-cols-7">
      <UButton to="/contact" class="u-border-gray-200 col-span-3 u-bg-gray-100 px-8 u-button">
        Contact Formulier
      </UButton>
      <UButton to="mailto:info@entrepotdeltartufo.com"
        class="u-border-gray-200 col-span-3 col-start-5 u-bg-gray-100 px-8 u-button">
        Een Mail Te Sturen
      </UButton>
    </UContainer>
  </div>
</template>
