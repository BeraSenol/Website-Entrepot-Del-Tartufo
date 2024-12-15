<template>
  <ParmezanCard :header="data.parmezan.header" :subheader="data.parmezan.subheader" :items="data.parmezan.items" />
</template>

<script lang="ts" setup>
import { useFetch } from 'nuxt/app';

const { data } = await useFetch("/api/menu")
</script>
