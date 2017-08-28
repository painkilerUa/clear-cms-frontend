/**
 * App state storage
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
const state = {
  auth: {
    isLoggedIn: !!localStorage.getItem('token'),
    accessToken: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    userRole: null,
    pending: null
  },
  content: [],
  types: [],
  tags: [],
  actions: [],
  roles: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
