<template>
  <div class="relative border-2 inline-block user-rounded-xl mt-6">
    <NuxtImg :src="image" alt="landing_image" width="1200" height="630" class="user-rounded-xl h-1/2"
      :placeholder="[1200, 630]" />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="flex flex-col place-items-center text-center">
        <h6 class="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase">
          {{ title }}
        </h6>
        <TruffleLogo class="my-1" />
        <p class="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl italic">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["image", "title", "subtitle"]
}
</script>
