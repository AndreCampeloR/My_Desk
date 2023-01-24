import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    posts: null,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async Register({dispatch}, form) {
      await axios.post('usuario', form)
      let UserForm = new FormData()
      UserForm.append('email', form.email)
      UserForm.append('password', form.password)
      await dispatch('LogIn', UserForm)
    },

    async LogIn({commit}, User) {
      await axios.post('login', User)
      await commit('setUser', User.get('username'))
    },
    
  },
  modules: {
  }
})
