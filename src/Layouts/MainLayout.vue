<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <Sidebar class="sidebar" />

    <div class="main-wrapper">
      <!-- Header with Dark/Light toggle -->
      <Header class="header">
        <div class="dark-toggle-wrapper">
          <!-- Use global theme -->
          <ToggleSwitch v-model="theme.isDark" />
          <span>{{ theme.isDark ? "Dark Mode" : "Light Mode" }}</span>
        </div>
      </Header>

      <!-- Main content -->
      <router-view />

      <!-- Footer -->
      <Footer class="footer" />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
import { theme } from "@/Stores/Theme.js"; // ✅ Use global theme store
</script>

<style>
/* ==================== Dark Mode Styles ==================== */
.dark .app-layout {
  background-color: #1f2937;
  color: #f3f4f6;
}

.dark .main-wrapper {
  background-color: #111827;
  color: #f3f4f6;
}

.dark .sidebar {
  background-color: #1f2937;
  color: #f3f4f6;
}

.dark .header,
.dark .footer {
  background-color: #111827;
  color: #f3f4f6;
}

/* Dark mode toggle wrapper inside header */
.dark-toggle-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  color: inherit;
}

/* Optional: adjust base cards, inputs, or components globally here */
.dark .card {
  background-color: #374151;
  color: #f3f4f6;
  border: 1px solid #4b5563;
}

.dark .value {
  color: #f3f4f6;
}

.dark .meta {
  color: #d1d5db;
}

.dark .Sprint {
  background-color: #1f2937;
  color: #f3f4f6;
}
</style>
