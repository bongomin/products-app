<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <div class="row">
        <SideMenuComponents />
        <MainContentsComponent />
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "../components/Header/Navbar.vue";
import MainContentsComponent from "../components/Main/MainContents.vue";
import SideMenuComponents from "../components/SideMenu/SideMenu.vue";
import { mapState } from "vuex";
export default {
  name: "LandingPage",
  components: {
    NavbarComponent,
    SideMenuComponents,
    MainContentsComponent
  },

  computed: {
    ...mapState({
      login: state => state.login
    })
  }
};
</script>
