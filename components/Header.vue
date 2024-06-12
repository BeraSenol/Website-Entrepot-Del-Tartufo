<template>
  <div class="hidden lg:block">
    <UHorizontalNavigation
      :links="links"
      class="border-b-2 border-white-300"
      :ui="{
        label: 'text-xl text-white-50 font-medium',
        active: 'font-bold',
        after: 'after:h-[0px]',
      }"
    />
  </div>
  <div class="block lg:hidden">
    <UVerticalNavigation
      :links="links"
      :ui="{
        label: 'text-xl text-white-50 font-medium ml-4',
        active: 'font-bold before:bg-grey-900 dark:before:bg-grey-900',
        after: 'after:h-[0px]',
      }"
    />
  </div>
</template>

<script setup lang="ts">
const links = [
  [],
  [
    {
      label: "ENTREPOT DEL TARTUFO",
      labelClass: "font-bold text-3xl font-color-white",
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
      to: "/about",
    },
    {
      label: "Contact",
      to: "/contact",
    },
    {
      label: "Reserveren",
      to: "/reservation",
    },
    {
      label: "Parmezaanbus",
      to: "/parmezan",
    },
  ],
  [],
];
</script>
