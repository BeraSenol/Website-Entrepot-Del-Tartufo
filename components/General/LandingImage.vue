<template>
  <div class="relative border-b-2">
    <NuxtImg :src="image" class="w-full" />
    <div class="absolute inset-0 inset-y-1/3">
      <UContainer class="flex flex-col place-items-center text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
          {{ title }}
        </h1>
        <NuxtImg src="logo/white.png" class="py-2" sizes="30 md:40 lg:50" />
        <h2 class="text-lg md:text-xl lg:text-2xl font-light italic">
          {{ subtitle }}
        </h2>
      </UContainer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["image", "title", "subtitle"]
}
</script>
