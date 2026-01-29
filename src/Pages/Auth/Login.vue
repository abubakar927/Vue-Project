<template>
  <AuthLayout>
    <AuthFormWrapper title="Welcome Back!" subtitle="Login to continue">
      <BaseInput placeholder="Email" v-model="email" />
      <BaseInput type="password" placeholder="Password" v-model="password" />

      <BaseButton text="Login" @click="login" />

      <p class="auth-link">
        <router-link to="/forgotpass">Forgot Password?</router-link>
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
  name: "Login",
  components: {
    AuthLayout,
    AuthFormWrapper,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        await AuthService.login({ email: this.email, password: this.password });
        this.$router.push("/dashboard");
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
    margin-left: 30px;

}

.auth-link a {
  color: red;
  text-decoration: underline;
  cursor: pointer;

}


.base-btn{
  width: 100%;
}

</style>
