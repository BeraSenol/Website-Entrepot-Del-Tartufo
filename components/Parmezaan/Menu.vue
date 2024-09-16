<template>
  <UContainer class="justify-center max-w-6xl mx-auto py-12">
    <UCard>
      <template #header>
        <p class="text-center text-2xl font-bold tracking-wider">MENU @ CASA</p>
      </template>
      <template v-for="parmezanBusItem in parmezanBusMenuItems">
        <UContainer class="text-center mt-0 mb-6">
          <p class="font-light text-lg italic">{{ parmezanBusItem.title }}</p>
        </UContainer>
      </template>
    </UCard>
    <UDivider
      class="pt-12"
      :avatar="{ src: 'logo-white.png', size: 'sm' }"
      :ui="{ border: { base: 'dark:border-white-100' } }"
    />
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
