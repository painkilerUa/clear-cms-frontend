/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

export default api

/**
 *  Fake data start
 **/
const content = [
  {
    title: 'Title 1',
    author_id: 'Arthur',
    searchable_id: 1,
    language_id: 1,
    category_id: 1,
    type_id: 1,
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/1'
  },
  {
    title: 'Title 2',
    author_id: 'Arthur',
    searchable_id: 2,
    language_id: 2,
    category_id: 2,
    type_id: 2,
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/2'
  }
]

const users = [
  {
    id: 1,
    name: 'User 1',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    name: 'User 2',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    name: 'User 3',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    name: 'User 4',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    name: 'User 5',
    role: 'Admin',
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
api.requestContent = (urlEnd, type, payload = {}) => Promise.resolve(content)

/**
 * Stabs for getters end
 */

/*
* Request to back-end api
*/
api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
