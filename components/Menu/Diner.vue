<template>
  <div>
    <UContainer class="text-center my-8 mt-12">
      <GeneralOpeningDays />
      <GeneralTextDivider text="DINER" />
    </UContainer>
    <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 max-w-7xl">
      <UCard>
        <template #header>
          <GeneralCardTitle title="ANTI PASTI" />
        </template>
        <template v-for="antiPasti in antiPastis">
          <GeneralCardItem :title="antiPasti.title" :description="antiPasti.description" :price="antiPasti.price" />
        </template>
      </UCard>

      <UCard>
        <template #header>
          <GeneralCardTitle title="PRIMI PIATTI" />
        </template>
        <template v-for="primiPiatti in primiPiattis">
          <GeneralCardItem :title="primiPiatti.title" :description="primiPiatti.description"
            :price="primiPiatti.price" />
        </template>
      </UCard>

      <UCard>
        <template #header>
          <GeneralCardTitle title="SECONDI PIATTI" />
          <p class="text-xl font-light tracking-wide text-center">CARNE</p>
        </template>
        <template v-for="secondiCarne in secondiCarnes">
          <GeneralCardItem :title="secondiCarne.title" :description="secondiCarne.description"
            :price="secondiCarne.price" />
        </template>
      </UCard>

      <UCard>
        <template #header>
          <GeneralCardTitle title="SECONDI PIATTI" />
          <p class="text-xl font-light tracking-wide text-center">PESCE</p>
        </template>
        <template v-for="secondiPesce in secondiPesces">
          <GeneralCardItem :title="secondiPesce.title" :description="secondiPesce.description"
            :price="secondiPesce.price" />
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const antiPastis = [
  {
    title: "Vitello Tonnato",
    description: "Kalfsvlees | Tonijnmayo",
    price: 18.5,
  },
  {
    title: "Carpaccio di Manzo | Tartufo Estivo",
    description: "Rundscarpaccio | Zomer Truffel",
    price: 29,
  },
  {
    title: "Melanzane | Parmigiana",
    description: "Aubergine | Parmezaan",
    price: 17,
  },
  {
    title: "Moscardini | Aglio | Olio | Peperoncini",
    description: "Octopusjes | Pikant",
    price: 19.5,
  },
];
const primiPiattis = [
  {
    title: "Gramigna | Modenese",
    description: "Gramigna | Venkelworst",
    price: 17,
  },
  {
    title: "Papardelle | Ragu Vitello",
    description: "Papardelle | Kalfsragout",
    price: 19.5,
  },
  {
    title: "Tagliolini | Tartufo Estivo",
    description: "Tagliolini | Zomer Truffel",
    price: 29,
  },
  {
    title: "Linguine | Nero di Seppia | Seppioline",
    description: "Linguine | Inkt | Inktvis",
    price: 21,
  },
];
const secondiPesces = [
  {
    title: "Branzino | Ligure | 2 Pers",
    description: "Zeebaars | Puntpaprika | Olijf | Kapper",
    price: 75,
  },
  {
    title: "Orata | Soto Sale | 2 Pers",
    description: "Dorade | Zoutkorst",
    price: 80,
  },
  {
    title: "Rana Pescatrice | Pepe Verde",
    description: "Zeeduivel | Groene Peper",
    price: 37,
  },
  {
    title: "Pesce Misto | Griglia | Salsa Verde | 2 Pers",
    description: "Mix Gegrilde Vis",
    price: 80,
  },
];
const secondiCarnes = [
  {
    title: "Tagliata | Toscana",
    description: "Entrecôte | Rucola | Parmezaan",
    price: 37,
  },
  {
    title: "Filetto di Manzo | Rossini",
    description: "Rundsfiles | Foie Gras | Truffel",
    price: 47,
  },
  {
    title: "Carree di Agnello | Pesto",
    description: "Lamskroon | Pesto",
    price: 39,
  },
  {
    title: "Saltimbocca | Romana",
    description: "Kalfslapie | Parma | Salie",
    price: 35,
  },
];
</script>
