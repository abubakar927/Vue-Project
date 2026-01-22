import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    profileImage: localStorage.getItem("profileImage"),
    name: localStorage.getItem("userName") || "",
    email: localStorage.getItem("userEmail") || "",
  }),

  actions: {
    setAvatar(image) {
      this.profileImage = image;
      localStorage.setItem("profileImage", image);
    },
    removeAvatar() {
      this.profileImage = null;
      localStorage.removeItem("profileImage");
    },
    updateProfile(name, email) {
      this.name = name;
      this.email = email;
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
    },
  },
});
