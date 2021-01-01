<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <div class="row">
        <SideMenuComponents />
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "../components/Header/Navbar.vue";
import SideMenuComponents from "../components/SideMenu/SideMenu.vue";

export default {
  name: "Home",
  components: {
    NavbarComponent,
    SideMenuComponents
  }
};
</script>
