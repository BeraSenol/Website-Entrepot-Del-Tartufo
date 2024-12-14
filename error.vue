<template>
    <div class="bg-gray-50 dark:bg-gray-950 text-center">
        <Header />
        <Error :errorCode="error?.statusCode" :errorMessage="error?.statusMessage" />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { NuxtError } from 'nuxt/app';
const props = defineProps({
    error: Object as () => NuxtError
})
</script>