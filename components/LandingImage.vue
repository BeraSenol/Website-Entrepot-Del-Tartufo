<template>
  <div class="relative border-b-2">
    <NuxtImg :src="image" class="w-full" />
    <div class="absolute inset-0" style="top: 37%; bottom: 37%;">
      <UContainer class="flex flex-col place-items-center text-center">
        <h3 class="md:text-5xl lg:text-6xl xl:text-7xl">
          {{ title }}
        </h3>
        <TruffleLogo class="my-2"/>
        <p class="lg:text-xl xl:text-2xl italic">
          {{ subtitle }}
        </p>
      </UContainer>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["image", "title", "subtitle"]
}
</script>
