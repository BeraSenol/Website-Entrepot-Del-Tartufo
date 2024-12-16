import { defineAppConfig } from "nuxt/app";

export default defineAppConfig({
  ui: {
    primary: "white",
    gray: "neutral",
    button: {
      default: {
        size: "xl",
        variant: "soft",
      },
    },
  },
});
