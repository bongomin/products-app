<template>
  <div>
    Products
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "Products",

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
