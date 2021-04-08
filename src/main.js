import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import moment from "moment";
import DatetimePicker from "vuetify-datetime-picker";
import VueScrollProgressBar from "@guillaumebriday/vue-scroll-progress-bar";

Vue.config.productionTip = false;
Vue.config.performance = true;

Vue.prototype.$moment = moment;
Vue.use(DatetimePicker);
Vue.use(VueScrollProgressBar);

Vue.mixin({
  data: () => ({}),
  methods: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    getNavigationMeta() {
      return this.$store.getters.getNavigationMeta;
    },
    getUser() {
      return this.$store.getters.getUserMeta;
    },
    routeTo(destination) {
      this.$router.push({ path: destination }).catch(err => {
        err.name === "NavigationDuplicated"
          ? console.info("View already loaded")
          : console.error(err);
      });
    },
    routeToWithParam(prefix, destination, parameter) {
      this.$store.commit("setNavigationMeta", parameter);
      destination = prefix.toLowerCase().replace(/ /g, "") + destination;
      this.routeTo(destination);
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
