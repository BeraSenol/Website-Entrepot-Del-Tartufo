<template>
  <div class="bg-slate-950">
    <UContainer class="flex text-center justify-center flex-col md:flex-row max-w-7xl">
      <div class="sm:max-md:mt-4 my-4 basis-1/3">
        <p class="text-2xl font-bold mb-0 mt-4 md:my-4">ENTREPOT DEL TARTUFO</p>

        <p class="mt-2 m-4 italic font-light">Italian food with a touch of truffle</p>
        <UContainer class="flex justify-center">
          <div>
                
                <a href="https://www.facebook.com/share/k9shNpfCWvVqujP6/" target="_blank" >
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                  fill="currentColor"
                > </path>
              </svg>
            </a href="">
          </div>
          <div class="mx-1">
            <a
              href="https://www.instagram.com/entrepotdeltartufo" target="_blank"
            >
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </a>
          </div>
        </UContainer>
      </div>
      <div class="sm:max-md:mt-4 my-4 basis-1/3">
        <p class="text-2xl font-bold my-4">CONTACT</p>
        <a href="https://maps.app.goo.gl/i2vfzT5QpC8Rm1QT8" target="_blank" class="hover:text-primary-400 transition ease-in-out delay-100 duration-300"> Hemelrijk 22 / 3500 Hasselt</a>  <br />
        <a href="tel:0472930869" class="hover:text-primary-400 transition ease-in-out delay-100 duration-300">0472 93 08 69</a> <br />
        <a href="mailto:info@entrepotdeltartufo.com" class="hover:text-primary-400 transition ease-in-out delay-100 duration-300">info@entrepotdeltartufo.com </a>
        <p>BTW: OD BV BE0734.961.476 </p>
      </div>
      <div class="sm:max-md:mt-4 my-4 basis-1/3">
        <p class="text-2xl font-bold my-4">OPENINGSUREN</p>
        <UContainer class="grid grid-cols-2 gap-x-10 gap-y-1">
                
                <div class="text-right"> MA / DO / VR</div>

                <div class="text-left gap-y-0"> 12h - 14h <br> 18h - 22h</div>
                <div class="text-right"> ZA / ZO</div>

                <div class="text-left"> 18h - 22h </div>

                <div class="text-right"> DI / WO</div>

                <div class="text-left"> Gesloten</div>
        </UContainer>
         
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts">
export default {
  name: "MdiFacebookBox, MdiInstagram",
};
</script>
