import { defineAppSetup } from "@slidev/types";
import themePlugin from "../plugins/theme";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $themeData: string;
    $themes: string[];
    $setThemeData: (value: string) => void;
    $slidev: {
      nav: {
        currentLayout: string;
        currentPage: number;
        total: number;
        clicks: number;
        go: (n: number) => void;
        next: () => void;
        nextSlide: () => void;
      };
    };
  }
}

export default defineAppSetup(({ app, router }) => {
  app.use(themePlugin);
});
