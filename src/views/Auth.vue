<template>
  <v-container class="fill-height">
    <v-row class>
      <v-col cols="12">
        <div class="d-flex justify-center align-center">
          <!-- <h1>hello world auth</h1> -->
          <div v-if="authMode === 'login'">
            <LoginForm />
          </div>
          <!-- <div> -->
          <div v-if="authMode === 'signup'">
            <SignUpForm />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
// import { mapState, mapActions } from "vuex";
import LoginForm from "@/components/Auth/LoginForm.vue";
import SignUpForm from "@/components/Auth/SignUpForm.vue";

export default {
  name: "Auth",
  // data: () => ({
  //   url: process.env.VUE_APP_URL
  // }),
  components: {
    LoginForm,
    SignUpForm
  },
  computed: {
    ...mapState(["authMode"])
  },
  // methods: {
  //   ...mapActions(["loadUserToState"])
  // },
  // mounted() {
  //   console.log('hello world');
  //   console.log(this.authMode);
  // }
};
</script>

<style>
@import "../assets/line.css";

.card-signing {
  padding: 30px;
}
</style>