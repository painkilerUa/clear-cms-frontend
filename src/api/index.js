/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

export default api

api.timeout = { timeout: 20000 }
api.serverURL = 'http://13.59.74.76'
api.token = localStorage.getItem('token')
api.headersAuthSettings = { headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`} }

api.URLS = {
  search: `${api.serverURL}/api/v1/search?_format=json`,
  login: `${api.serverURL}/oauth/v2/token`,
  userRoles: `/api/v1/getUserRoles/${api.token}`,
  register: `${api.serverURL}/api/v1/register`,
  forgotPassword: `${api.serverURL}/resetting/send-email`,
  content: `${api.serverURL}/api/v1/content`,
  contentTypes: '/api/v1/contentTypes',
  contentType: `${api.serverURL}/api/v1/contentType/`,
  contentSearch: `${api.serverURL}/api/v1/content-search`,
  tags: '/api/v1/tags',
  tags1: `${api.serverURL}/api/v1/tags`,
  tag: `${api.serverURL}/api/v1/tag`,
  categories: '/api/v1/categories',
  categories1: `${api.serverURL}/api/v1/categories`,
  category: `${api.serverURL}/api/v1/category`,
  actionsURLS: {
    actions: '/api/v1/get-actions',
    permissions: `/api/v1/permissions`,
    disallowed: `${api.serverURL}/api/v1/disallowed`
  },
  roles: `/api/v1/roles`,
  createAdmin: `${api.serverURL}/api/v1/register-admin`
}
api.requestToServer = (urlEnd, type, payload = api.headersAuthSettings) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
