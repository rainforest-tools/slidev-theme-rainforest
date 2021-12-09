import { Plugin } from "vue";
import themes from "../themes.json";
const plugin: Plugin = {
  install: (app, options) => {
    var theme = localStorage.getItem("theme");
    if (theme == null) {
      theme = themes[0];
      localStorage.setItem("theme", themes[0]);
    }
    app.config.globalProperties.$themes = themes;
    app.config.globalProperties.$themeData = theme;
    app.config.globalProperties.$setThemeData = (value: string) => {
      app.config.globalProperties.$themeData = value;
      localStorage.setItem("theme", value);
    };
    app.directive("themeDirective", {
      mounted(el, binding, vnode, oldVnode) {
        if (app.config.globalProperties.$themeData)
          document.documentElement.setAttribute(
            "data-theme",
            app.config.globalProperties.$themeData
          );
      },
    });
  },
};

export default plugin;
