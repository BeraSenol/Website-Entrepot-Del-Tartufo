<template>
  <div class="hidden lg:block bg-slate-950 max-w-full">
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

  <div class="block lg:hidden bg-slate-950">
    <UVerticalNavigation
      :links="links2"
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
      labelClass: "font-bold text-2xl font-color-white max-w-full",
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
const links2 = [
  [
    {
      label: "ENTREPOT DEL TARTUFO",
      labelClass: "font-bold text-2xl font-color-white max-w-full",
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
