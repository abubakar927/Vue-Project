<template>
  <AuthLayout>
    <AuthFormWrapper
      title="Forgot Password"
      subtitle="Enter your email"
    >
      <BaseInput
        placeholder="Email"
        v-model="email"
      />

      <BaseButton
        text="Send OTP"
        @click="sendOtp"
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
  name: "ForgetPass",
  components: {
    AuthLayout,
    AuthFormWrapper,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async sendOtp() {
      try {
        await AuthService.forgotPassword(this.email);

        // go to OTP screen
        this.$router.push("/otp");
      } catch (error) {
        console.error("Failed to send OTP", error);
      }
    },
  },
};
</script>
