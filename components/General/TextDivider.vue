<template>
  <UDivider :label="text" :ui="{
    border: { base: 'border-gray-950 dark:border-gray-50 px-0 sm:xl:px-0' },
    label: 'text-4xl font-bold tracking-wide',
  }" />
</template>

<script lang="ts">
export default {
  props: ["text"]
}
</script>

<style></style>