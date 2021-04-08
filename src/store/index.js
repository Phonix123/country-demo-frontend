import Vue from "vue";
import Vuex from "vuex";

import visualMeta from "./modules/meta";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    primaryDrawer: {
      model: null,
      type: "default",
      clipped: true,
      floating: false,
      mini: true
    }
  },
  mutations: {},
  actions: {},
  modules: { visualMeta }
});
