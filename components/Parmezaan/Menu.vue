<template>
  <UCard>
    <template #header>
      <CardTitle title="MENU @ CASA" />
    </template>
    <template v-for="parmezanBusItem in parmezanBusMenuItems" class="text-center">
      <p class="text-center font-bold">{{ parmezanBusItem.title }}</p>
      <p class="text-center italic mb-6">{{ parmezanBusItem.description }}</p>
    </template>
  </UCard>
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
