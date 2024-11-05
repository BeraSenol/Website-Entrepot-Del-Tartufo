<template>
  <div>
    <!-- HORIZONTAL NAVIGATION if Screensize > md -->
    <div class="bg-gray-50 dark:bg-gray-950 hidden md:block border-b-2">
      <UContainer>
        <UHorizontalNavigation :links="links" class=" " :ui="{
          label: 'text-gray-950 dark:text-gray-50'
        }" />
      </UContainer>
    </div>
    <!-- HEADER if Screensize < md -->
    <div class="bg-gray-50 dark:bg-gray-950 flex md:hidden border-b-2 ">
      <UButton size="xl" icon="i-heroicons:bars-3-20-solid" color="white" variant="link" class="mx-1 my-1.5 ml-auto"
        @click="isOpen = true" />
    </div>
    <!-- SLIDEOVER if Screensize < md -->
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
        <UContainer class="flex flex-col tracking-wider">
          <UVerticalNavigation :links="links" />
        </UContainer>
      </UCard>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const links = [
  [
    {
      label: "ENTREPOT DEL TARTUFO",
      to: "/",
      labelClass: "text-gray-950 dark:text-gray-50 font-bold text-2xl",
    },
  ],
  [
    {
      label: "Menu",
      to: "/menu",
      labelClass: "text-gray-950 dark:text-gray-50 text-xl",
    },
    {
      label: "Over",
      to: "/over",
      labelClass: "text-gray-950 dark:text-gray-50 text-xl",
    },
    {
      label: "Contact",
      to: "/contact",
      labelClass: "text-gray-950 dark:text-gray-50 text-xl",
    },
    {
      label: "Parmezaanbus",
      to: "/parmezaan-bus",
      labelClass: "text-gray-950 dark:text-gray-50 text-xl",
    },
  ],
];
</script>
