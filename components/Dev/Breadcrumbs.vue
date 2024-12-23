<template>
  <DevOnly>
    <UBreadcrumb :links="visitedLinks" class="pt-2" />
  </DevOnly>
</template>

<script lang="ts" setup>
import { useState } from 'nuxt/app';
import { Ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const visitedLinks: Ref<Breadcrumb[]> = useState<Breadcrumb[]>("visitedLinks", () => []);

interface Breadcrumb {
  label: string;
  path: string;
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
      path: currentPath,
    };
    // Check if the current link already exists in visited links
    const existingIndex = visitedLinks.value.findIndex(
      (link) => link.path === currentPath
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
