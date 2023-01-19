import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/LoginView.vue'

import Register from '../views/RegisterView.vue'

import Tasks from '../views/TasksView.vue'

import Configuracoes from '../views/ConfiguracoesView.vue'

import Estatisticas from '../views/EstatisticasView.vue' 

import Sobre from '../views/SobreView.vue'

import notFoundPage from '../views/NotFoundPageView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registro',
    name: 'registro',
    component: Register
  },
  {
    path: '/',
    name: 'home',
    component: Tasks
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: Configuracoes
  },
  {
    path: '/estatisticas',
    name: 'estatisticas',
    component: Estatisticas
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre
  },
  {
    path: "/:catchAll(.*)",
    name: 'notFound',
    component: notFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
