import Layout from "./Layout.vue";
import DefaultTheme from "vitepress/theme"; //viteperss的主题

export default {
  ...DefaultTheme,
  Layout,
  NotFound: () => "custom 404",
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    // extend default theme custom behaviour.
  },

  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  },
};
