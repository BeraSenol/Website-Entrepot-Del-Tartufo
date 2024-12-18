export default defineEventHandler(async (event) => {
  return {
    anti_pasti: {
      header: "ANTI PASTI",
      subheader: null,
      items: [
        {
          name: "Vitello Tonnato",
          description: "Kalfsvlees | Tonijnmayo",
          price: 18.5,
          double: false,
        },
        {
          name: "Carpaccio di Manzo | Tartufo Estivo",
          description: "Rundscarpaccio | Zomer Truffel",
          price: 29,
          double: false,
        },
        {
          name: "Melanzane | Parmigiana",
          description: "Aubergine | Parmezaan",
          price: 17,
          double: false,
        },
        {
          name: "Moscardini | Aglio | Olio | Peperoncini",
          description: "Octopusjes | Pikant",
          price: 19.5,
          double: false,
        },
      ],
    },
    primi_piatti: {
      header: "PRIMI PIATTI",
      subheader: null,
      items: [
        {
          name: "Gramigna | Modenese",
          description: "Gramigna | Venkelworst",
          price: 17,
          double: false,
        },
        {
          name: "Papardelle | Ragu Vitello",
          description: "Papardelle | Kalfsragout",
          price: 19.5,
          double: false,
        },
        {
          name: "Tagliolini | Tartufo Estivo",
          description: "Tagliolini | Zomer Truffel",
          price: 29,
          double: false,
        },
        {
          name: "Linguine | Nero di Seppia | Seppioline",
          description: "Linguine | Inkt | Inktvis",
          price: 21,
          double: false,
        },
      ],
    },
    secondi_pesce: {
      header: "SECONDI",
      subheader: "PESCE",
      items: [
        {
          name: "Branzino | Ligure |",
          description: "Zeebaars | Puntpaprika | Olijf | Kapper",
          price: 75,
          double: true,
        },
        {
          name: "Orata | Soto Sale |",
          description: "Dorade | Zoutkorst",
          price: 80,
          double: true,
        },
        {
          name: "Rana Pescatrice | Pepe Verde",
          description: "Zeeduivel | Groene Peper",
          price: 37,
          double: false,
        },
        {
          name: "Pesce Misto | Griglia | Salsa Verde |",
          description: "Mix Gegrilde Vis",
          price: 80,
          double: true,
        },
      ],
    },
    secondi_carne: {
      header: "SECONDI",
      subheader: "CARNE",
      items: [
        {
          name: "Tagliata | Toscana",
          description: "Entrecôte | Rucola | Parmezaan",
          price: 37,
        },
        {
          name: "Filetto di Manzo | Rossini",
          description: "Rundsfiles | Foie Gras | Truffel",
          price: 47,
        },
        {
          name: "Carree di Agnello | Pesto",
          description: "Lamskroon | Pesto",
          price: 39,
        },
        {
          name: "Saltimbocca | Romana",
          description: "Kalfslapje | Parma | Salie",
          price: 35,
        },
      ],
    },
  };
});
