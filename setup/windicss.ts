import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";
import { transform } from "windicss/helpers";
import daisyColors from "daisyui/colors/index.js";

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
    themes: ["valentine", "cyberpunk"],
  },
  plugins: [transform("@tailwindcss/typography"), transform("daisyui")],
}));
