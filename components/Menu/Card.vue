<template>
  <UCard class="u-border-gray-200 box-shadow-2xl u-border">
    <template #header>
      <h5 class="text-center">{{ header }}</h5>
      <h6 class="font-light text-center" v-if="subheader">{{ subheader }}</h6>
    </template>
    <template v-for="item in items">
      <div class="flex flex-col mx-3 py-4">
        <div class="flex">
          <p class="font-semibold basis-11/12">
            {{ item.name }}
            <UBadge v-if="item.double" class="py-0.5" color="white" label="2 Pers" size="md" variant="solid" />
            <UChip v-if="item.vegetarian" class="text-right" color="emerald" inset>&nbsp;</UChip>
          </p>
          <p class="text-right ml-3 italic">{{ item.price }}</p>
        </div>
        <p class="mr-4 italic">{{ item.description }}</p>
      </div>
    </template>
  </UCard>
</template>

<script lang="ts">
export default {
  props: ["header", "subheader", "items"]
}
</script>