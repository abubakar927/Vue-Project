<template>
  <div class="register-container">
    <div >
      <h1>Hello!</h1>
      <h2>Sign Up to get started</h2>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Full Name</label>
          <input v-model="fullName" type="text" class="name-with-icon" placeholder= "Full Name" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" class="email-with-icon" placeholder="Email Address" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" class="pwd-with-icon" placeholder="Password" required />
        </div>

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit" :disabled="loading">
          {{ loading ? "Registering..." : "Register" }}
        </button>
      </form>

      <div class="links">
        <router-link to="/login">Already have an account? Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const fullName = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref("");

const handleRegister = async () => {
  error.value = "";
  loading.value = true;

  try {
    await fakeRegisterApi({
      firstName: fullName.value,
      email: email.value,
      password: password.value,
    });

    router.push("/login");
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const fakeRegisterApi = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find(u => u.email === user.email);
      if (exists) {
        reject(new Error("User already exists"));
        return;
      }

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      resolve(true);
    }, 500);
  });
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #eef2ff, #f8fafc);
}

.register-card {
  width: 100%;
  max-width: 400px;
  padding: 32px;
  border-radius: 12px;
}

h1 {
  margin-bottom: 10px;
  text-align: center;
  font-weight: 600;
  color: #1f2937;
}

h2 {
  margin-bottom: 24px;
  text-align: center;
  font-weight: 600;
  color: #1f2937;
}

.name-with-icon {
  background-image: url('@/assets/user.png'); /* Vue asset */
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 18px;
  padding-left: 40px; /* space for icon */
}

.email-with-icon {
  background-image: url('@/assets/mail.png'); /* Vue asset */
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 18px;
  padding-left: 40px; /* space for icon */
}

.pwd-with-icon {
  background-image: url('@/assets/pwds.png'); /* Vue asset */
  background-repeat: no-repeat;
  background-position: 10px center;
  background-size: 18px;
  padding-left: 40px; /* space for icon */
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  transition: border 0.2s, box-shadow 0.2s;
}


input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

button {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  border-radius: 20px;
  margin-left: 16px;
  border: none;
  background: #6366f1;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

button:hover {
  background: #4f46e5;
}

button:active {
  transform: scale(0.98);
}

button:disabled {
  background: #a5b4fc;
  cursor: not-allowed;
}

.error {
  margin-bottom: 10px;
  color: #dc2626;
  font-size: 13px;
  text-align: center;
}

.links {
  margin-top: 18px;
  text-align: center;
  font-size: 14px;
  margin-left: 24px;
}

.links a {
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
}

.links a:hover {
  text-decoration: underline;
}

</style>
