import { createStore } from 'vuex'
import api from "../services/services"

export default createStore({
  state: {
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

    UpdateJwtCode(state, jwt)
    {
      state.jwt = jwt.jwtToken
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

    async LogIn({commit}) {
      const response = await api.post("login", {
        email: "campelo@gmail.com",
        password: "campelo123"
      })
      console.log(response.data)
      commit('UpdateJwtCode', response.data)

      //commit('UpdateJwtCode', response.data) 
      // await axios.post('login', User)
      // await commit('setUser', User.get('username'))
      // 
    },
    
  },
  modules: {
  }
})
