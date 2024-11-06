<template>
  <UContainer class="py-40 flex flex-col place-items-center">
    <h1 class="text-5xl font-bold tracking-wider">
      {{ title }}
    </h1>
    <NuxtImg class="py-2" src="/logo-white.png" width="30px"/>
    <h2 class="text-xl font-light italic">
      {{ subtitle }}
    </h2>
  </UContainer>
</template>

<script lang="ts">
export default {
  props: ["title", "subtitle"]
}
</script>
