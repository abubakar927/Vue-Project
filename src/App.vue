<template>
  <div class="app-layout">
    <Header />
    <Sidebar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Sidebar from "@/components/Sidebar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

