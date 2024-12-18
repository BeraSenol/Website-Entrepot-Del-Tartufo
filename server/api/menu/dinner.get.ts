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
          vegetarian: false,
          double: false,
        },
        {
          name: "Carpaccio di Manzo | Tartufo Estivo",
          description: "Rundscarpaccio | Zomer Truffel",
          price: 29,
          vegetarian: false,

          double: false,
        },
        {
          name: "Melanzane | Parmigiana",
          description: "Aubergine | Parmezaan",
          price: 17,
          vegetarian: true,
          double: false,
        },
        {
          name: "Moscardini | Aglio | Olio | Peperoncini",
          description: "Octopusjes | Pikant",
          price: 19.5,
          vegetarian: false,
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
          vegetarian: false,
          double: false,
        },
        {
          name: "Papardelle | Ragu Vitello",
          description: "Papardelle | Kalfsragout",
          price: 19.5,
          vegetarian: false,
          double: false,
        },
        {
          name: "Tagliolini | Tartufo Estivo",
          description: "Tagliolini | Zomer Truffel",
          price: 29,
          vegetarian: true,
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
          vegetarian: false,
          double: true,
        },
        {
          name: "Orata | Soto Sale |",
          description: "Dorade | Zoutkorst",
          price: 80,
          vegetarian: false,
          double: true,
        },
        {
          name: "Rana Pescatrice | Pepe Verde",
          description: "Zeeduivel | Groene Peper",
          price: 37,
          vegetarian: false,
          double: false,
        },
        {
          name: "Pesce Misto | Griglia | Salsa Verde",
          description: "Mix Gegrilde Vis",
          price: 80,
          vegetarian: true,
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
          vegetarian: false,
          double: true,
        },
        {
          name: "Filetto di Manzo | Rossini",
          description: "Rundsfiles | Foie Gras | Truffel",
          price: 47,
          vegetarian: false,
          double: true,
        },
        {
          name: "Carree di Agnello | Pesto",
          description: "Lamskroon | Pesto",
          price: 39,
          vegetarian: false,
          double: true,
        },
        {
          name: "Saltimbocca | Romana",
          description: "Kalfslapje | Parma | Salie",
          price: 35,
          vegetarian: false,
          double: true,
        },
      ],
    },
  };
});
