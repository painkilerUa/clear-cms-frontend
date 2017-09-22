/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

export default api
api.timeout = { timeout: 20000 }
// api.serverURL = location.hostname === '18.220.188.74' ? 'http://52.15.253.49' : 'http://18.220.13.196'
// api.staticServerURL = location.hostname === '18.220.188.74' ? 'http://52.15.253.49' : 'http://18.220.13.196'
api.serverURL = 'http://52.15.253.49'
api.staticServerURL = 'http://52.15.253.49'
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
  companies: '/api/v1/company',
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
  user: `${api.serverURL}/api/v1/user`,
  users: `${api.serverURL}/api/v1/users`,
  enabled: `${api.serverURL}/api/v1/enabled`,
  createAdmin: `${api.serverURL}/api/v1/register-admin/`
}
api.requestToServer = (urlEnd, type, payload = api.headersAuthSettings) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
