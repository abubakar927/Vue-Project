<template>
<Header title="Header" />
<Dashboard title="Main Dashboard" />
<Sidebar title="My Sidebar" />
<Footer title="My Footer" />

</template>

<script>
import Header from "./components/Header.vue"
import Home from "./Pages/Home.vue"
import Dashboard from "./Pages/Dashboard.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Footer,
    Dashboard,
  }
  
}
</script>
