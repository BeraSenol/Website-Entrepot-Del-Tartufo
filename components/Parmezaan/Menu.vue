<template>
  <UContainer class="justify-center mx-auto py-12">
    <UCard>
      <template #header>
        <GeneralCardTitle title="MENU @ CASA" />
      </template>
      <template v-for="parmezanBusItem in parmezanBusMenuItems">
        <UContainer class="text-center my-0 py-0">
          <p class="text-lg font-light tracking-wide italic py-2" >{{ parmezanBusItem.title }}</p>
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
