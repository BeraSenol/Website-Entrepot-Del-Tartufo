export default defineEventHandler(async (event) => {
  return {
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
  };
});
