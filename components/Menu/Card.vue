<template>
  <UCard>
    <template #header>
      <h5 class="text-center">{{ header }}</h5>
      <h6 class="font-light text-center" v-if="subheader">{{ subheader }}</h6>
    </template>
    <template v-for="item in items">
      <UContainer class="grid grid-rows-2 grid-cols-6 grid-flow-col py-3">
        <p class="font-semibold col-span-5">{{ item.name }}</p>
        <p class="italic col-span-5">{{ item.description }}</p>
        <p class="italic text-right ml-4">{{ item.price }}</p>
      </UContainer>
    </template>
  </UCard>
</template>

<script lang="ts">
export default {
  props: ["header", "subheader", "items"]
}
</script>