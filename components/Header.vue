<template>
  <div>
    <!-- HEADER / Screensize > md -->
    <div class="bg-gray-50 dark:bg-gray-950 hidden md:block">
      <UHorizontalNavigation :links="links" class="border-gray-950 dark:border-gray-50 border-b-2" :ui="{
        label: 'text-gray-950 dark:text-gray-50'
      }" />
    </div>
    <!-- SLIDEOVER / Screensize < md -->
    <!-- HEADER -->
    <div class="bg-gray-50 dark:bg-gray-950 block md:hidden border-b-2 flex">
      <UButton size="xl" icon="i-heroicons:bars-3-20-solid" color="white" variant="link" class="mx-1 my-1.5 ml-auto"
        @click="isOpen = true" />
    </div>
    <!-- SLIDEOVER  -->
    <USlideover class="md:hidden" v-model="isOpen">
      <UCard class="flex flex-col flex-1" :ui="{
        body: { base: 'flex-1' },
        header: { padding: 'py-3' },
        ring: '',
        divide: 'divide-gray-950 dark:divide-gray-50 divide-y ',
      }">
        <template #header>
          <NuxtImg src="logo-white.png" width="30" class="mx-auto" />
          <UButton color="white" variant="link" size="xl" icon="i-heroicons-x-mark-20-solid"
            class="md:hidden absolute end-1 top-2 z-10" square padded @click="isOpen = false" />
        </template>
        <UContainer class="flex flex-col text-xl tracking-wider">
          <UButton variant="link" color="white" class="text-xl font-light py-2" to="/" @click="isOpen = false">
            ENTREPOT DEL TARTUFO
          </UButton>
          <UButton variant="link" color="white" class="text-xl font-light py-2" to="/menu" @click="isOpen = false">
            MENU
          </UButton>
          <UButton variant="link" color="white" class="text-xl font-light py-2" to="/over" @click="isOpen = false">
            OVER
          </UButton>
          <UButton variant="link" color="white" class="text-xl font-light py-2" to="/contact" @click="isOpen = false">
            CONTACT
          </UButton>
          <UButton variant="link" color="white" class="text-xl font-light py-2" to="/parmezaan-bus"
            @click="isOpen = false">
            PARMEZAAN BUS
          </UButton>
        </UContainer>
      </UCard>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const links = [
  [],
  [
    {
      label: "ENTREPOT DEL TARTUFO",
      labelClass:
        "font-bold text-2xl",
      to: "/",
    },
  ],
  [
    {
      label: "Menu",
      labelClass:
        "text-xl",
      to: "/menu",
    },
    {
      label: "Over",
      labelClass:
        "text-xl",
      to: "/over",
    },
    {
      label: "Contact",
      labelClass:
        "text-xl",
      to: "/contact",
    },
    {
      label: "Parmezaanbus",
      labelClass:
        "text-xl",
      to: "/parmezaan-bus",
    },
  ],
  [],
];
</script>
