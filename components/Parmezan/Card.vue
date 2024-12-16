<template>
  <UCard class="border-gray-200 dark:border-gray-800 border-2">
    <template #header>
      <h5 class="text-center">{{ header }}</h5>
      <h6 class="font-light text-center" v-if="subheader">{{ subheader }}</h6>
    </template>
    <template v-for="item in items">
      <UContainer class="flex flex-col text-center py-3">
        <p class="font-semibold col-span-5">{{ item.name }}</p>
        <p class="italic col-span-5">{{ item.description }}</p>
      </UContainer>
    </template>
  </UCard>
</template>

<script lang="ts">
export default {
  props: ["header", "subheader", "items"]
}
</script>