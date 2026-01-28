<template>
  <AuthLayout>
    <AuthFormWrapper
      title="Verify OTP"
      subtitle="Enter OTP code"
    >
      <!-- Multi-box OTP input -->
      <div class="otp-input-wrapper">
        <input
          v-for="(digit, index) in otpDigits"
          :key="index"
          type="text"
          maxlength="1"
          v-model="otpDigits[index]"
          @input="focusNext($event, index)"
          @paste="handlePaste($event)"
        />
      </div>

      <BaseButton
        text="Verify"
        @click="verifyOtp"
        class="base-btn"
      />
    </AuthFormWrapper>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/components/auth/AuthLayout.vue";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper.vue";
import BaseButton from "@/components/auth/BaseButton.vue";
import AuthService from "@/Services/auth.service";

export default {
  name: "Otp",
  components: {
    AuthLayout,
    AuthFormWrapper,
    BaseButton,
  },
  data() {
    return {
      otpDigits: ["", "", "", "", "", ""], // 6-digit OTP
    };
  },
  methods: {
    focusNext(event, index) {
      const input = event.target;

      // Only allow numbers
      input.value = input.value.replace(/[^0-9]/g, "");
      this.otpDigits[index] = input.value;

      // Move focus to next input
      if (input.value && index < this.otpDigits.length - 1) {
        input.nextElementSibling.focus();
      }
    },
    handlePaste(event) {
      const paste = (event.clipboardData || window.clipboardData)
        .getData("text")
        .trim()
        .slice(0, this.otpDigits.length);

      this.otpDigits = paste.split("");

      // Focus last filled input
      const lastIndex = paste.length - 1;
      const inputs = event.target.parentNode.querySelectorAll("input");
      if (inputs[lastIndex]) inputs[lastIndex].focus();

      event.preventDefault();
    },
    async verifyOtp() {
      const otp = this.otpDigits.join(""); // Combine all digits
      try {
        const email = localStorage.getItem("resetEmail");

        await AuthService.verifyOtp({ email, otp });

        // Navigate to new password screen
        this.$router.push("/newpass");
      } catch (error) {
        console.error("OTP verification failed", error);
      }
    },
  },
};
</script>

<style scoped>
/* OTP inputs wrapper */
.otp-input-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
}

/* OTP input boxes */
.otp-input-wrapper input {
  width: 20px;
  height: 20px;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* Focus effect */
.otp-input-wrapper input:focus {
  border-color: #0b6efd;
  box-shadow: 0 0 5px rgba(11, 110, 253, 0.5);
}

/* Button full width */
.base-btn {
  width: 100%;
}
</style>
