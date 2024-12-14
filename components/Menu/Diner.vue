<template>
  <div>
    <div class="text-center">
      <AvailableDays days="Ma / Do / Vr / Za / Zo" />
      <TitleDivider text="DINER" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MenuCard :header="antiPastiHeader" :subheader="antiPastiSubheader" :items="antiPastis" />
      <MenuCard :header="primiPiattiHeader" :subheader="primiPiattiSubheader" :items="primiPiattis" />
      <MenuCard :header="secondiPesceHeader" :subheader="secondiPesceSubheader" :items="secondiPesces" />
      <MenuCard :header="secondiCarneHeader" :subheader="secondiCarneSubheader" :items="secondiCarnes" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFetch } from 'nuxt/app';

const { data } = await useFetch('/api/menu')

const antiPastiHeader = data.value.dinner.anti_pasti.header
const primiPiattiHeader = data.value.dinner.primi_piatti.header
const secondiCarneHeader = data.value.dinner.secondi_pesce.header
const secondiPesceHeader = data.value.dinner.secondi_carne.header

const antiPastiSubheader = data.value.dinner.anti_pasti.subheader
const primiPiattiSubheader = data.value.dinner.primi_piatti.subheader
const secondiCarneSubheader = data.value.dinner.secondi_pesce.subheader
const secondiPesceSubheader = data.value.dinner.secondi_carne.subheader

const antiPastis = data.value.dinner.anti_pasti.items
const primiPiattis = data.value.dinner.primi_piatti.items
const secondiCarnes = data.value.dinner.secondi_pesce.items
const secondiPesces = data.value.dinner.secondi_carne.items
</script>
