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
    async Register({dispatch}, form) {
      await axios.post('usuario', form)
      let UserForm = new FormData()
      UserForm.append('email', form.email)
      UserForm.append('password', form.password)
      await dispatch('LogIn', UserForm)
    },

    async LogIn({commit}, data) {
      try
      {
        const response = await api.post("login", data)
        console.log(response.status)
        commit('UpdateJwtCode', response.data)
      }
      catch(error)
      {
        console.log(error.response.data)
      }
                    
      
    },
    
  },
  modules: {
  }
})
