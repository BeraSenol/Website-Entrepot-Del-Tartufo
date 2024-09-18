<template>
  <UContainer class="place-items-center text-center max-w-7xl">
    <p class="text-3xl md:text-4xl pb-4 pt-12 font-bold">LUNCH @ ENTREPOT</p>
    <p class="text-lg font-light">
      Kom genieten van onze heerlijke lunch! Lunchmenu varieert van week tot
      week.
      <br />
      Maandag | Donderdag | Vrijdag <br />
      2 Gangen €30 <br />
      3 Gangen €40 <br />
    </p>
    <UButton
      size="md"
      variant="link"
      to="/"
      class="text-lg my-4 transition ease-in-out delay-100 duration-300 font-light"
    >
      Klik Hier Om Te Reserveren
    </UButton>
    <UDivider
      class="pb-8"
      :avatar="{ src: 'logo-white.png', size: 'sm' }"
      :ui="{ border: { base: 'dark:border-white-100' } }"
    />
  </UContainer>
</template>

<script lang="ts" setup></script>

<style></style>
