<template>
  <UContainer class="py-48">
    <h1 class="text-7xl font-bold tracking-wider">Error: {{ errorCode }}</h1>
    <h1 class="text-6xl font-light tracking-wide py-12">{{ errorMessage }}</h1>
    <UButton class="bg-gray-100 dark:bg-gray-900 text-3xl tracking-wide px-5" to="/">
      Back Home
    </UButton>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["errorCode", "errorMessage"]
}
</script>
