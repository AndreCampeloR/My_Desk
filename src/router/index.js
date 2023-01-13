import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginView.vue'
import Tasks from '../views/TasksView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
