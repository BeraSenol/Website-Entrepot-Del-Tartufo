<template>
  <UHorizontalNavigation :links="links" x>
    <template #default="{ link }">
      <span class="group-hover:text-primary relative text-2xl">{{
        link.label
      }}</span>
    </template>
  </UHorizontalNavigation>
  <slot />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const links = [
  [],
  [
    {
      label: "ENTREPOT DEL TARTUFO",
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
