<template>
  <UContainer class="max-w-7xl">
    <UDivider
      class="py-16"
      label="LUNCH"
      :ui="{
        border: { base: 'dark:border-white-100' },
        label: 'text-4xl font-bold',
      }"
    />
  </UContainer>
  <UContainer
    class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 max-w-7xl"
  >
    <UCard>
      <template #header>
        <p class="text-center text-xl font-bold tracking-wider">CARNE</p>
      </template>
      <template v-for="antiPasti in antiPastis">
        <UContainer class="grid grid-rows-2 grid-flow-col gap-1 mb-6">
          <p class="font-bold">{{ antiPasti.title }}</p>
          <p class="italic">{{ antiPasti.discription }}</p>
          <p class="text-right font-light">{{ antiPasti.price }}</p>
          <br />
        </UContainer>
      </template>
    </UCard>

    <UCard>
      <template #header>
        <p class="text-center text-xl font-bold tracking-wider">PESCE</p>
      </template>
      <template v-for="primiPiatti in primiPiattis">
        <UContainer class="grid grid-rows-2 grid-flow-col gap-1 mb-6">
          <p class="font-bold">{{ primiPiatti.title }}</p>
          <p class="italic">{{ primiPiatti.discription }}</p>
          <p class="text-right font-light">{{ primiPiatti.price }}</p>
          <br />
        </UContainer>
      </template>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
const antiPastis = [
  {
    title: "Vitello Tonnato",
    discription: "Kalfsvlees | Tonijnmayo",
    price: 18.5,
  },
  {
    title: "Carpaccio di Manzo | Tartufo Estivo",
    discription: "Rundscarpaccio | Zomer Truffel",
    price: 29,
  },
  {
    title: "Melanzane | Parmigiana",
    discription: "Aubergine | Parmezaan",
    price: 17,
  },
  {
    title: "Moscardini | Aglio | Olio | Peperoncini",
    discription: "Octopusjes | Pikant",
    price: 19.5,
  },
];
const primiPiattis = [
  {
    title: "Gramigna | Modenese",
    discription: "Gramigna | Venkelworst",
    price: 17,
  },
  {
    title: "Papardelle | Ragu Vitello",
    discription: "Papardelle | Kalfsragout",
    price: 19.5,
  },
  {
    title: "Tagliolini | Tartufo Estivo",
    discription: "Tagliolini | Zomer Truffel",
    price: 29,
  },
  {
    title: "Linguine | Nero di Seppia | Seppioline",
    discription: "Linguine | Inkt | Inktvis",
    price: 21,
  },
];
</script>
