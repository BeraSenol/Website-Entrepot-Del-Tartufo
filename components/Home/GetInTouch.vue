<template>
  <div>
    <GeneralTruffleDivider />
    <UContainer>
      <UContainer
        class="bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-gray-50 p-8 py-12 mt-12 w-full rounded-xl place-items-center text-center">
        <GeneralText5XL title="GET IN TOUCH" class="pb-8" />
        <UContainer class="flex flex-col text-xl font-light tracking-wide">
          <p>Heeft u nog verdere vragen? Aarzel niet om contact op te nemen via:</p>
        </UContainer>
        <UContainer class="flex justify-center gap-6 pt-8">
          <UButton to="/contact" class="bg-gray-200 dark:bg-gray-800 text-xl px-5">
            Het Contact Formulier
          </UButton>
          <UButton to="mailto:info@entrepotdeltartufo.com" class="bg-gray-200 dark:bg-gray-800 text-xl px-5">
            Ons Een Mail Te Sturen
          </UButton>
        </UContainer>
      </UContainer>
    </UContainer>
  </div>
</template>
