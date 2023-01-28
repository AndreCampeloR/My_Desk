import { createStore } from 'vuex'
import api from "../services/services"

export default createStore({
  state: {
    api: api,
    user: null,
    posts: null,
    jwt: null,
    tasks: []
  },
  getters: {
  },
  mutations: {
    RefreshTasksList(state, item)
    {
      state.tasks = item
    },

    UpdateJwtCode(state, login)
    {
      state.jwt = login.jwtToken
    }
  },
  actions: {
    async verifyUser(){
      if(this.state.jwt === null)
      {
        console.log(this.state.jwt)
        return false
      }
      try
      {
        response = await api.get('/usuario', {
          headers: {
            'Authorization': 'Bearer'+this.state.jwt
          }
        })
        console.log(response)
        return true
      }
      catch
      {
        return false
      }
      
    }
    
  },
  modules: {
  }
})
