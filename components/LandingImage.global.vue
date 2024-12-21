<template>
  <div class="relative u-border-gray-200 mt-6 u-border u-rounded">
    <NuxtImg class="md:block hidden u-rounded" fit="cover" width="1212" height="520" densities="x1 x2"
      alt="landing_image" :src="image" :placeholder="[1212, 520]" preload />
    <NuxtImg class="md:hidden u-rounded" fit="cover" width="500" height="400" densities="x1 x2"
      alt="landing_image" :src="image" :placeholder="[500, 400]" preload />
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="flex flex-col place-items-center text-center">
        <h5 class="drop-shadow-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase">
          {{ title }}
        </h5>
        <TruffleLogo class="my-1" />
        <p class="drop-shadow-2xl font-light text-base md:text-lg lg:text-xl xl:text-2xl italic">
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
