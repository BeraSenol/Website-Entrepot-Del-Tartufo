<template>
  <div>
    <UForm :schema="schema" :state="state" class="space-y-8" @submit="onSubmit">
      <UFormGroup label="Naam" name="name" required size="xl" :ui="{
        label: {
          base: 'text-lg',
        },
      }">
        <UInput v-model="state.name" />
      </UFormGroup>
      <UFormGroup label="Email" name="email" placeholder="you@example.com" required size="xl" :ui="{
        label: {
          base: 'text-lg',
        },
      }">
        <UInput v-model="state.email" />
      </UFormGroup>
      <UFormGroup name="textarea" label="Opmerking" required size="xl" :ui="{
        label: {
          base: 'text-lg',
        },
      }">
        <UTextarea :rows="5" autoresize size="lg" v-model="state.textarea" />
      </UFormGroup>
      <UButton type="submit" class="bg-gray-200 dark:bg-gray-800 text-xl px-5">
        Verzend
      </UButton>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { reactive } from "vue";

const schema = object({
  email: string().email("Ongeldige Email").required("Verplicht!"),
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
  console.log(event.data);
}
</script>
