import { createStore } from 'vuex'
import api from "../services/services"

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
      console.log(list)
      state.task.taskList = list
      console.log(state.task.taskList)
    }
  },

  actions: {
    async isAuth(){
      // REFATORAR
      this.commit('GetJwtAtLocalStorage')
      try
      {
        let response = await this.state.apiConfigs.api.get('/validateJwt', {
          headers: {
            'Authorization': "Bearer "+this.state.user.jwt
          }
        })

        if(response.status !== 200)
        {
          return false
        }

        return true
      }
      catch(erro)
      {
        console.log(erro)
        return false
      }
    },

    async postTask(){
      let response = await this.state.apiConfigs.api.post('/task', {
        headers: {
            'Authorization': "Bearer "+this.state.user.jwt
        }
      })
    },

    async getTasks(){
      let response = await this.state.apiConfigs.api.get('/task', {
        headers: {
            'Authorization': "Bearer "+this.state.user.jwt
        }
      })
      console.log(this.state.task.taskList)
      this.commit("updateTaskList", response.data)
    }
  },
  modules: {
  }
})
