<template>
    <div class="flex flex-col lg:flex-row">
        <NuxtImg class="hidden lg:block xl:hidden rounded-l-xl" src="about_us/outside.jpg" height="2400" width="1350"
            alt="bar.jpg" />
        <NuxtImg class="hidden xl:block rounded-l-xl" src="about_us/outside.jpg" height="1800" width="1350"
            alt="bar.jpg" />
        <UContainer
            class="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-t-xl xl:rounded-r-xl xl:rounded-tl-none border-2 flex flex-col justify-evenly py-12">
            <TitleLarge title="DEN ENTREPOT" />
            <UContainer class="flex flex-col text-left gap-y-8 pb-12 u-leading">
                <p>
                    <span class="font-bold">Hasselt</span> heeft een rijke geschiedenis en
                    achter de gevel van elk huis en elk gebouw schuilt een verhaal… En waar
                    past het karaktervolle gebouw Den Entrepot ergens in deze historie?
                </p>
                <p>
                    Om dit te weten moeten wij ons verplaatsen naar de vlakbij gelegen
                    <span class="font-bold">Zuivelmarkt</span>. Huisnummer zeven werd
                    halverwege de 19e eeuw gekocht door de familie Erckens die er een
                    vishandel begon. Getuige hiervan een oude advertentie met als tekst: “Huis
                    gesticht in 1850. Alle dagen versche visch, kreeften, oesters enz…” In
                    1926 werd de woning eigendom van familie Hayen die de vishandel verder
                    uitbaatten.
                </p>
            </UContainer>
            <div class="text-center italic">
                <p class="text-sm md:text-base">En zo is de cirkel rond:</p>
                <p class="text-sm md:text-base">De Entrepot del Tartufo is geboren!</p>
                <p class="text-sm md:text-base">L'entrepot del Tartufo e nato!</p>
                <p class="text-sm md:text-base">Benvenuti! Welkom!</p>
            </div>
        </UContainer>
        <NuxtImg class="lg:hidden rounded-b-xl" src="about_us/outside.jpg" width="772" height="579" alt="bar.jpg" />
    </div>
</template>
