<template>
  <v-app-bar app color="td2" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://personal-website-assets.s3.us-east-1.amazonaws.com/Projects/logo.png"
        transition="scale-transition"
        width="40"
      />
    </div>

    <v-spacer></v-spacer>
    <!-- <div> -->
    <div v-if="!authUser.authenticated">
      <!-- Desktop menu -->
      <div class="hidden-sm-and-down">
        <v-btn text @click="authModeLocal('signup')">
          <span class="mr-2">Sign Up</span>
        </v-btn>
        <v-btn text @click="authModeLocal('login')">
          <span class="mr-2">Login</span>
        </v-btn>
      </div>
      <!-- Mobile menu -->
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="hidden-md-and-up" icon v-on="on">
            <v-icon class="white--text">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="authModeLocal('signup')">
              <v-list-item-item class="clickButton">
                <span class="mr-2">Sign Up</span>
              </v-list-item-item>
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="authModeLocal('login')">
              <v-list-item-title class="clickButton">
                <span class="mr-2">Login</span>
              </v-list-item-title>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div v-if="authUser.authenticated" class="d-flex flex-row align-center">
      <v-btn text>
          <span class="mr-2">{{ authUser.username }}</span>
        </v-btn>
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon class="icon-size">mdi-chevron-down-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <div flat v-for="(item, index) in itemsFunction" :key="index">
            <v-list-item @click="vListItemFunction(item.option)">
              <v-list-item-title class="clickButton">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
      </v-menu>
    </div>
    <v-snackbar :color="color" :timeout="snacktimeout" v-model="alert">
      <div class="d-flex flex-row align-center justify-space-between">
        <p class="mb-0">{{ text }}</p>
        <v-btn color="white" text @click="alert = false">
          <v-icon small>mdi-window-close</v-icon>
        </v-btn>
      </div>
    </v-snackbar>
  </v-app-bar>
</template>

<script>
// import { mapActions } from "vuex";
import { Auth } from "aws-amplify";
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
  data: () => ({
    themeColor: "blue",
    attrs: null,
    on: null,
    authenticate: null,
    itemsFunction: [{ title: "Log Out", option: "1" }],

    // message
    snacktimeout: 8000,
    alert: false,
    text: null,
    color: null
  }),
  computed: {
    ...mapState(["authUser"])
  },
  methods: {
    ...mapActions(["authMode", "userLogOut", "resetAppState"]),
    authModeLocal(event) {
      console.log("verifying event", event);
      this.authMode(event);
    },
    vListItemFunction(option) {
      // logic to evaluate which local function to call
      if (option === "1") {
        this.logOut();
      }
    },
    async logOut() {
      try {
        await Auth.signOut({ global: true });
        this.userLogOut();
        this.$router.push({ name: "auth" });
      } catch (error) {
        console.log("error signing out: ", error);
      }
    },
    resetState() {
      this.resetAppState();
    },
    bannerMethod(color, text) {
      this.alert = true;
      this.color = color;
      this.text = text;
    }
  },
  mounted() {
    console.log("Header line 142 - authUser", this.authUser);
  }
};
</script>

<style>
.clickButton {
  cursor: pointer;
}
</style>