export default defineEventHandler((event) => {
  return {
    lunch: {
      pesce: {
        header: "PESCE",
        subheader: null,
        items: [
          {
            name: "Vitello Tonnato",
            description: "Kalfsvlees | Tonijnmayo",
            price: 18.5,
          },
          {
            name: "Carpaccio di Manzo | Tartufo Estivo",
            description: "Rundscarpaccio | Truffel",
            price: 29,
          },
          {
            name: "Melanzane | Parmigiana",
            description: "Aubergine | Parmezaan",
            price: 17,
          },
          {
            name: "Moscardini | Aglio | Olio | Peperoncini",
            description: "Octopusjes | Pikant",
            price: 19.5,
          },
        ],
      },
      carne: {
        header: "CARNE",
        subheader: null,
        items: [
          {
            name: "Gramigna | Modenese",
            description: "Gramigna | Venkelworst",
            price: 17,
          },
          {
            name: "Papardelle | Ragu Vitello",
            description: "Papardelle | Kalfsragout",
            price: 19.5,
          },
          {
            name: "Tagliolini | Tartufo Estivo",
            description: "Tagliolini | Zomer Truffel",
            price: 29,
          },
          {
            name: "Linguine | Nero di Seppia | Seppioline",
            description: "Linguine | Inkt | Inktvis",
            price: 21,
          },
        ],
      },
    },
    dinner: {
      anti_pasti: {
        header: "ANTI PASTI",
        subheader: null,
        items: [
          {
            name: "Vitello Tonnato",
            description: "Kalfsvlees | Tonijnmayo",
            price: 18.5,
          },
          {
            name: "Carpaccio di Manzo | Tartufo Estivo",
            description: "Rundscarpaccio | Zomer Truffel",
            price: 29,
          },
          {
            name: "Melanzane | Parmigiana",
            description: "Aubergine | Parmezaan",
            price: 17,
          },
          {
            name: "Moscardini | Aglio | Olio | Peperoncini",
            description: "Octopusjes | Pikant",
            price: 19.5,
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
          },
          {
            name: "Papardelle | Ragu Vitello",
            description: "Papardelle | Kalfsragout",
            price: 19.5,
          },
          {
            name: "Tagliolini | Tartufo Estivo",
            description: "Tagliolini | Zomer Truffel",
            price: 29,
          },
          {
            name: "Linguine | Nero di Seppia | Seppioline",
            description: "Linguine | Inkt | Inktvis",
            price: 21,
          },
        ],
      },
      secondi_pesce: {
        header: "SECONDI",
        subheader: "PESCE",
        items: [
          {
            name: "Branzino | Ligure | 2 Pers",
            description: "Zeebaars | Puntpaprika | Olijf | Kapper",
            price: 75,
          },
          {
            name: "Orata | Soto Sale | 2 Pers",
            description: "Dorade | Zoutkorst",
            price: 80,
          },
          {
            name: "Rana Pescatrice | Pepe Verde",
            description: "Zeeduivel | Groene Peper",
            price: 37,
          },
          {
            name: "Pesce Misto | Griglia | Salsa Verde | 2 Pers",
            description: "Mix Gegrilde Vis",
            price: 80,
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
            description: "Kalfslapie | Parma | Salie",
            price: 35,
          },
        ],
      },
    },
  };
});
