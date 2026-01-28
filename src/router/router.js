import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/Layouts/MainLayout.vue'
import AuthLayout from '@/Layouts/AuthLayout.vue'
import Dashboard from '@/Pages/Dashboard/Dashboard.vue'
import Resources from '@/Pages/Dashboard/Resources.vue'
import Sprints from '@/Pages/Dashboard/Sprints.vue'
import Login from '@/Pages/Auth/Login.vue'
import Signup from '@/Pages/Auth/Signup.vue'
import Otp from '@/Pages/Auth/Otp.vue'
import Newpass from '@/Pages/Auth/Newpass.vue'
import Forgotpass from '@/Pages/Auth/Forgotpass.vue'
import Home from '@/Pages/Auth/Home.vue'
import Settings from '@/Pages/Dashboard/Settings.vue'
import Profile from '@/Pages/Dashboard/Profile.vue'
import Projects from '@/Pages/Dashboard/Projects.vue'


const routes = [
   {
    path: '/',
    component: AuthLayout,
    children: [
      { path: '', component: Home }
    ]
  },

  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "sprints", component: Sprints },
      { path: "resources", component: Resources },
      { path: "settings", component: Settings },
      { path: "profile", component: Profile },
      { path: "projects", component: Projects },
    ],
  },
  {
    path: "/",
    component: AuthLayout,
    children: [
      { path: "signup", component: Signup },
      { path: "login", component: Login },
      { path: "Otp", component: Otp },
      { path: "Newpass", component: Newpass },
      { path: "Forgotpass", component: Forgotpass },
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
