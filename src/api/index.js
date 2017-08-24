/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

export default api

api.timeout = { timeout: 20000 }
api.serverURL = 'http://13.59.74.76'
api.token = localStorage.getItem('token')

api.URLS = {
  search: `${api.serverURL}/api/v1/search?_format=json`,
  login: `${api.serverURL}/oauth/v2/token`,
  register: `${api.serverURL}/api/v1/register`,
  forgotPassword: `${api.serverURL}/resetting/send-email`,
  content: `${api.serverURL}/api/v1/content`,
  contentTypes: '/api/v1/contentTypes',
  tags: '/api/v1/tags',
  actionsURLS: {
    actions: '/api/v1/get-actions',
    permissions: `/api/v1/permissions`,
    disallowed: `${api.serverURL}/api/v1/disallowed`
  },
  roles: `/api/v1/roles`,
  createUser: `${api.serverURL}/api/v1/register-admin`,
  reset: `/api/v1/reset`
}

api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
