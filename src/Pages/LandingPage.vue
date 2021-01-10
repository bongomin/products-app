<template>
  <div class="home">
    <NavbarComponent />
    <div class="container-fluid">
      <div class="row">
        <SideMenuComponents v-if="$route.meta.requireSideBar" />
        <main role="main" :class="$route.meta.requireSideBar ? Class1 : Class2">
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
  data() {
    return {
      Class1: "col-md-9 ml-sm-auto col-lg-10 px-md-4",
      Class2: "col-md-12 col-lg-12 px-md-4"
    };
  },

  computed: {
    ...mapState({
      login: state => state.login
    })
  },

  showComponent() {
    return this.$route.meta.requireSideBar ? this.Class1 : this.Class2;
    // if (this.$route.meta.requireSideBar) {
    //   return this.Class1;
    // } else {
    //   return this.Class2;
    // }
  }
};
</script>
