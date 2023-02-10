import { createRouter, createWebHistory } from 'vue-router'
import api from '../services/services.js'
import axios from 'axios'

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
    component: Tasks,
    meta:{
      requiresAuth: true
    }
  
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: Configuracoes,
    meta:{
      requiresAuth: true
    }
  
  },
  {
    path: '/estatisticas',
    name: 'estatisticas',
    component: Estatisticas,
    meta:{
      requiresAuth: true
    }
  
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre,
    meta:{
      requiresAuth: true
    }
  
  },
  {
    path: "/:catchAll(.*)",
    name: 'notFound',
    component: notFoundPage,
    meta:{
      requiresAuth: true
    }
      
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( async (from, to, next) => {
    let isAuth = await store.dispatch("isAuth")
    const requiresAuth = to.matched.some(p => p.meta.requiresAuth)
    console.log(to)
    console.log("isAuth:"+ isAuth + "\nrequiresAuth: "+ requiresAuth)

    if(isAuth == false && requiresAuth == true)
    {
      alert('É necessario logar para proseguir')
      next('/login')
    }
    else{
        next()
    }
  }
)

export default router
