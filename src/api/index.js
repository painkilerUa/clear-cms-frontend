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
    get groups () { return groups },
    get products () { return products },
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    name: 'User 2',
    get groups () { return groups },
    get products () { return products },
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    name: 'User 3',
    get groups () { return groups },
    get products () { return products },
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    name: 'User 4',
    get groups () { return groups },
    get products () { return products },
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    name: 'User 5',
    get groups () { return groups },
    get products () { return products },
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

api.requestOrders = (urlEnd, type, payload = {}) => {
  return Promise.resolve(orders)
}

api.requestUsers = (urlEnd, type, payload = {}) => {
  return Promise.resolve(users)
}

api.requestGroups = (urlEnd, type, payload = {}) => {
  return Promise.resolve(groups)
}

api.requestProducts = (urlEnd, type, payload = {}) => {
  return Promise.resolve(products)
}

api.requestCurrencies = (urlEnd, type, payload = {}) => {
  return Promise.resolve(currencies)
}

api.requestStatuses = (urlEnd, type, payload = {}) => {
  return Promise.resolve(statuses)
}

api.requestSpecifications = (urlEnd, type, payload = {}) => {
  return Promise.resolve(specifications)
}

api.requestCategories = (urlEnd, type, payload = {}) => {
  return Promise.resolve(categories)
}
/**
 * Stabs for getters end
 */

/*
* Request to back-end api
*/
api.requestToServer = (urlEnd, type, payload = {}) => {
  return Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
}

export default api
