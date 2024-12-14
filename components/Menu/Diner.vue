<template>
  <div>
    <div class="text-center">
      <AvailableDays days="Ma / Do / Vr / Za / Zo" />
      <TitleDivider text="DINER" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <CardTitle title="ANTI PASTI" />
        </template>
        <template v-for="item in antiPastis">
          <CardItem :title="item.name" :description="item.description" :price="item.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <CardTitle title="PRIMI PIATTI" />
        </template>
        <template v-for="item in primiPiattis">
          <CardItem :title="item.name" :description="item.description" :price="item.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <CardTitle title="SECONDI PIATTI" />
          <h6 class="font-light text-center">CARNE</h6>
        </template>
        <template v-for="item in secondiCarnes">
          <CardItem :title="item.name" :description="item.description" :price="item.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <CardTitle title="SECONDI PIATTI" />
          <h6 class="font-light text-center">PESCE</h6>
        </template>
        <template v-for="item in secondiPesces">
          <CardItem :title="item.name" :description="item.description" :price="item.price" />
        </template>
      </UCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFetch } from 'nuxt/app';

const { data } = await useFetch('/api/menu')

const antiPastis = data.value.dinner.anti_pasti
const primiPiattis = data.value.dinner.primi_piatti
const secondiCarnes = data.value.dinner.secondi_pesce
const secondiPesces = data.value.dinner.secondi_carne
</script>
