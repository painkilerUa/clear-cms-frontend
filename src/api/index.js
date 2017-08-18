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
  login: `${api.serverURL}/oauth/v2/token?grant_type=password&client_id=1_hfxueyakuh44w8osgg8wkkgcskgw8s08gcwk448cwwkg8oc4w&client_secret=69cem3f7d808s00oswgsco4k4w4cco8os08c0co4844skw8ko0`,
  register: `${api.serverURL}/api/v1/register`,
  contentTypes: '/api/v1/contentTypes',
  tags: '/api/v1/tags'
}

api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
