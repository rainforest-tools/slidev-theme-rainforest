import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";
import { transform } from "windicss/helpers";
// @ts-ignore
import daisyColors from "daisyui/colors/index.js";
import themes from "../themes.json";
export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "../**/*.{vue,ts}")],
  },
  theme: {
    extend: {
      colors: {
        ...daisyColors,
      },
    },
  },
  shortcuts: {},
  daisyui: {
    themes,
  },
  plugins: [transform("@tailwindcss/typography"), transform("daisyui")],
}));
