import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/Layouts/MainLayout.vue'
import AuthLayout from '@/Layouts/AuthLayout.vue'
import Projects from '@/Pages/Projects.vue'
import Dashboard from '@/Pages/Dashboard.vue'
import Resources from '@/Pages/Resources.vue'
import Sprints from '@/Pages/Sprints.vue'
import Login from '@/Pages/Login.vue'
import Signup from '@/Pages/Signup.vue'




const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "sprints", component: Sprints },
      { path: "/", component: Projects },
      { path: "resources", component: Resources },
    ],
  },
  {
    path: "/",
    component: AuthLayout,
    children: [
      { path: "signup", component: Signup},
      { path: "login", component: Login },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
