<template>
  <v-container>
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->

      <v-col class="mb-4">
        <h2 class="display-1 mb-3">
          Welcome to Authenticator
        </h2>

        <h1 class="display-2 subheading font-weight-regular">
          {{ username }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Hello',

    data: () => ({}),

    props: {
      username: String
    }
  }
</script>
