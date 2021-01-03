<template>
  <div>
    <Products_NavComponent />
    <Products_TableComponent />
  </div>
</template>
<script>
import Axios from "axios";
import Products_NavComponent from "../components/Products/Products_Nav.vue";
import Products_TableComponent from "../components/Products/Products_Table.vue";

export default {
  name: "Products",

  components: {
    Products_NavComponent,
    Products_TableComponent
  },

  data() {
    return {
      products: []
    };
  },

  mounted() {
    const url = "http://localhost:8000/products/";

    Axios.get(url)
      .then(response => {
        this.products = response.data;
      })
      .catch(err => console.log(err));
  }
};
</script>
