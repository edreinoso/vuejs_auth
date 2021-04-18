<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>
    <div>
      <!-- <div v-if="!authUser.authenticated"> -->
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
  </v-app-bar>
  <!-- <v-snackbar :color="color" :timeout="snacktimeout" v-model="alert">
      <div class="d-flex flex-row align-center justify-space-between">
        <p class="mb-0">{{ text }}</p>
        <v-btn color="white" text @click="alert = false">
          <v-icon small>mdi-window-close</v-icon>
        </v-btn>
      </div>
  </v-snackbar>-->
</template>

<script>
export default {
  name: "Header",
  methods: {
    // authModeLocal(event) {
    //   //   console.log("verifying event", event);
    //   this.authMode(event);
    // },
    // bannerMethod(color, text) {
    //   this.alert = true;
    //   this.color = color;
    //   this.text = text;
    // }
  }
};
</script>

<style>
.clickButton {
  cursor: pointer;
}
</style>