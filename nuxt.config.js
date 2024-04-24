import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - plexicus",
    title: "plexicus",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/fonts.scss", "@/assets/scss/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/api",
    "@/plugins/axios",

    {
      src: "@/plugins/vue-apex-chart",
      ssr: false,
      mode: "client",
    },
    {
      src: "@/plugins/vue-carousel",
      ssr: false,
      mode: "client",
    },
    "@/plugins/init.client",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/dayjs",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["@/assets/scss/variables.scss"],
    treeShake: true,
    theme: {
      light: true,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: {
            base: "#0344DC",
            lighten4: "#3C76EA",
            lighten3: "#6398F4",
            lighten2: "#98BFFB",
            lighten1: "#CBE0FD",
          },
          secondary: {
            base: "#F48207",
            lighten4: "#F8AA43",
            lighten3: "#FBC369",
            lighten2: "#FDDC9B",
            lighten1: "#FEF0CD",
          },
          success: {
            base: "#34A52C",
            lighten4: "#6AC95A",
            lighten3: "#96E37F",
            lighten2: "#C4F6AD",
            lighten1: "#E4FAD5",
          },
          accent: {
            base: "#338A17",
            lighten5: "#21E766",
            lighten4: "#588096",
            lighten3: "#93E088",
            lighten2: "#20C933",
            lighten1: "#E5F0F6",
          },
          info: {
            base: "#2750AE",
            lighten4: "#1283DA",
            lighten3: "#2D7FF9",
            lighten2: "#9CC7FF",
            lighten1: "#CFDFFF",
          },
          darkblue: {
            base: "#174A66",
            lighten4: "#588096",
            lighten3: "#95B8CB",
            lighten2: "#C4D8E3",
            lighten1: "#E5F0F6",
          },
          cyan: {
            base: "#0B76B7",
            lighten4: "#01A9DB",
            lighten3: "#18BFFF",
            lighten2: "#77D1F3",
            lighten1: "#D0F0FD",
          },
          teal: {
            base: "#06A09B",
            lighten4: "#02AAA4",
            lighten3: "#20D9D2",
            lighten2: "#72DDC3",
            lighten1: "#C2F5E9",
          },
          purple: {
            base: "#5F64C0",
            lighten4: "#787EFF",
            lighten3: "#9BA0FF",
            lighten2: "#CED0FF",
            lighten1: "#F1F2FF",
          },
          warning: {
            base: "#F4D610",
            lighten4: "#F8E34A",
            lighten3: "#FBED6E",
            lighten2: "#FDF59E",
            lighten1: "#FEFACE",
          },
          error: {
            base: "#9A1919",
            lighten4: "#FFEEEE",
            lighten3: "#FFC3C3",
            lighten2: "#FF6060",
            lighten1: "#EF3030",
          },
          dark: {
            base: "#333333",
            lighten4: "#757575",
            lighten3: "#C1C1C1",
            lighten2: "#EAEAEA",
            lighten1: "#F2F2F2",
          },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
