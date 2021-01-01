import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../Pages/Home.vue";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/main",
    name: "Main",
    component: Main
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
