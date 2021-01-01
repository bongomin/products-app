<template>
  <div class="home">
    <NavbarComponent />
    <div class="container"></div>
  </div>
</template>

<script>
import NavbarComponent from "../components/Header/Navbar.vue";

export default {
  name: "Home",
  components: {
    NavbarComponent
  }
};
</script>
