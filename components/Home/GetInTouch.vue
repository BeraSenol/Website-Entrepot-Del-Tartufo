<template>
  <UContainer
    class="bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-gray-50 p-8 py-12 mt-12 mx-4 w-full rounded-xl place-items-center text-center">
    <h1 class="text-5xl font-bold tracking-wide pb-8">GET IN TOUCH?</h1>
    <UContainer class="flex flex-col text-xl font-light tracking-wide">
      <p>Heeft u nog verdere vragen? Aarzel niet om contact op te nemen via:</p>
    </UContainer>
    <UContainer>
      <UButton to="mailto:info@entrepotdeltartufo.com" class="bg-gray-200 dark:bg-gray-800 text-xl px-5 mt-8">
        Ons Een Mail Te Sturen
      </UButton>
    </UContainer>
    <p class="text-xl font-light tracking-wide my-6">OF</p>
    <UContainer>
      <UButton to="/contact" class="bg-gray-200 dark:bg-gray-800 text-xl px-5">
        Het Contact Formulier
      </UButton>
    </UContainer>
  </UContainer>
</template>
