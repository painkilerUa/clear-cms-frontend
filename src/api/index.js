/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

export default api

api.timeout = { timeout: 20000 }
api.serverURL = 'http://192.168.0.85/web/app.php'

api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
