<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link active" to="/hgg"
        >Available Products</router-link
      >
    </li>
    <li class="nav-item">
      <router-link class="nav-link active" to="/vb">Sold Productss</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link active" to="/gh"
        >Stocked Products</router-link
      >
    </li>
  </ul>
</template>
<script>
export default {
  name: "Products_nav",
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
};
</script>
<style scoped>
.nav {
  background: #7411f6;
  color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
.nav-link {
  color: #fff;
}
</style>
