<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link" to="/orders">Sale</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/stock">Stock</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/summary">Summary</router-link>
    </li>
    <!-- <li class="nav-item float-right ">
      <label>{{ currentRouteName }}</label>
    </li> -->
  </ul>
</template>
<script>
export default {
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
