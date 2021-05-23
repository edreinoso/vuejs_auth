<template>
  <div class>
    <v-card min-width="300" max-width="800" class="card-signing elevation-2">
      <!-- data is going to have to be sent down to the children -->
      <!-- <SignUp/> -->
      <SignUp
        v-if="localSignUpState === 'register'"
        v-on:signUp="signUp($event)"
        v-on:resetState="resetState()"
        :requestLoading="requestLoading"
        :colors="colors"
      />
      <Verification
        v-if="localSignUpState === 'verification'"
        v-on:verifyCode="verifyCode($event)"
        v-on:resentVerification="resentVerification()"
        :colors="colors"
      />
    </v-card>
    <!-- Banner -->
    <v-snackbar :color="color" v-model="alert">
      <div class="d-flex flex-row align-center justify-space-between">
        <p class="mb-0 white--text">{{ text }}</p>
        <v-btn color="white" text @click="alert = false">
          <v-icon small>mdi-window-close</v-icon>
        </v-btn>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
// import avatar from "@/store/avatar";
import { mapActions } from "vuex";
import SignUp from "./SignUp";
import Verification from "./Verification";

export default {
  name: "SignUpForm",
  components: {
    SignUp,
    Verification
  },
  data: () => ({
    colors: {
      titleColor: "teal-darken-3",
      themeColor: "teal",
    },
    snacktimeout: 8000,
    alert: false,
    text: null,
    color: null,
    requestLoading: false,
    localSignUpState: "register",
    username: "",
    authUser: {},
  }),
  methods: {
    ...mapActions(["resetAppState", "userSignUp", "setCurrentRoute"]),
    // Sign Up
    async signUp(event) {
      this.requestLoading = true;
      if (!event.valid) {
        (this.text = "Input some text"),
          (this.color = "#900028"),
          (this.alert = true);
        this.requestLoading = false;
        return;
      } else if (event.user.password != event.confirmPassword) {
        (this.text = "Passwords must be same"),
          (this.color = "#900028"),
          (this.alert = true);
        this.requestLoading = false;
        return;
      }
      try {
        this.username = event.user.username;
        let username, password, email;
        username = event.user.username;
        password = event.user.password;
        email = event.user.email;
        // sending this data to Cognito
        console.log(email, username, password)
        await Auth.signUp({
          username,
          password,
          attributes: {
            email
          }
        });
        // var randomAvatar = avatar[Math.floor(Math.random() * avatar.length)];
        // event.user.avatar = randomAvatar;
        this.authUser = event.user;

        // testing
        // this.authUser.authenticated = true;
        // this.userSignUp(this.authUser); // sending data to the store
        // this.requestLoading = false;
        // // changing routes
        // this.$router.push({ name: "home" });
        // this.setCurrentRoute("/");
        // testing

        (this.text = "Your account has been created successfully!"),
          (this.color = "success"),
          (this.alert = true);
        // changing local signUp state for account verification
        this.localSignUpState = "verification";
        this.requestLoading = false;
      } catch (error) {
        (this.text = error.message),
          (this.color = "#900028"),
          (this.alert = true);
        this.requestLoading = false;
      }
    },
    // Verification
    async verifyCode(event) {
      this.requestLoading = true;
      try {
        // calling cognito
        await Auth.confirmSignUp(this.username, event.code);
        console.log('line 108 - ', this.authUser)
        this.authUser.authenticated = true;
        this.userSignUp(this.authUser); // sending data to the store
        this.requestLoading = false;
        // changing routes
        this.$router.push({ name: "home" });
        this.setCurrentRoute("/");
      } catch (error) {
        (this.text = error.message),
          (this.color = "#900028"),
          (this.alert = true);
        this.requestLoading = false;
      }
    },
    // Resend Verification
    async resentVerification() {
      // this avoid overloading the resend of events without the HTTP error
      try {
        await Auth.resendSignUp(this.username);
        (this.text = "Code resent successfully"),
          (this.color = "success"),
          (this.alert = true);
      } catch (err) {
        (this.text = err.message),
          (this.color = "#900028"),
          (this.alert = true);
      }
    },
  }
};
</script>

<style>
@import "../../assets/colors.css";
@import "../../assets/line.css";

.card-signing {
  padding: 30px;
}
</style>