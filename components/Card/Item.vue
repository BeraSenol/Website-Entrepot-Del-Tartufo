<template>
  <UContainer class="grid grid-rows-2 grid-flow-col mb-6">
    <p class="font-semibold">{{ title }}</p>
    <p class="italic">{{ description }}</p>
    <p class="italic text-right ml-4">{{ price }}</p>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["title", "description", "price"]
}
</script>