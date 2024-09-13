<template>
  <div class="place-items-center rounded-lg text-center">
    <div
      class="bg-fixed bg-center min-h-screen min-w-prose"
      style="background-image: url(landing-image-index.jpg)"
    ></div>

    <p class="text-lg py-8 pt-12 px-16 bg-slate-50 text-slate-950">
      <NuxtImg
        src="logo.jpg"
        width="300"
        class="justify-self-center mx-auto pb-8"
      />
      Van harte welkom op onze website! Restaurant Entrepot del Tartufo is
      gevestigd in een oude opslagplaats in het gezellige hemelrijk straatje te
      Hasselt.<br />
      In een ongedwongen sfeer kan u genieten van de puurheid van de Italiaanse
      keuken met een touch of truffle in combinatie met steengoede wijnen.
    </p>
    <p class="text-3xl pt-8 italic">Lunch @ Entrepot</p>
    <p class="text-lg pt-4 px-16">
      Kom genieten van onze heerlijke lunch! Lunchmenu varieert van week tot
      week. <br />
      Maandag | Donderdag | Vrijdag <br />
      2 Gangen €30 <br />
      3 Gangen €40 <br />
    </p>
    <UButton
      size="sm"
      variant="ghost"
      to="/"
      class="text-lg my-4 transition ease-in-out delay-100 duration-300"
    >
      Klik Hier Om Te Reserveren
    </UButton>
    <p class="text-3xl pb-4 py-8 italic">Parmezaanbus @ CASA</p>
    <p class="text-lg px-16">
      De Parmezaanbus brengt de restaurant-experience bij jouw thuis.
      <br />Naast gerechten die op te warmen zijn bereiden wij op jouw oprit à
      la minute Tagliolini al Tartufo - pasta gedraaid in een grote Parmzaanse
      kaas afgetopt met verse geraspte truffel. <br />Donderdag t.e.m. maandag |
      Regio Hasselt | Levering en bereiding duurt 30m tussen 18h - 20h | vanaf
      6pers
    </p>
    <UButton
      size="xl"
      variant="ghost"
      to="parmezaan-bus"
      class="text-lg my-4 transition ease-in-out delay-100 duration-300"
    >
      Reserveer De Parmezaanbus
    </UButton>
    <br />
    <br />

    <div class="bg-slate-50 text-slate-950">
      <p class="text-3xl pb-4 py-8 italic">Get In Touch</p>
      <p class="text-lg pb-8">
        Heeft u nog verdere vragen? <br />
        Aarzel niet om contact op te nemen:
        <a href="mailto:info@entrepotdeltartufo.com">
          <UButton size="xl" variant="link" class="text-lg px-1">
            info@entrepotdeltartufo.com
          </UButton>
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
