import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/LoginView.vue'

import Register from '../views/RegisterView.vue'

import Tasks from '../views/TasksView.vue'

import Configuracoes from '../views/ConfiguracoesView.vue'

import Estatisticas from '../views/EstatisticasView.vue' 

import Sobre from '../views/SobreView.vue'

import notFoundPage from '../views/NotFoundPageView.vue'

import store from '@/store'


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

router.beforeEach((from, to, next) => {
  store.commit('GetJwtAtLocalStorage')
  let jwtCode = store.state.jwt

  // console.log("-------------- to --------------")
  // for (const item in to) {
  //   console.log(item + " = " + to[item])
  // }
  // console.log("-------------- from --------------")
  // for (const item in from) {
  //   console.log(item + " = " + from[item])
  // }

  if(jwtCode == undefined) {
    next({ name: 'registro' }) || next({ name: 'login' }) 
  }
  else{
    next()
  }
})

export default router
