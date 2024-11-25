<template>
  <UContainer class="justify-center pb-12">
    <UCard>
      <template #header>
        <CardTitle title="MENU @ CASA" />
      </template>
      <template v-for="parmezanBusItem in parmezanBusMenuItems">
        <UContainer class="text-center my-0 py-0">
          <p class="text-lg font-bold tracking-wide pt-3">{{ parmezanBusItem.title }}</p>
          <p class="text-lg font-light tracking-wide italic pb-3">{{ parmezanBusItem.description }}</p>
        </UContainer>
      </template>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
const parmezanBusMenuItems = [
  {
    title: "Vitello Tonnato",
    description: "Kalfsvlees | Tonijnmayo",
  },
  {
    title: "Tagliolini | Tartufo Estivo",
    description: "Rundscarpaccio | Zomer Truffel",
  },
  {
    title: "Arrosto di Vitello",
    description: "Aubergine | Parmezaan",
  },
  {
    title: "Crème Caramel",
    description: "Octopusjes | Pikant",
  },
];
</script>
