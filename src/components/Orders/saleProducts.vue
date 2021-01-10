<template>
  <div class="card">
    <h5 class="card-title m-2 p-4">
      <i class="mdi mdi-google-circles-group"></i>
      Sale Product
    </h5>
    <div class="card-body">
      <div class="saleProductsForm">
        <form>
          <div class="form-group">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Name"
                v-model.trim="productName"
              />
              <div class="error">{{ errorMessage }}</div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Category"
              v-model="productCategory"
              disabled
            />
          </div>
          <div class="form-group">
            <select class="custom-select">
              <option selected>Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="quantity"
                v-model.number="productQuantity"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Price"
                v-model="priceTotal"
              />
            </div>
          </div>
          <button
            type="button"
            class="btn btn-sm btn-primary mt-3 m-2"
            v-on:click="soldProducts"
          >
            Sale
          </button>
          <button
            type="button"
            class="btn btn-sm btn-warning mt-3 m-2"
            v-on:click="addToCard"
          >
            Added To Cart
            <span class="badge badge-light">{{ productsCard.length }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "saleProducts",
  data() {
    return {
      productsCard: [],
      productName: "",
      productCategory: "",
      productQuantity: "",
      priceTotal: "",
      errorMessage: ""
    };
  },

  computed: {
    ...mapState({
      Sales: state => {
        return state.productSales;
      }
    })
  },

  methods: {
    soldProducts() {
      this.dataValidation();
      let sold = {
        productName: this.productName,
        productCategory: this.productCategory,
        productQuantity: this.productQuantity,
        priceTotal: this.priceTotal
      };
      console.log(sold);
    },

    addToCard() {
      if (this.productName == "") {
        this.errorMessage = "Product Name required";
        return false;
      }
      let addedProduct = {
        productName: this.productName,
        productQuantity: this.productQuantity,
        priceTotal: this.priceTotal
      };
      let productItem = this.productsCard.push(addedProduct);
      this.$emit("addItem", productItem);
    },

    deleteItem(id) {
      this.productsCard.pop(id);
    }
  }
};
</script>
<style scoped>
.card-title {
  border-bottom: 1px solid #7411f6;
  padding: 10px !important;
}
.list {
  padding: 5px;
  margin: 1px;
  background: #7411f6;
  color: white;
}
.error {
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.listIcon {
  color: white;
  margin: 1px;
}
.CloseIcon {
  color: white;
  margin-left: 300px;
}

.CloseIcon:hover {
  cursor: pointer;
}
</style>
