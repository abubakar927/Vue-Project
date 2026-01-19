<template>
  <div class="app-layout">
    <Sidebar />

    <div class="main-wrapper">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script setup>
  import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";
</script>

