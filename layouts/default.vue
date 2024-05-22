<template>
  <UHorizontalNavigation
    :links="links"
    class="border-b-2 border-white-300"
    :ui="{
      label: 'text-xl text-white-50 font-medium',
      active: 'font-bold',
      after: 'after:h-[0px]',
    }"
  />

  <slot />
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
  [],
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
