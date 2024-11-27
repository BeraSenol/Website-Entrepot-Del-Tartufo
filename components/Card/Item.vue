<template>
  <UContainer class="grid grid-rows-2 grid-cols-6 grid-flow-col mb-6">
    <p class="font-semibold col-span-5">{{ title }}</p>
    <p class="italic col-span-5">{{ description }}</p>
    <p class="italic text-right ml-4">{{ price }}</p>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["title", "description", "price"]
}
</script>