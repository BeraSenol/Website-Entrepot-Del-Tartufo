<template>
  <NuxtLayout>
    <!-- <div class="bg-white-50 min-h-screen"> -->
    <NuxtPage />
    <!-- </div> -->
  </NuxtLayout>
</template>

<script>
// For Nuxt Bridge
export default {
  colorMode: "light",
};
// For Nuxt 3
definePageMeta({
  colorMode: "light",
});
</script>
