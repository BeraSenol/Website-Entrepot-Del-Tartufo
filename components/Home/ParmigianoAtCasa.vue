<template>
  <div class="flex flex-col">
    <TitleAvailability days="Ma / Do / Vr / Za / Zo" />
    <TitleLarge title="PARMIGIANO @ CASA" />
    <UContainer class="grid grid-cols-2 px-4 w-full max-w-xl">
      <p class="text-left">Regio Limburg</p>
      <p class="text-right italic">18h - 20h</p>
      <p class="text-left">6+ Personen</p>
      <p class="text-right italic">€70 pp</p>
    </UContainer>
    <UButton to="/parmezaan-bus" v-show="!isOnParmezanPage()" class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 mx-auto px-12 mt-6 user-button">
      Reserveer De Bus
    </UButton>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'nuxt/app';

const route = useRoute();
function isOnParmezanPage(): boolean {
  if (route.fullPath === "/parmezaan-bus") {
    return true;
  } else {
    return false
  }
};
</script>
