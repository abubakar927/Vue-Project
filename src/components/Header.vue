<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'

const isSidebarOpen = ref(false)
</script>

<template>
  <header>
    <h1>My Web App</h1>
    <div class="search">
      <input type="text" placeholder="Search..." />
      <button class="srchbtn" >🔍</button>
    </div>

    <button class="Menu-btn" @click="isSidebarOpen = true">
      ☰ Menu
    </button>

    <Sidebar
      :isOpen="isSidebarOpen"
      @close="isSidebarOpen = false"
    />
  </header>
</template>
