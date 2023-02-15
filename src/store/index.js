import { createStore } from 'vuex'
import api from "../services/services"
import isAuth from './isAuth.js'
import postTask from './postTask'

export default createStore({
  state: {
    apiConfigs: {
      api: api
    },

    user:{
      email: null,
      jwt: null,
    },
    
    task:{
      taskList: []
    }
  },

  getters: {
  },

  mutations: {
    RefreshTasksList(state, item)
    {
      state.task.taskList = item
    },

    SetJwtAtLocalStorage(state, jwt)
    {
      localStorage.setItem('jwtCode', JSON.stringify(jwt))
      state.user.jwt = jwt
    },

    GetJwtAtLocalStorage(state)
    {
      let jwt = localStorage.getItem('jwtCode')
      try{
        state.user.jwt = JSON.parse(jwt)
      }
      catch{
        state.user.jwt = null
      }
    },

    updateTaskList(state, list)
    {
      state.task.taskList = list
    }
  },

  actions: {
    async isAuth(){
      this.commit('GetJwtAtLocalStorage')
      return isAuth(this.state.apiConfigs.api, this.state.user.jwt)
    },

    async postTask(state, content){
      postTask(this.state.apiConfigs.api, this.state.user.jwt, content)
      this.dispatch("getTasks")
    },

    async getTasks(){
      this.state.apiConfigs.api.get('/task', {
        headers: {
            'Authorization': "Bearer "+this.state.user.jwt
        }
      })
      .then(
        (response)=>{
          this.commit("updateTaskList", response.data)
          console.log(this.state.task.taskList)
      })
      .catch(
        (erro)=>{
          console.log("Deu erro na busca da task: "+erro)
      })
    }

  },
  modules: {
  }
})
