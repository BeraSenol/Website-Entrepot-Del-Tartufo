<template>
  <UForm class="space-y-4" data-netlify="true" netlify :schema="schema" :state="state" @submit="onSubmit">
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
      <UInput v-model="state.phone" placeholder="04XX/XX XX XX" />
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
    <UFormGroup name="textarea" label="Opmerking" size="xl" :ui="{
      label: {
        base: 'text-lg',
      },
    }">
      <UTextarea :rows="5" autoresize v-model="state.textarea" placeholder="Reservering, vraag, commentaar, etc." />
    </UFormGroup>
    <UButton type="submit" class="u-border-gray-200 u-bg-gray-100 u-button">
      Verzend
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { number, object, string, date, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { reactive } from "vue";

const schema = object({
  name: string().required("Verplicht!"),
  email: string().email("Ongeldig Email Adres").required("Verplicht!"),
  phone: string().required("Verplicht!"),
  address: string().required("Verplicht!"),
  guestCount: number().positive().integer().required("Verplicht!"),
  day: date().min(new Date()).required("Verplicht!"),
  textarea: string().nullable(),
  formSubmittedOn: date().default(() => new Date())
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  name: undefined,
  phone: undefined,
  address: undefined,
  guestCount: undefined,
  day: undefined,
  textarea: undefined,
  formSubmittedOn: undefined
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
}
</script>
