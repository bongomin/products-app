<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <div>
      <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/">
        <BaseLogo class="navLogo" />
        <span class="logoLabel">All-Pro</span>
      </a>
    </div>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <input
      class="form-control form-control-dark w-100"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap logout" v-on:click="logout">
        <a class="nav-link">Sign out</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import BaseLogo from "../_generics/baseLogo";
export default {
  name: "navBar",
  components: {
    BaseLogo
  },

  methods: {
    logout() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.navLogo {
  width: 38px;
  height: 30px;
  margin-top: -2px !important;
}

.navbar-brand {
  height: 55px !important;
}
.logoLabel {
  margin: 5px;
  font-size: 20px;
  position: relative;
  top: -9px;
}
.logout:hover {
  cursor: pointer;
}
</style>
