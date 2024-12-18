<template>
  <div class="border-gray-300 dark:border-gray-700 relative border-2 user-rounded-xl mt-6">
    <NuxtImg class="user-rounded-xl" fit="cover" width="1212" height="520" densities="x1 x2" alt="landing_image"
      :src="image" :placeholder="[1212, 520, 50, 5]" preload />
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
