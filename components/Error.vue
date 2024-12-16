<template>
  <UContainer class="flex flex-col items-center justify-center pt-16 min-h-screen">
    <h6 class="lg:text-2xl xl:text-3xl font-light tracking-wider">{{ errorCode }}</h6>
    <h3 class="lg:text-5xl xl:text-6xl font-bold tracking-wide">{{ errorMessage }}</h3>
    <p class="my-6">The page you are looking for does not exist.</p>
    <UButton class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 tracking-wide inline user-button w-fit" to="/">
      Back Home
    </UButton>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["errorCode", "errorMessage"]
}
</script>
