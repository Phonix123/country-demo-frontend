import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0098A6",
        secondary: "#00708C",
        accent: "#82B1FF",
        error: "#EF0137",
        info: "#0087BE",
        success: "#00AF8E",
        warning: "#EC6602 "
      },
    },
    options: { variations: false }
  }
});
