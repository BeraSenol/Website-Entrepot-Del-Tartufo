<template>
  <div>
    <div class="text-center">
      <AvailableDays days="Ma / Do / Vr" v-show="isOnMenuPage()" />
      <TitleDivider text="LUNCH" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <CardTitle title="CARNE" />
        </template>
        <template v-for="item in lunchItemsCarne">
          <CardItem :title="item.name" :description="item.description" :price="item.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <CardTitle title="PESCE" />
        </template>
        <template v-for="item in lunchItemsPesce">
          <CardItem :title="item.name" :description="item.description" :price="item.price" />
        </template>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFetch, useRoute } from 'nuxt/app';

const route = useRoute();
const { data } = await useFetch('/api/menu')
const lunchItemsPesce = data.value.lunch.pesce
const lunchItemsCarne = data.value.lunch.carne

function isOnMenuPage(): boolean {
  return route.fullPath === "/menu" ? true : false
};
</script>
