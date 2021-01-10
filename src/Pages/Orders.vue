<template>
  <div>
    <OrdersNavComponent />
    <div class="row">
      <div class="col-md-6 col-sm-12 m-2">
        <div class="card">
          <h5 class="card-title sales-heading">
            <i class="mdi mdi-coffee-to-go"></i>
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
                      autofocus
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
                  class="btn btn-md btn-primary mt-3 m-2"
                  v-on:click="soldProducts"
                >
                  Sale
                </button>
                <button
                  type="button"
                  class="btn btn-md btn-warning cart mt-3 m-2"
                  @click.enter="addToCard"
                >
                  Cart
                  <span class="badge badge-light">{{
                    productsCard.length
                  }}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <salesComputations />
      </div>
      <div class="col-md-5 col-sm-5 m-2 right-col">
        <div v-if="productsCard.length">
          <ul>
            <li
              class="list"
              v-for="(product, id) in this.productsCard"
              :key="id"
            >
              <span>
                <i class="mdi mdi-chevron-double-right listIcon"></i>
                {{ product.productName }}
                <i
                  class="mdi mdi-window-close CloseIcon"
                  v-on:click="deleteItem(id)"
                ></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="empty" v-else>
          <EmptyData />
        </div>
        <EmptyDat />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import OrdersNavComponent from "../components/Orders/OrdersNav.vue";
import "@mdi/font/css/materialdesignicons.css";
import salesComputations from "../components/Orders/salesComputations.vue";
import EmptyData from "../components/_generics/EmptyField.vue";
export default {
  name: "Orders",
  components: {
    OrdersNavComponent,
    salesComputations,
    EmptyData
  },

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
      this.productsCard.push(addedProduct);
    },

    deleteItem(id) {
      this.productsCard.pop(id);
    }
  }
};
</script>
<style scoped>
.cart {
  width: 128px;
}
.sales-heading {
  margin: 3px;
  padding: 8px;
}
.card-title {
  border-bottom: 1px solid #7411f6;
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
.empty {
  margin-left: 100px;
  margin-top: 123px;
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
