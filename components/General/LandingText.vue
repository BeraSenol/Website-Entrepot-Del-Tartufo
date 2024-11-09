<template>
  <UContainer class="py-40 flex flex-col place-items-center">
    <h1 class="text-5xl font-bold tracking-wider">
      {{ title }}
    </h1>
    <NuxtImg src="white.png" class="py-2" width="50" />
    <h2 class="text-xl font-light italic">
      {{ subtitle }}
    </h2>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["title", "subtitle"]
}
</script>
