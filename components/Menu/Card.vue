<template>
  <UCard class="border-gray-200 dark:border-gray-800 border-2 box-shadow-2xl">
    <template #header>
      <h5 class="text-center">{{ header }}</h5>
      <h6 class="font-light text-center" v-if="subheader">{{ subheader }}</h6>
    </template>
    <template v-for="item in items">
      <div class="flex flex-col py-4 mx-3">
        <div class="flex">
          <p class="font-semibold basis-11/12">
            {{ item.name }}
            <UBadge v-if="item.double" class="py-0.5" color="white" label="2 Pers" size="md" variant="solid" />
            <UChip v-if="item.vegetarian" class="text-right" color="emerald" inset>&nbsp;</UChip>
          </p>
          <p class="italic text-right ml-3">{{ item.price }}</p>
        </div>
        <p class="italic mr-4">{{ item.description }}</p>
      </div>
    </template>
  </UCard>
</template>

<script lang="ts">
export default {
  props: ["header", "subheader", "items"]
}
</script>