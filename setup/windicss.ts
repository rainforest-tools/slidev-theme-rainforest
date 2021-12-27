import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";
import { transform } from "windicss/helpers";
// @ts-ignore
import daisyColors from "daisyui/colors/index.js";
import themes from "../themes.json";

function range(size: number, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "../**/*.{vue,ts}")],
  },
  safelist: [
    range(6).map((i) => `grid-cols-${i}`),
    range(3).map((i) => `grid-rows-${i}`),
    range(6).map((i) => `col-span-${i}`),
    range(3).map((i) => `row-span-${i}`),
  ],
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
