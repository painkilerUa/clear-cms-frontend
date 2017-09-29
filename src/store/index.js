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
  companies: [],
  types: [],
  tags: [],
  actions: [],
  roles: [],
  categories: [],
  languages: [],
  confData: {
    id: null,
    actionName: null,
    showPopup: false
  },
  informationMsg: {
    text: null,
    className: null,
    style: {
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
