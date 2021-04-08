import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(
      "Router -> from: " +
        from +
        " to: " +
        to +
        " | savedPosition: " +
        savedPosition
    );
    return { x: 0, y: 0 };
  }
});

export default router;
