<template>
  <div>
    <div class="text-center">
      <AvailableDays days="Ma / Do / Vr / Za / Zo" />
      <TitleDivider text="DINER" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MenuCard :header="data.dinner.anti_pasti.header" :subheader="data.dinner.anti_pasti.subheader"
        :items="data.dinner.anti_pasti.items" />
      <MenuCard :header="data.dinner.primi_piatti.header" :subheader="data.dinner.primi_piatti.subheader"
        :items="data.dinner.primi_piatti.items" />
      <MenuCard :header="data.dinner.secondi_pesce.header" :subheader="data.dinner.secondi_pesce.subheader"
        :items="data.dinner.secondi_pesce.items" />
      <MenuCard :header="data.dinner.secondi_carne.header" :subheader="data.dinner.secondi_carne.subheader"
        :items="data.dinner.secondi_carne.items" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFetch } from 'nuxt/app';

const { data } = await useFetch('/api/menu')
</script>
