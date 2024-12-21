<template>
  <UContainer class="flex flex-col justify-center items-center pt-16 min-h-screen">
    <h6 class="font-light lg:text-2xl xl:text-3xl tracking-wider">{{ errorCode }}</h6>
    <h3 class="font-bold lg:text-5xl xl:text-6xl tracking-wide">{{ errorMessage }}</h3>
    <p class="my-6">The page you are looking for does not exist.</p>
    <UButton class="inline u-border-gray-200 u-bg-gray-100 px-12 tracking-wide u-button" to="/">
      Back Home
    </UButton>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["errorCode", "errorMessage"]
}
</script>
