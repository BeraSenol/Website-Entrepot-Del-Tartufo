<template>
  <div>
    <div class="text-center">
      <AvailableDays days="Ma / Do / Vr / Za / Zo" />
      <TextDivider text="DINER" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <CardTitle title="ANTI PASTI" />
        </template>
        <template v-for="antiPasti in antiPastis">
          <CardItem :title="antiPasti.title" :description="antiPasti.description" :price="antiPasti.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <CardTitle title="PRIMI PIATTI" />
        </template>
        <template v-for="primiPiatti in primiPiattis">
          <CardItem :title="primiPiatti.title" :description="primiPiatti.description" :price="primiPiatti.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <CardTitle title="SECONDI PIATTI" />
          <h6 class="font-light text-center">CARNE</h6>
        </template>
        <template v-for="secondiCarne in secondiCarnes">
          <CardItem :title="secondiCarne.title" :description="secondiCarne.description" :price="secondiCarne.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <CardTitle title="SECONDI PIATTI" />
          <h6 class="font-light text-center">PESCE</h6>
        </template>
        <template v-for="secondiPesce in secondiPesces">
          <CardItem :title="secondiPesce.title" :description="secondiPesce.description" :price="secondiPesce.price" />
        </template>
      </UCard>
    </div>
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
