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
    username: localStorage.getItem('username'),
    pending: null
  },
  content: [],
  types: [],
  tags: [],
  actions: ['Action1', 'Action2', 'Action3'],
  roles: ['SuperAdmin', 'User', 'Admin', 'Editor']
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
