<template>
  <div class="home">
    <NavbarComponent />
    <LoginComponent v-if="login" />
    <div class="container" v-else>
      <div class="row">
        <SideMenuComponents />
        <MainContentsComponent />
      </div>
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/Auth/Login.vue";
import NavbarComponent from "../components/Header/Navbar.vue";
import MainContentsComponent from "../components/Main/MainContents.vue";
import SideMenuComponents from "../components/SideMenu/SideMenu.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    NavbarComponent,
    SideMenuComponents,
    MainContentsComponent,
    LoginComponent
  },

  computed: {
    ...mapState({
      login: state => state.login
    })
  }
};
</script>
