<template>
  <div class="bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-gray-50 flex flex-col py-8 user-rounded-xl">
    <TruffleLogoNamed />
    <UContainer class="py-8 mx-8 user-leading-8">
      <p>
       {{ description }}
      </p>
    </UContainer>
    <UButton to="/over" class="bg-gray-200 dark:bg-gray-800 mx-auto px-12 transition ease-in-out user-button">
      Ons Verhaal Hier
    </UButton>
  </div>
</template>

<script lang="ts">
export default {
  props: ["description"]
}
</script>
