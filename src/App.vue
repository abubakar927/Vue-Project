<template>
  <div class="app-layout">
    <Sidebar />
     <div class="main-wrapper">     
     <main class="main-content">
       <router-view />
     </main>
     <Footer />
    </div>
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
    Footer,
  }
}
</script>

