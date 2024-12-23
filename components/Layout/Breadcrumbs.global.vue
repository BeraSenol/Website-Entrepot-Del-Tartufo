<template>
  <UBreadcrumb :links="visitedLinks" class="py-2 truncate" :ui="{ active: 'text-gray-950 dark:text-gray-50' }" >
    <template #default="{ link, isActive, index }">
      <p class="text-sm md:text-base font-normal transition-all tracking-wider italic" :color="isActive ? 'primary' : 'gray'">
        {{ link.label }}
      </p>
    </template>
  </UBreadcrumb>
</template>

<script lang="ts" setup>
import { useState } from 'nuxt/app';
import { Ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const visitedLinks: Ref<Breadcrumb[]> = useState<Breadcrumb[]>("visitedLinks", () => []);

interface Breadcrumb {
  label: string;
  to: string;
}

// Watch for route changes to update visited links
watch(
  () => route.path,
  () => {
    const currentPath = route.path;
    const paths = route.path.split("/").filter(Boolean);
    const currentBreadcrumb: Breadcrumb = {
      label: decodeURIComponent(paths.at(-1) || "Home").replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
      to: currentPath,
    };
    // Check if the current link already exists in visited links
    const existingIndex = visitedLinks.value.findIndex(
      (link) => link.to === currentPath
    );
    if (existingIndex !== -1) {
      // Reset breadcrumbs up to the repeated link
      visitedLinks.value = visitedLinks.value.slice(0, existingIndex + 1);
    } else {
      // Add the new link to the visited links
      visitedLinks.value.push(currentBreadcrumb);
    }
  },
  { immediate: true }
);
</script>
