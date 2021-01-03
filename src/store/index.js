import Vue from "vue";
import Vuex from "vuex";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: true,
    productSales: {
      productName: "",
      productCategory: "",
      productType: "",
      productQuantity: "",
      ProductPrice: "",
      TotalPrice: 0
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
