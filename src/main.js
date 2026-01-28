import './main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/router.js'
import VueApexCharts from 'vue3-apexcharts'
import { i18n } from "./i18n";

createApp(App).use(router).use(VueApexCharts).use(createPinia()).use(i18n).mount('#app')