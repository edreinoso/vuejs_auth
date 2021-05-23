<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Hello 
      msg="Welcome to Your Vue.js App"
    /> -->
    <Hello 
      :username="authUser.username"
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
import { mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    Hello
  },
  computed: {
    ...mapState(["authUser"])
  },
  mounted(){
    console.log('Mounted to Home - User authenticated', this.authUser)
  }
}
</script>
