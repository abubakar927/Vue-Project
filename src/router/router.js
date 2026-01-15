import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue'
import Contact from '../Pages/Contact.vue'
import Dashboard from '@/Pages/Dashboard.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
