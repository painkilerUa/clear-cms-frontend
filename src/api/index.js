/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

export default api

api.timeout = { timeout: 20000 }
api.serverURL = 'http://13.59.74.76'

api.URLS = {
  search: `${api.serverURL}/search?_format=json`,
  login: `${api.serverURL}/oauth/v2/token`,
  register: `${api.serverURL}/api/v1/register`,
  content: `${api.serverURL}/api/v1/content`,
  contentTypes: '/api/v1/contentTypes',
  tags: '/api/v1/tags',
  actions: '/get-actions',
  actionsPermissions: '/permissions',
  actionsDisallowed: '/disallowed',
  roles: '/roles'
  // actions: 'https://api.myjson.com/bins/gh1td',
  // roles: 'https://api.myjson.com/bins/eor01'
}

api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
