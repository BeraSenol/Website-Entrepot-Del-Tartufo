<template>
  <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    <UCard>
      <template #header>
        <p class="text-center text-xl font-bold tracking-wider">ANTIPASTI</p>
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
        <p class="text-center text-xl font-bold tracking-wider">PRIMI PIATTI</p>
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
    <UCard>
      <template #header>
        <p class="text-center text-xl font-bold tracking-wider">
          SECONDI PIATTI
        </p>
        <p class="text-center text-lg tracking-wider">CARNE</p>
      </template>
      <template v-for="secondiCarne in secondiCarnes">
        <UContainer class="grid grid-rows-2 grid-flow-col gap-1 mb-6">
          <p class="font-bold">{{ secondiCarne.title }}</p>
          <p class="italic">{{ secondiCarne.discription }}</p>
          <p class="text-right font-light">{{ secondiCarne.price }}</p>
          <br />
        </UContainer>
      </template>
    </UCard>
    <UCard>
      <template #header>
        <p class="text-center text-xl font-bold tracking-wider">
          SECONDI PIATTI
        </p>
        <p class="text-center text-lg tracking-wider">PESCE</p>
      </template>

      <template v-for="secondiPesce in secondiPesces">
        <UContainer class="grid grid-rows-2 grid-flow-col gap-1 mb-6">
          <p class="font-bold">{{ secondiPesce.title }}</p>
          <p class="italic">{{ secondiPesce.discription }}</p>
          <p class="text-right font-light">{{ secondiPesce.price }}</p>
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
const secondiPesces = [
  {
    title: "Branzino | Ligure | 2pers",
    discription: "Zeebaars | Puntpaprika | Olijf | Kapper",
    price: 75,
  },
  {
    title: "Orata | Soto Sale | 2pers",
    discription: "Dorade | Zoutkorst",
    price: 80,
  },
  {
    title: "Rana Pescatrice | Pepe Verde",
    discription: "Zeeduivel | Groene Peper",
    price: 37,
  },
  {
    title: "Pesce Misto | Griglia | Salsa Verde | 2pers",
    discription: "Mix Gegrilde Vis",
    price: 80,
  },
];
const secondiCarnes = [
  {
    title: "Tagliata | Toscana",
    discription: "Entrecôte | Rucola | Parmezaan",
    price: 37,
  },
  {
    title: "Filetto di Manzo | Rossini",
    discription: "Rundsfiles | Foie Gras | Truffel",
    price: 47,
  },
  {
    title: "Carree di Agnello | Pesto",
    discription: "Lamskroon | Pesto",
    price: 39,
  },
  {
    title: "Saltimbocca | Romana",
    discription: "Kalfslapie | Parma | Salie",
    price: 35,
  },
];
</script>

<style></style>
