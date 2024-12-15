<template>
  <ParmezanCard :header="data.header" :subheader="data.subheader" :items="data.items" />
</template>

<script lang="ts" setup>
import { useFetch } from 'nuxt/app';

const { data } = await useFetch("/api/menu/parmezan")
</script>
