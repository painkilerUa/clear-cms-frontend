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
    className: {'success': false, 'danger': false, 'warning': false},
    style: {
    }
  },
  search: {
    searchString: null,
    contentTypes: [],
    topics: []
  },
  specialOps: {
    selectedFont: localStorage.getItem('selectedFont') ? localStorage.getItem('selectedFont') : 1,
    fontOpt: {
      0: '16px',
      1: '19.2px',
      2: '22.4px'
    },
    selectedHightCont: localStorage.getItem('selectedHightCont') ? localStorage.getItem('selectedHightCont') : 0,
    backgroundColor: {
      0: '#fff',
      1: '#000',
      2: '#fafac8'
    },
    color: {
      0: '#000',
      1: '#FFFA1A',
      2: '#000'
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
