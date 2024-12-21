<template>
  <UForm :schema="schema" :state="state" class="space-y-8" name="contact-form" @submit="onSubmit">
    <UFormGroup label="Naam" name="name" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.name" type="text" placeholder="Voor- & achternaam" />
    </UFormGroup>
    <UFormGroup label="Email" name="email" placeholder="you@example.com" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UInput v-model="state.email" name="email" type="email" placeholder="voorbeeld@domein.be" />

    </UFormGroup>
    <UFormGroup name="textarea" label="Opmerking" required size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UTextarea :rows="5" autoresize v-model="state.textarea" placeholder="Bijkomende vraag, opmerking, etc." />
    </UFormGroup>
    <UButton type="submit" class="u-border-gray-200 u-bg-gray-100 px-12 u-button">
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
  console.log(event.data)
}
</script>
