<template>
  <div class="z-50 fixed w-screen h-16">
    <div class="md:block hidden u-bg-gray-50 border-b-2">
      <UContainer>
        <UHorizontalNavigation :links="links" :ui="{
          before: 'hover:before:bg-gray-50 dark:hover:before:bg-gray-950'
        }">
          <template #default="{ link }">
            <h6 class="relative font-semibold text-lg md:text-xl lg:text-2xl hover-underline-animation transition-all px-0 mx-0">
              {{
                link.label }}</h6>
          </template>
        </UHorizontalNavigation>
      </UContainer>
    </div>
    <div class="flex md:hidden u-bg-gray-50 border-b-2">
      <UButton size="xl" icon="i-heroicons:bars-3-20-solid" color="white" variant="link" class="mx-1 my-1.5 ml-auto"
        @click="isOpen = true" />
    </div>
    <USlideover class="md:hidden" v-model="isOpen">
      <UCard class="flex flex-col flex-1" :ui="{
        header: { padding: 'py-3' },
        divide: 'divide-gray-950 dark:divide-gray-50 divide-y',
      }">
        <template #header>
          <UButton color="white" size="xl" icon="i-heroicons-x-mark-20-solid"
            class="top-2 z-50 absolute md:hidden end-1" square padded @click="isOpen = false" />
          <NuxtImg src="logo/white.png" height="33" class="mx-auto" preload />
        </template>
        <UContainer class="flex flex-col">
          <UVerticalNavigation :links="links" @click="isOpen = false" :ui="{
            inactive: 'hover:before:bg-gray-100 dark:hover:before:bg-gray-900',
            divider: {
              wrapper: {
                base: 'hidden'
              }
            },
            active: 'before:bg-gray-100 dark:before:bg-gray-900',
          }">
            <template #default="{ link }" >
              <span class="relative font-light" >
                <h6>{{ link.label }}</h6>
              </span>
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
      label: "Parmezaan Bus",
      to: "/parmezaan-bus",
    },
  ],
];
</script>
