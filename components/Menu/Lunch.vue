<template>
  <div>
    <div class="text-center">
      <TitleAvailability days="Ma / Do / Vr" v-if="isOnMenuPage()" />
      <TitleDivider text="LUNCH" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MenuCard :header="data.pesce.header" :subheader="data.pesce.subheader"
        :items="data.pesce.items" />
      <MenuCard :header="data.carne.header" :subheader="data.carne.subheader"
        :items="data.carne.items" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFetch, useRoute } from 'nuxt/app';

const { data } = await useFetch('/api/menu/lunch')

function isOnMenuPage(): boolean {
  const route = useRoute();
  return route.fullPath === "/menu" ? true : false
};
</script>
