import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main/Dashboard.vue";
import OrdersPage from "../Pages/Orders.vue";
import ProductsPage from "../Pages/Products.vue";
import CustomersPage from "../Pages/Customers.vue";
import ReportsPage from "../Pages/Reports.vue";
import IntegrationsPage from "../Pages/Integrations.vue";
import LoginPage from "../components/Auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/orders",
    name: "Orders",
    component: OrdersPage
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage
  },
  {
    path: "/customers",
    name: "Customers",
    component: CustomersPage
  },
  {
    path: "/reports",
    name: "Reports",
    component: ReportsPage
  },
  {
    path: "/integrations",
    name: "Integrations",
    component: IntegrationsPage
  },
  {
    path: "/Login",
    name: "Login",
    component: LoginPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
