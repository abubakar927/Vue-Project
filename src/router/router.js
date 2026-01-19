import { createRouter, createWebHistory } from 'vue-router'
import Projects from '@/Pages/Projects.vue'
import Dashboard from '@/Pages/Dashboard.vue'
import Resources from '@/Pages/Resources.vue'
import Sprints from '@/Pages/Sprints.vue'
import Login from '@/Pages/Login.vue'




const routes = [
  { path: '/login' , name: 'Login', component: Login },
  { path: '/', name: 'Projects', component: Projects },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Resources', name: 'Resources', component: Resources },
  { path: '/Sprints', name: 'Sprints', component: Sprints },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
