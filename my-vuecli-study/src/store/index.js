import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: ''
  },
  mutations: {
    setLoginUser (state, userName) {
      state.loginUser = userName
    }
  }
})
