<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Naam" name="name" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.name" placeholder="Voor- & achternaam" />
    </UFormGroup>
    <UFormGroup label="Email" name="email" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.email" placeholder="voorbeeld@domein.be" />
    </UFormGroup>
    <UFormGroup name="phone" label="Telefoon" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.phone" placeholder="0497 12 34 56" />
    </UFormGroup>
    <UFormGroup name="address" label="Adres" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UTextarea v-model="state.address" placeholder="Straatnaam, nummer & toevoeging" />
    </UFormGroup>
    <UFormGroup name="guest-count" label="Gasten" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.guestCount" placeholder="Aantal" type="number" min="1" />
    </UFormGroup>
    <UFormGroup name="day" label="Datum" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.day" placeholder="DD-MM-JJJJ" />
    </UFormGroup>
    <UButton type="submit" class="bg-gray-200 dark:bg-gray-800 user-button">
      Verzend
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { number, object, string, date, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { reactive } from "vue";

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
  console.log(event.data);
}
</script>
