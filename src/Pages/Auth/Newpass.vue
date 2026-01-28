<template>
  <AuthLayout>
    <AuthFormWrapper
      title="New Password"
      subtitle="Set your new password"
    >
      <BaseInput
        type="password"
        placeholder="New Password"
        v-model="password"
      />

      <BaseInput
        type="password"
        placeholder="Confirm Password"
        v-model="confirmPassword"
      />

      <BaseButton
        text="Update Password"
        @click="updatePassword"
      />
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
  name: "NewPass",
  components: {
    AuthLayout,
    AuthFormWrapper,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async updatePassword() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const email = localStorage.getItem("resetEmail"); // 👈 from forgot pass
        await AuthService.resetPassword({
          email,
          password: this.password,
        });

        // cleanup
        localStorage.removeItem("resetEmail");

        // redirect to login
        this.$router.push("/login");
      } catch (error) {
        console.error("Password update failed", error);
      }
    },
  },
};
</script>
<style scoped>

.base-btn{
  width: 100%;
}
</style>
