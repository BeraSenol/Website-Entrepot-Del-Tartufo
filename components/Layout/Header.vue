<template>
  <div class="z-50 fixed h-16 w-screen">
    <div class="bg-gray-50 dark:bg-gray-950 hidden md:block border-b-2 ">
      <UContainer>
        <UHorizontalNavigation :links="links">
          <template #default="{ link }">
            <span class="group-hover:text-primary text-xl relative">{{ link.label }}</span>
          </template>
        </UHorizontalNavigation>
      </UContainer>
    </div>
    <div class="bg-gray-50 dark:bg-gray-950 flex md:hidden border-b-2">
      <UButton size="xl" icon="i-heroicons:bars-3-20-solid" color="white" variant="link" class="mx-1 my-1.5 ml-auto"
        @click="isOpen = true" />
    </div>
    <USlideover class="md:hidden" v-model="isOpen">
      <UCard class="flex flex-col flex-1" :ui="{
        body: { base: 'flex-1' },
        header: { padding: 'py-3' },
        divide: 'divide-gray-950 dark:divide-gray-50 divide-y',
      }">
        <template #header>
          <UButton color="white" size="xl" icon="i-heroicons-x-mark-20-solid"
            class="md:hidden absolute end-1 top-2 z-50" square padded @click="isOpen = false" />
          <NuxtImg src="logo/white.png" height="33" class="mx-auto" />
        </template>
        <UContainer class="flex flex-col">
          <UVerticalNavigation :links="links" :ui="{
            divider: {
              wrapper: {
                base: 'hidden'
              }
            }
          }">
            <template #default="{ link }">
              <span class="text-xl relative" @click="isOpen = false">{{ link.label }}</span>
            </template>
          </UVerticalNavigation>
        </UContainer>
      </UCard>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const links = [
  [
    {
      label: "ENTREPOT DEL TARTUFO",
      to: "/",
    },
  ],
  [
    {
      label: "Menu",
      to: "/menu",
    },
    {
      label: "Over",
      to: "/over",
    },
    {
      label: "Contact",
      to: "/contact",
    },
    {
      label: "Parmezaanbus",
      to: "/parmezaan-bus",
    },
  ],
];
</script>
