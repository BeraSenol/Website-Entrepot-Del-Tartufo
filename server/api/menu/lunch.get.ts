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
    carne: {
      header: "CARNE",
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
          vegetarian: false,
          double: false,
        },
      ],
    },
  };
});
