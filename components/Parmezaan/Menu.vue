<template>
  <UContainer class="justify-center max-w-6xl mx-auto py-12">
    <UCard>
      <template #header>
        <p class="text-center text-xl font-bold tracking-wider">MENU @ CASA</p>
      </template>
      <template v-for="parmezanBusItem in parmezanBusMenuItems">
        <UContainer class="text-center my-0 py-0">
          <p class="font-light text-lg italic py-2" >{{ parmezanBusItem.title }}</p>
        </UContainer>
      </template>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
const parmezanBusMenuItems = [
  {
    title: "Vitello Tonnato",
  },
  {
    title: "Tagliolini | Tartufo Estivo",
  },
  {
    title: "Arrosto di Vitello",
  },
  {
    title: "Crème Caramel",
  },
];
</script>
