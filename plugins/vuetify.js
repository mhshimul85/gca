// import Vue from "vue";
// import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    // icons: {
    //   iconfont: "mdiSvg",
    // },
  });
  nuxtApp.vueApp.use(vuetify);
});
