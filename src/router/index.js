import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main/Dashboard.vue";
import OrdersPage from "../Pages/Orders.vue";
import ProductsPage from "../Pages/Products.vue";
import CustomersPage from "../Pages/Customers.vue";
import ReportsPage from "../Pages/Reports.vue";
import IntegrationsPage from "../Pages/Integrations.vue";
import LoginPage from "../components/Auth/Login.vue";
import StockPage from "../components/Orders/Stock.vue";
import SummaryPage from "../components/Orders/Summary.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    meta: { requireSideBar: true }
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    meta: { requireSideBar: true }
  },
  {
    path: "/orders",
    name: "Orders",
    component: OrdersPage,
    meta: { requireSideBar: true }
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsPage,
    meta: { requireSideBar: true }
  },
  {
    path: "/customers",
    name: "Customers",
    component: CustomersPage,
    meta: { requireSideBar: true }
  },
  {
    path: "/reports",
    name: "Reports",
    component: ReportsPage,
    meta: { requireSideBar: true }
  },
  {
    path: "/integrations",
    name: "Integrations",
    component: IntegrationsPage,
    meta: { requireSideBar: true }
  },
  {
    path: "/Login",
    name: "Login",
    component: LoginPage,
    meta: { requireSideBar: false }
  },
  {
    path: "/stock",
    name: "Stock",
    component: StockPage,
    meta: { requireSideBar: true }
  },
  {
    path: "/summary",
    name: "Summary",
    component: SummaryPage,
    meta: { requireSideBar: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
