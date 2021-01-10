<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-primary">
          <div class="panel-heading py-3">
            <div class="float-left">
              <h4 class="panel-title">
                <i class="mdi mdi-chevron-double-right"></i>
                Available Products
              </h4>
            </div>
            <div class="float-right">
              <i
                class="mdi mdi-file-find find-icon-custom"
                v-on:click="searchProducts = !searchProducts"
              ></i>
            </div>
            <div class="pull-right mt-4" v-if="searchProducts">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control searchP"
                  placeholder="Search Products"
                  autofocus
                />
              </div>
            </div>
          </div>
          <div class="panel-body">
            <input
              type="text"
              class="form-control"
              id="product-table-filter"
              data-action="filter"
              data-filters="#product-table"
              placeholder="Filter Developers"
            />
          </div>
          <table class="table table-hover productTable" id="product-table">
            <thead>
              <tr>
                <th>
                  <i class="mdi mdi-filter"></i>
                </th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Type</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Date Stocked</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, id) in products" :key="`product_key${id}`">
                <td>
                  <i class="mdi mdi-menu-right"></i>
                </td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.unit_price }}</td>
                <td>{{ product.product_type }}</td>
                <td>{{ product.product_category }}</td>
                <td>{{ product.quantity }}</td>
                <td>
                  {{ product.created_at | moment("calendar", "July 10 2011") }}
                </td>
                <td>
                  <i
                    class="mdi mdi-pencil m-2 eIcon"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    v-on:click="editProduct(id)"
                  ></i>
                  <i
                    class="mdi mdi-delete m-2"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    v-on:click="deleteItem(id)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
      <!-- Confirmation Modal -->
      <div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Confirmation
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Do you Really Want to delete this record ?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-sm btn-danger"
                  data-dismiss="modal"
                >
                  No
                </button>
                <button type="button" class="btn btn-sm btn-success">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Edit Products Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label"
                    >Recipient:</label
                  >
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label"
                    >Message:</label
                  >
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      searchProducts: false,
      showConfirmation: false
    };
  },

  methods: {
    deleteItem(id) {
      console.log("this is the product", id);
    },

    editProduct(id) {
      console.log("this is the product to Edit", id);
    }
  },

  mounted() {
    this.$store.dispatch("loadProducts");
  },

  computed: mapState(["products"])
};
</script>
<style scoped>
.modal-header {
  background: #7411f6;
  color: #fff;
}
.searchP {
  background: #7411f6;
  height: 50px;
  border-radius: 9px;
  color: white;
}
::placeholder {
  color: white;
}
.row {
  margin-top: 10px;
  padding: 0 10px;
}

.panel-heading div {
  margin-top: -18px;
  font-size: 15px;
}
.panel-heading div span {
  margin-left: 5px;
}
.panel-body {
  display: none;
}
.mdi-delete:hover {
  cursor: pointer !important;
  color: red !important;
}
.find-icon-custom {
  font-size: 30px;
}
.find-icon-custom:hover {
  cursor: pointer;
}
.productTable {
  height: 50px;
}
</style>
