<template>
  <div>
    <div class="text-center">
      <TitleAvailability days="Ma / Do / Vr / Za / Zo" />
      <TitleDivider text="DINER" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <MenuCard :header="data.anti_pasti.header" :subheader="data.anti_pasti.subheader"
        :items="data.anti_pasti.items" />
      <MenuCard :header="data.primi_piatti.header" :subheader="data.primi_piatti.subheader"
        :items="data.primi_piatti.items" />
      <MenuCard :header="data.secondi_pesce.header" :subheader="data.secondi_pesce.subheader"
        :items="data.secondi_pesce.items" />
      <MenuCard :header="data.secondi_carne.header" :subheader="data.secondi_carne.subheader"
        :items="data.secondi_carne.items" />
    </div>
    <MenuVegetarian/>
  </div>
</template>

<script lang="ts" setup>
import { useFetch } from 'nuxt/app';

const { data } = await useFetch('/api/menu/dinner')
</script>
