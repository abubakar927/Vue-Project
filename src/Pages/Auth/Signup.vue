<template>
  <AuthLayout>
    <AuthFormWrapper title="Hello!" subtitle="Sign Up to Get Started">
      <BaseInput placeholder="Full Name" v-model="name" />
      <BaseInput placeholder="Email Address" v-model="email" />
      <BaseInput type="password" placeholder="Password" v-model="password" />

      <BaseButton text="Register" @click="register" />

      <!-- Already have an account link -->
      <p class="auth-link">
        <router-link to="/login">Already have an account?</router-link>
      </p>
    </AuthFormWrapper>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/components/auth/AuthLayout.vue";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper.vue";
import BaseInput from "@/components/auth/BaseInput.vue";
import BaseButton from "@/components/auth/BaseButton.vue";
import AuthService from "@/Services/auth.service";

export default {
  name: "Signup",
  components: {
    AuthLayout,
    AuthFormWrapper,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await AuthService.signup({ name: this.name, email: this.email, password: this.password });
        this.$router.push("/login");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
.auth-link {
  margin-top: 10px;
  text-align: center;
}

.auth-link a {
  color: blue;     /* Blue link for "Already have an account" */
  text-decoration: underline;
  cursor: pointer;
}

.base-btn {
  width: 100%;
}
</style>
