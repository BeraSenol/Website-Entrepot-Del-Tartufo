export default defineEventHandler(async (event) => {
  return {
    header: "MENU @ CASA",
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
  };
});
