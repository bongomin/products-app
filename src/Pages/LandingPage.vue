<template>
  <div class="home">
    <NavbarComponent />
    <div class="container-fluid">
      <div class="row">
        <SideMenuComponents />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "../components/Header/Navbar.vue";
import SideMenuComponents from "../components/SideMenu/SideMenu.vue";
import { mapState } from "vuex";
export default {
  name: "LandingPage",
  components: {
    NavbarComponent,
    SideMenuComponents
  },

  computed: {
    ...mapState({
      login: state => state.login
    })
  }
};
</script>
