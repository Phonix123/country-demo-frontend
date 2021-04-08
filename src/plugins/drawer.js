import Vue from "vue";

var drawer = {
  drawers: ["Default (no property)", "Permanent", "Temporary"],
  primaryDrawer: {
    model: null,
    type: "default (no property)",
    clipped: true,
    floating: false,
    mini: false
  },
  footer: {
    inset: false
  }
};

Vue.prototype.$drawer2 = drawer;
