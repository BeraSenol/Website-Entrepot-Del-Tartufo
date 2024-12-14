<template>
  <div>
    <div class="text-center">
      <AvailableDays days="Ma / Do / Vr" v-show="isOnMenuPage()" />
      <TitleDivider text="LUNCH" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MenuCard :header="headerPesce" :items="lunchItemsPesce" />
      <MenuCard :header="headerCarne" :items="lunchItemsCarne" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFetch, useRoute } from 'nuxt/app';

const { data } = await useFetch('/api/menu')
const headerPesce = data.value.lunch.pesce.header
const headerCarne = data.value.lunch.carne.header
const lunchItemsPesce = data.value.lunch.pesce.items
const lunchItemsCarne = data.value.lunch.carne.items

function isOnMenuPage(): boolean {
  const route = useRoute();
  return route.fullPath === "/menu" ? true : false
};
</script>
