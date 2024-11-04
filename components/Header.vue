<template>
  <div>
    <div class="hidden md:block bg-slate-950 max-w-full">
      <UHorizontalNavigation :links="links" class="border-b-2 border-white-300" :ui="{
        label: 'md:text-xl lg:text-2xl text-white-50 font-medium',
        active: 'font-bold',
        after: 'after:h-[0px]',
      }" />
    </div>

    <div class="block md:hidden bg-slate-950 px-1 border-b-2 flex justify-between" style="height: 58px">
      <UButton size="xl" color="white" variant="link" label="ENTREPOT DEL TARTUFO" class="text-2xl mx-2 font-bold"
        to="/" />
      <UButton size="xl" icon="i-heroicons:bars-3-20-solid" color="white" variant="link"
        class="text-2xl mx-2 my-2 font-bold" @click="isOpen = true" />
    </div>
    <USlideover v-model="isOpen">
      <UCard class="flex flex-col flex-1" :ui="{
        body: { base: 'flex-1' },
        header: { padding: 'py-3' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }">
        <template #header>
          <NuxtImg src="logo-white.png" width="30" class="mx-auto my-0 p-0" />
          <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
            class="flex sm:hidden absolute end-5 top-3 z-10" square padded @click="isOpen = false" />
        </template>

        <UContainer class="flex flex-col text-xl tracking-widest">
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
        "font-bold md:text-2xl lg:text-3xl font-color-white max-w-full",
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
  [],
];
</script>
