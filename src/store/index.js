import Vue from "vue";
import Vuex from "vuex";
import "@mdi/font/css/materialdesignicons.css";
import Axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, Axios);

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
    },
    products: []
  },

  getters: {
    products: state => {
      return state.products;
    }
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },

  actions: {
    loadProducts({ commit }) {
      const url = "http://localhost:8000/products/";
      Axios.get(url).then(product => {
        commit("SET_PRODUCTS", product.data);
      });
    }
  },

  modules: {}
});
