<template>
  <UContainer
    class="place-items-center rounded-lg mt-8 text-center sm:max-xl:mx-6"
  >
    <p class="text-3xl pb-1 pt-8 italic">CONTACT</p>
    <p class="text-lg py-4 px-4 md:px-16 text-left">
      Entrepot del Tartufo ligt in hartje Hasselt, op slechts enkele meters van
      het <span class="font-bold">Dusartplein</span> en de
      <span class="font-bold">Zuivelmarkt</span>! Parking Dusartplein en parking
      TT bevinden zich op 5m wandelafstand.
    </p>
  </UContainer>
  <UContainer class="max-w-md pt-4">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Naam" name="name" required>
        <UInput
          v-model="state.name"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup
        label="Email"
        name="email"
        placeholder="you@example.com"
        required
      >
        <UInput
          v-model="state.email"
          :ui="{
            color: {
              white: {
                outline: 'text-white dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup name="textarea" label="Opmerking" required>
        <UTextarea
          v-model="state.textarea"
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
        variant="link"
        :ui="{
          color: {
            primary: {
              solid: 'text-white dark:text-white',
            },
          },
        }"
      >
        Verzend
      </UButton>
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  name: string().required("Required"),
  textarea: string(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  name: undefined,
  textarea: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<style></style>
