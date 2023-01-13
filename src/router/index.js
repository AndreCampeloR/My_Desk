import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginView.vue'
import ConfiguracoesView from '../views/ConfiguracoesView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: ConfiguracoesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
