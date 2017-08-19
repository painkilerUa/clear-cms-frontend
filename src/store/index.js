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
    username: null,
    pending: null
  },
  content: [],
  types: [],
  tags: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
