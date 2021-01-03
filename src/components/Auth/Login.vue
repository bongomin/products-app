<template>
  <div>
    <div class="col-md-4 m-auto">
      <main class="form-signin">
        <div class="login_wrapper">
          <BaseLogo width="80" height="60" />
          <form>
            <label for="inputEmail" class="visually-hidden"
              >Email address</label
            >
            <input
              type="email"
              v-model="userEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputPassword" class="visually-hidden">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              v-model="userPassword"
              required
            />
            <div class="checkbox mb-3">
              <label>
                <input class="remember" type="checkbox" value="remember-me" />
                Remember me
              </label>
            </div>
            <button
              class=" btn btn-md btn-dark"
              v-on:click.prevent="LoginHandler"
            >
              Sign in
            </button>
          </form>
        </div>
        <br />
        <div class="errMessage" v-if="errMessage">{{ errMessage }}</div>
        <p class="mt-5 mb-2 text-muted date_shower">
          &copy; Daniel | all-pro | {{ new Date().getFullYear() }}
        </p>
      </main>
    </div>
  </div>
</template>
<script>
import BaseLogo from "../_generics/baseLogo";
export default {
  name: "Login",
  components: {
    BaseLogo
  },

  data() {
    return {
      userEmail: "",
      userPassword: "",
      errMessage: "",
      log: "./../../assets/logo.png"
    };
  },

  methods: {
    LoginHandler() {
      if (this.userEmail == "") {
        this.errMessage = "Email is required";
      } else if (this.userPassword == "") {
        this.errMessage = "Password is required";
      } else if (this.userPassword.length < 4) {
        this.errMessage = "password must have more than 4 characters";
        return false;
      } else {
        this.$store.state.login = false;
      }
    }
  }
};
</script>
<style scoped>
.login_wrapper {
  margin-top: 50px;
  border-bottom: 0 none;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  padding: 30px;
}
.login_image {
  margin-left: 121px !important;
  margin-bottom: 45px !important;
}
.date_shower {
  margin-left: 123px;
}
.remember {
  margin-top: 10px;
}
.errMessage {
  color: red;
  text-align: center;
  border: 1px solid red;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
}
input:-internal-autofill-selected {
  appearance: menulist-button;
  background-color: rgb(243, 244, 247) !important;
  background-image: none !important;
  color: -internal-light-dark(black, white) !important;
}
</style>
