<template>
  <UContainer class="grid grid-rows-2 grid-flow-col gap-1 my-6 text-lg font-light tracking-wide">
    <p class="font-bold">{{ title }}</p>
    <p class="italic">{{ description }}</p>
    <p class="text-right italic">{{ price }}</p>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["title", "description", "price"]
}
</script>