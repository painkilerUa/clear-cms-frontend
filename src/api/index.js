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
  login: `${api.serverURL}/api/v1/login`,
  register: `${api.serverURL}/api/v1/register`,
  contentTypes: '/api/v1/contentTypes',
  tags: '/api/v1/tags'
}

api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
