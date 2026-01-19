<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit" :disabled="loading">
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </form>

      <div class="links">
        <router-link to="/forgot-password">Forgot password?</router-link>
        <router-link to="/register">Create account</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");

const router = useRouter();

const handleLogin = async () => {
  error.value = "";
  loading.value = true;

  try {
    // 🔹 Replace this with your real API call
    await fakeLoginApi(email.value, password.value);

    // 🔹 Save token if needed
    localStorage.setItem("token", "fake-jwt-token");

    router.push("/dashboard");
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};


const fakeLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@test.com" && password === "1234") {
        resolve(true);
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f6f8;
  color: #000;
}

.login-card {
  width: 360px;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;

}

input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #93c5fd;
}

.error {
  color: red;
  margin-bottom: 10px;
  font-size: 14px;
}

.links {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
</style>
