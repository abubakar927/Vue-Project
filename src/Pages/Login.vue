<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Hello Again!</h1>
      <h2>Welcome Back</h2>
       
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            class="input-with-icon"
            placeholder="Email Address"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            class="pwd-with-icon"
            placeholder="Password"
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
    await fakeLoginApi(email.value, password.value);
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

.input-with-icon {
  background-image: url('@/assets/mail.png');
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 18px;
  padding-left: 40px;
}

.pwd-with-icon {
  background-image: url('@/assets/pwds.png'); 
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 18px;
  padding-left: 40px; 
}

.login-card {
  /* margin-left : 800px ; */
  justify-content: center;
  justify-items: center;

}

h1 {
  margin-bottom: 10px;
  text-align: center;
}

h2 {
  margin-bottom: 10px;
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
  border-radius: 18px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  margin-top: 10px;
  margin-left: 25px;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 20px;
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
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
</style>
