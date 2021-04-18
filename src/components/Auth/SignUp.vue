<template>
  <div>
    <h1 class="pb-5 text-center dark-2-golden-font">Sign Up</h1>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    // valid: true,
    // eyePass: false,
    // eyeConfirmPass: false,
    // rules: {
    //   email: [
    //     v => !!v || "Required.",
    //     v => /.+@.+\..+/.test(v) || "E-mail must be valid."
    //   ],
    //   required: [v => !!v || "Required."],
    //   password: [
    //     v => !!v || "Required.",
    //     v => (v && v.length >= 8) || "minimum 8 characters"
    //   ]
    // },
    // user: {
    //   username: "",
    //   email: "",
    //   firstName: "",
    //   lastName: "",
    //   password: "",
    //   confirmPassword: ""
    // }
  }),
//   computed: {
//     passwordConfirmationRule() {
//       return () =>
//         this.user.password === this.user.confirmPassword ||
//         "Password must match";
//     }
//   },
//   props: {
//     themeColor: String,
//     requestLoading: Boolean
//   },
//   methods: {
//     signUp() {
//       var event = {
//         // constructing the event to pass to parent
//         valid: this.valid,
//         user: {
//           username: this.user.username,
//           email: this.user.email,
//           firstName: this.user.firstName,
//           lastName: this.user.lastName,
//           password: this.user.password
//         },
//         confirmPassword: this.user.confirmPassword
//       };
//       this.$emit("signUp", event);
//       this.$refs.form.reset();
//     },
//     resetState() {
//       this.$emit("resetState");
//     }
//   }
};
</script>

<style>
</style>