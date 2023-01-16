import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginView.vue'

import Tasks from '../views/TasksView.vue'

import Configuracoes from '../views/ConfiguracoesView.vue'

import Estatisticas from '../views/EstatisticasView.vue' 

import Sobre from '../views/SobreView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: Configuracoes
  },
  {
    path: '/estatisticas',
    name: 'Estatisticas',
    component: Estatisticas
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
