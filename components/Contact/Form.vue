<template>
  <UContainer class="max-w-6xl py-8">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Naam" name="name" required size="xl">
        <UInput
          v-model="state.name"
          :ui="{
            color: {
              white: {
                outline: 'text-white-50 dark:text-white-50',
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
        size="xl"
      >
        <UInput
          v-model="state.email"
          :ui="{
            color: {
              white: {
                outline: 'text-white-50 dark:text-white-50',
              },
            },
          }"
        />
      </UFormGroup>
      <UFormGroup name="textarea" label="Opmerking" required size="xl">
        <UTextarea
          :rows="5"
          autoresize
          size="lg"
          v-model="state.textarea"
          :ui="{
            color: {
              white: {
                outline: 'text-white-50 dark:text-white-50',
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
        Verzend
      </UButton>
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Invalid email").required("Verplicht!"),
  name: string().required("Verplicht!"),
  textarea: string().required("Verplicht!"),
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
