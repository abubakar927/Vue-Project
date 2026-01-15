import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/Pages/HomePage.vue'
import Dashboard from '@/Pages/Dashboard.vue'
import About from '@/Pages/About.vue'
import Contact from '@/Pages/Contact.vue'



const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
