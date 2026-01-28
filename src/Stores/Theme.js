// src/store/theme.js
import { reactive, watch } from "vue"; // ✅ Import watch

export const theme = reactive({
  isDark: localStorage.getItem("theme") === "dark" // load saved preference
});

// Automatically apply/remove dark class and persist
watch(
  () => theme.isDark,
  (value) => {
    document.documentElement.classList.toggle("dark", value);
    localStorage.setItem("theme", value ? "dark" : "light");
  },
  { immediate: true } // apply on initial load
);

