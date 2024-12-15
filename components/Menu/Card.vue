<template>
  <UCard>
    <template #header>
      <h5 class="text-center">{{ header }}</h5>
      <h6 class="font-light text-center" v-if="subheader">{{ subheader }}</h6>
    </template>
    <template v-for="item in items">
      <div class="flex flex-col py-4 mx-2">
        <div class="flex">
          <p class="font-semibold basis-11/12">{{ item.name }}</p>
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