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
  shortcuts: {
    // custom the default background
    // "bg-main": "bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])",
  },
  daisyui: {
    themes,
  },
  plugins: [transform("@tailwindcss/typography"), transform("daisyui")],
}));
