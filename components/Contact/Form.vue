<template>
  <UForm :schema="schema" :state="state" class="space-y-8" netlify>
    <UFormGroup label="Naam" name="name" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.name" type="text" />
    </UFormGroup>
    <UFormGroup label="Email" name="email" placeholder="you@example.com" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.email" name="email" type="email" />

    </UFormGroup>
    <UFormGroup name="textarea" label="Opmerking" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UTextarea :rows="5" autoresize size="lg" v-model="state.textarea" />
    </UFormGroup>
    <UButton type="submit" class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 user-button">
      Verzend
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import { reactive, ref } from "vue";
import type { FormSubmitEvent } from '#ui/types'


const schema = object({
  name: string().required("Verplicht!"),
  email: string().email("Ongeldige Email").required("Verplicht!"),
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
  console.log(event.data)
}
</script>
