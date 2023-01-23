import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://localhost:7172/';

createApp(App).use(store).use(router).mount('#app')
