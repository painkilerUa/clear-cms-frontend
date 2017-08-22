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
  actions: [
    {actionId: 'all_content_action1', actionName: 'All content1'},
    {actionId: 'all_content_action2', actionName: 'All content2'}
  ],
  roles: []
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
