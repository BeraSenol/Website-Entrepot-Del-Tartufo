<template>
  <UContainer class="max-w-6xl py-6">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Naam" name="name" required size="xl">
        <UInput
          v-model="state.name"
          placeholder="Voor- & achternaam"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup label="Email" name="email" required size="xl">
        <UInput
          v-model="state.email"
          placeholder="voorbeeld@domein.be"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup name="phone" label="Telefoon" required size="xl">
        <UInput
          v-model="state.phone"
          placeholder="0497 12 34 56"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup name="address" label="Adres" required size="xl">
        <UTextarea
          v-model="state.address"
          placeholder="Straatnaam, nummer & toevoeging"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup name="guest-count" label="Gasten" required size="xl">
        <UInput
          v-model="state.guestCount"
          placeholder="Aantal"
          type="number"
          min="1"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup name="day" label="Datum" required size="xl">
        <UInput
          v-model="state.day"
          placeholder="DD-MM-JJJJ"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>

      <UButton
        type="submit"
        class="text-md transition ease-in-out delay-100 duration-300 font-light"
        variant="ghost"
      >
        Verzenden
      </UButton>
    </UForm>
    <UDivider
      class="pt-10"
      :avatar="{ src: 'logo-white.png', size: 'sm' }"
      :ui="{ border: { base: 'dark:border-white-100' } }"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { number, object, string, date, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Ongeldig Email Adres").required("Verplicht!"),
  name: string().required("Verplicht!"),
  phone: string().required("Verplicht!"),
  address: string().required("Verplicht!"),
  guestCount: number().required("Verplicht!"),
  day: date().required("Verplicht!"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  name: undefined,
  phone: undefined,
  address: undefined,
  guestCount: undefined,
  day: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>
