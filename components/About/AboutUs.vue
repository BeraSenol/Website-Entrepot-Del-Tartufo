<template>
  <div class="flex flex-col lg:flex-row">
    <UContainer
      class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 flex flex-col justify-evenly rounded-t-xl xl:rounded-l-xl xl:rounded-tr-none border-2 py-12">
      <TitleLarge title="OVER ONS" />
      <UContainer class="flex flex-col md:px-6 text-left gap-y-8 pb-12 .user-leading-8">
        <p>
          Restaurant Entrepot del Tartufo brengt de puurheid van de Italiaanse keuken naar hartje Hasselt. Nicolino
          Salvatore, alom gewaardeerd als chef van de vroegere Mario's Trattoria bereidt klassieke en minder klassieke
          Italiaanse gerechten met een touch of truffle.
        </p>
        <p>
          Olivier laat u vervolgens een keuze maken tussen steengoede
          Italiaanse- & wereldwijnen. Na het tafelen, kan u digestieven met een
          heerlijke grappa of limoncello. Het restaurant is gelegen in een charmant
          oud pakhuis in het rustige hemelrijk. Kortom, bij ons gaat het om lekker
          eten in een ongestoorde gezellige sfeer. Onder het motto
        </p>
      </UContainer>
      <div class="text-center italic">
        <p class="text-sm md:text-base">Eenvoud is de ultieme verfijning</p>
        <p class="text-sm md:text-base">La semplicità è l'ultima sofisticazione</p>
        <p class="text-sm md:text-base">Simplicity is the ultimate sophistication</p>
      </div>
    </UContainer>
    <div>
      <NuxtImg class="rounded-b-xl lg:hidden" fit="cover" src="about_us/bar.jpg" width="772" height="579" alt="bar.jpg"
        densities="x1 x2" />
      <NuxtImg class="rounded-r-xl hidden lg:block xl:hidden" fit="cover" src="about_us/bar.jpg" height="2300"
        width="1350" alt="bar.jpg" densities="x1 x2" />
      <NuxtImg class="rounded-r-xl hidden xl:block" fit="cover" src="about_us/bar.jpg" height="1800" width="1350"
        alt="bar.jpg" densities="x1 x2" />
    </div>
  </div>
</template>
