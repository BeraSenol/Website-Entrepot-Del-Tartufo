<template>
  <form :schema="schema" :state="state" class="space-y-8" name="contact-form" data-netlify="true"
    netlify-honeypot="bot-field">
    <!-- Netlify requires this hidden input for SSR -->
    <input type="hidden" name="form-name" value="contact" />
    <!-- Hidden anti-spam bot field -->
    <div style="display:none;">
      <label>
        Don’t fill this out: <input name="bot-field" />
      </label>
    </div>
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
    <UButton type="submit" class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 user-button">
      Verzend
    </UButton>
  </form>
</template>

<script setup lang="ts">
import { object, string } from "yup";
import { reactive } from "vue";


const schema = object({
  name: string().required("Verplicht!"),
  email: string().email("Ongeldige Email").required("Verplicht!"),
  textarea: string().required("Verplicht!"),
});


const state = reactive({
  email: String,
  name: String,
  textarea: String,
});
</script>
