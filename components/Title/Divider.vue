<template>
  <UDivider class="pb-8" :label="text" :ui="{
    border: { base: 'border-gray-950 dark:border-gray-50' },
    label: 'text-3xl xl:text-4xl font-bold tracking-wide',
  }" />
</template>

<script lang="ts">
export default {
  props: ["text"]
}
</script>
