/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

/**
 *  Fake data start
 **/

const users = [
  {
    id: 1,
    name: 'User 1',
    role: 'Admin'
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    name: 'User 2',
    role: 'Admin'
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    name: 'User 3',
    role: 'Admin'
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    name: 'User 4',
    role: 'Admin'
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    name: 'User 5',
    role: 'Admin'
    date: '2017-06-29 12:09:33'
  }
]

/**
 *  Fake data end
 **/

api.timeout = { timeout: 20000 }
api.serverURL = 'your api server url'

/**
 * Stabs for getters start
 * REMOVE AFTER BACK-END WELL BE IMPLEMENTED
 */

api.requestUsers = (urlEnd, type, payload = {}) => Promise.resolve(users)

/**
 * Stabs for getters end
 */

/*
* Request to back-end api
*/
api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)

export default api
