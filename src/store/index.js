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
      try{
        state.jwt = JSON.parse(jwt)
      }
      catch{
        state.jwt = null
      }
        
      
    }
  },
  actions: {
    async isAuth(){
      this.commit('GetJwtAtLocalStorage')

      if(this.state.jwt === null)
      {
        return false
      }
      
      try
      {
        let response = await api.get('/validateJwt', {
          headers: {
            'Authorization': 'Bearer '+this.state.jwt
          }
        })

        if(response.status === 200)
        {
          return true
        }
        return false
      }
      catch(erro)
      {
        console.log(erro)
        return false
      }
      
    }
    
  },
  modules: {
  }
})
