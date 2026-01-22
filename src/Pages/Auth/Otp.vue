<template>
  <AuthLayout>
    <AuthFormWrapper
      title="Verify OTP"
      subtitle="Enter OTP code"
    >
      <BaseInput
        placeholder="OTP"
        v-model="otp"
      />

      <BaseButton
        text="Verify"
        @click="verifyOtp"
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
  name: "Otp",
  components: {
    AuthLayout,
    AuthFormWrapper,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      otp: "",
    };
  },
  methods: {
    async verifyOtp() {
      try {
        const email = localStorage.getItem("resetEmail");

        await AuthService.verifyOtp({
          email,
          otp: this.otp,
        });

        // go to new password screen
        this.$router.push("/newpass");
      } catch (error) {
        console.error("OTP verification failed", error);
      }
    },
  },
};
</script>
