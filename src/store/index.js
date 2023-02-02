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
    jwtToken(state){
      return "Bearer "+state.jwt
    }
  },
  mutations: {
    RefreshTasksList(state, item)
    {
      state.tasks = item
    },

    UpdateJwtCode(state, login)
    {
      state.jwt = login.jwtToken
    },

    SetJwtAtLocalStorage(state, jwt)
    {
      localStorage.setItem('jwtCode', JSON.stringify(jwt))
      state.jwt = jwt
    },

    GetJwtAtLocalStorage(state)
    {
      let jwt = localStorage.getItem('jwtCode')
      if(jwt == "undefined"){
        state.jwt = undefined
      }
      else{
        state.jwt = JSON.parse(jwt)
      }
    }
  },
  actions: {
    async verifyUser(){
      if(this.state.jwt === null)
      {
        return
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
