import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import App from "./App.vue";

Vue.config.productionTip = false;

const routes = [
  {
    path: "/scroll-anim",
    name: "anim",
    component: () => import("./page/scroll"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
