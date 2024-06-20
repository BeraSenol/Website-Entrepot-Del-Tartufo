<template>
  <UContainer
    class="place-items-center rounded-lg mt-8 text-center sm:max-xl:mx-6"
  >
    <p class="text-3xl pb-1 pt-8 italic">PARMEZAANBUS</p>
    <p class="text-lg py-4 px-4 md:px-16 text-left">
      De Parmezaanbus brengt de restaurant-experience bij jouw thuis. De
      Parmezaanbus is enkel te reserveren in een menu-formule. Naast gerechten
      die op te warmen zijn bereiden wij op uw oprit à la minute Tagliolini al
      Tartufo - pasta gedraaid in een grote Parmzaanse kaas afgetopt met verse
      geraspte truffel.
    </p>
    <p class="text-lg py-4 px-4 md:px-16 text-left">
      Enkel op aanvraag | Donderdag t.e.m. maandag | Regio Hasselt | Levering en
      bereiding duurt 30min. tussen 18h en 20h | 1 Menu | vanaf 6 personen | €65
      per persoon
    </p>
  </UContainer>
  <UContainer class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
    <UContainer class="w-4/5 max-w-xl mt-0 mb-8">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Naam" name="name" required size="lg">
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
        <UFormGroup label="Email" name="email" required size="lg">
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
        <UFormGroup name="phone" label="Telefoon" required size="lg">
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
        <UFormGroup name="address" label="Adres" required size="lg">
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
        <UFormGroup name="guest-count" label="Gasten" required size="lg">
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
        <UFormGroup name="day" label="Datum" required size="lg">
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
          class="pl-2 dark:text-black-100"
          variant="link"
          :ui="{
            color: {
              primary: {
                solid: 'text-white dark:text-white',
              },
            },
          }"
        >
          Verzenden
        </UButton>
      </UForm>
    </UContainer>
    <UCard class="max-w-xl max-h-72">
      <template #header>
        <p class="text-center text-xl font-bold tracking-wider">
          MENU ENTREPOT
        </p>
      </template>
      <template v-for="parmezanBusItem in parmezanBusMenuItems">
        <UContainer class="text-center mt-0 mb-6">
          <p class="font-light italic">{{ parmezanBusItem.title }}</p>
        </UContainer>
      </template>
    </UCard>
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

const parmezanBusMenuItems = [
  {
    title: "Vitello Tonnato",
  },
  {
    title: "Tagliolini | Tartufo Estivo",
  },
  {
    title: "Arrosto di Vitello",
  },
  {
    title: "Crème Caramel",
  },
];
</script>

<style></style>
