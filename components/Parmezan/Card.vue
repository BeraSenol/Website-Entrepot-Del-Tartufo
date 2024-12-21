<template>
  <UCard class="u-border-gray-200 u-border">
    <template #header>
      <h5 class="text-center">{{ header }}</h5>
      <h6 class="font-light text-center" v-if="subheader">{{ subheader }}</h6>
    </template>
    <template v-for="item in items">
      <UContainer class="flex flex-col py-3 text-center">
        <p class="col-span-5 font-semibold">{{ item.name }}</p>
        <p class="col-span-5 italic">{{ item.description }}</p>
      </UContainer>
    </template>
  </UCard>
</template>

<script lang="ts">
export default {
  props: ["header", "subheader", "items"]
}
</script>