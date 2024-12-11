<template>
  <div class="bg-gray-100 dark:bg-gray-900 user-rounded-xl py-12">
    <TitleLarge title="CONTACT" />
    <UContainer class="user-leading-8 mx-8 flex flex-col gap-y-6">
      <p>
        {{ description }}
      </p>
    </UContainer>
  </div>
</template>

<script lang="ts">
export default {
  props: ["description"]
}
</script>
