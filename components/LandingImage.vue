<template>
  <div class="relative border-2 user-rounded-xl mt-6">
    <NuxtImg :src="image" alt="landing_image" width="1200" height="630" class="w-full user-rounded-xl h-1/2"
      :placeholder="[1200, 630]" />
    <div class="absolute inset-0" style="top: 37%; bottom: 37%;">
      <UContainer class="flex flex-col place-items-center text-center">
        <h4 class="md:text-4xl lg:text-5xl xl:text-6xl uppercase">
          {{ title }}
        </h4>
        <TruffleLogo class="my-2" />
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
