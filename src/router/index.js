import { createRouter, createWebHistory } from 'vue-router'

import MainView from "@/views/MainView.vue";
import PortfolioView from "@/views/PortfolioView.vue";



const routes = [
  { path: '/', name: 'Main', component: MainView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView },

  { path: '/:pathMatch(.*)*', name: 'Main', component: MainView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router