<template>
    <div class="bg-gray-50 dark:bg-gray-950 min-h-screen text-center">
        <NuxtLayout>
            <h1 class="text-7xl font-bold tracking-wider pt-60">Error: {{ error?.statusCode }}</h1>
            <h1 class="text-6xl font-light tracking-wide py-12">{{ error?.statusMessage }}</h1>
            <UButton class="bg-gray-100 dark:bg-gray-900 text-3xl tracking-wide px-5 mb-32" to="/">
                Back Home
            </UButton>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { NuxtError } from 'nuxt/app';
const props = defineProps({
    error: Object as () => NuxtError
})
</script>