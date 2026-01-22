// src/services/auth.service.js
const USERS_KEY = "mock_users";
const TOKEN_KEY = "token";

export default {
  async signup({ name, email, password }) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

    if (users.find(u => u.email === email)) {
      throw new Error("User already exists");
    }

    users.push({ name, email, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return { message: "Signup successful" };
  },

  async login({ email, password }) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) throw new Error("Invalid credentials");

    // store token in localStorage
    localStorage.setItem(TOKEN_KEY, "fake-jwt-token");
    localStorage.setItem("user", JSON.stringify(user));

    return { token: "fake-jwt-token", user };
  },

  async forgotPassword(email) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    if (!users.find(u => u.email === email)) throw new Error("Email not found");

    localStorage.setItem("resetEmail", email);
    return { message: "OTP sent (mock)" };
  },

  async verifyOtp({ email, otp }) {
    const savedEmail = localStorage.getItem("resetEmail");
    if (email !== savedEmail) throw new Error("Invalid OTP");

    return { message: "OTP verified (mock)" };
  },

  async resetPassword({ email, password }) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    const userIndex = users.findIndex(u => u.email === email);
    if (userIndex === -1) throw new Error("Email not found");

    users[userIndex].password = password;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    localStorage.removeItem("resetEmail");
    return { message: "Password updated (mock)" };
  },
};
