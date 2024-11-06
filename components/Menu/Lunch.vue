<template>
  <div>
    <UContainer class="text-center my-8 mt-12">
      <GeneralLunchDays v-show="isOnMenuPage()" />
      <GeneralTextDivider text="LUNCH" />
    </UContainer>
    <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard>
        <template #header>
          <GeneralCardTitle title="CARNE" />
        </template>
        <template v-for="lunchItem in lunchItemsCarne">
          <GeneralCardItem :title="lunchItem.title" :description="lunchItem.description" :price="lunchItem.price" />
        </template>
      </UCard>
      <UCard>
        <template #header>
          <GeneralCardTitle title="PESCE" />
        </template>
        <template v-for="lunchItem in lunchItemsPesce">
          <GeneralCardItem :title="lunchItem.title" :description="lunchItem.description" :price="lunchItem.price" />
        </template>
      </UCard>
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
function isOnMenuPage(): boolean {
  if (route.fullPath === "/menu") {
    return true;
  } else {
    return false
  }
};
const lunchItemsCarne = [
  {
    title: "Vitello Tonnato",
    description: "Kalfsvlees | Tonijnmayo",
    price: 18.5
  },
  {
    title: "Carpaccio di Manzo | Tartufo Estivo",
    description: "Rundscarpaccio | Zomer Truffel",
    price: 29
  },
  {
    title: "Melanzane | Parmigiana",
    description: "Aubergine | Parmezaan",
    price: 17
  },
  {
    title: "Moscardini | Aglio | Olio | Peperoncini",
    description: "Octopusjes | Pikant",
    price: 19.5
  },
];
const lunchItemsPesce = [
  {
    title: "Gramigna | Modenese",
    description: "Gramigna | Venkelworst",
    price: 17
  },
  {
    title: "Papardelle | Ragu Vitello",
    description: "Papardelle | Kalfsragout",
    price: 19.5
  },
  {
    title: "Tagliolini | Tartufo Estivo",
    description: "Tagliolini | Zomer Truffel",
    price: 29
  },
  {
    title: "Linguine | Nero di Seppia | Seppioline",
    description: "Linguine | Inkt | Inktvis",
    price: 21
  },
];
</script>
