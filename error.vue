<template>
    <div class="bg-slate-950 min-h-screen">
        <NuxtLayout>
            <h1>{{ error?.statusCode }}</h1>
            <NuxtLink to="/">Go back home</NuxtLink>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})
</script>