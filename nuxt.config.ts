// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  mode: "universal",
  css: [
    "@mdi/font/css/materialdesignicons.css",
    "bootstrap/dist/css/bootstrap.min.css",
  ],
  script: [
    {
      src: "bootstrap/dist/js/bootstrap.bundle.min.js",
    },
  ],
  head() {
    return {
      title: "GCABD | Global Community Aid",
      link: {
        rel: "icon",
        type: "image/png",
        href: "/src/assets/images/favicon-32x32.png",
      },
      script: [
        {
          src: "/src/assets/js/bootstrap.bundle.min.js",
        },
      ],
    };
  },
  build: {
    transpile: ["vuetify", "bootstrap"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
