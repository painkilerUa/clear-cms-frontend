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
    type: 'text1',
    author_id: 'Arthur',
    searchable_id: 1,
    language_id: 1,
    category_id: 1,
    type_id: 1,
    tags: [
      'tag11',
      'tag32',
      'tag543'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/1'
  },
  {
    title: 'Title 2',
    type: 'text2',
    author_id: 'Arthur',
    searchable_id: 2,
    language_id: 2,
    category_id: 2,
    type_id: 2,
    tags: [
      'tag31',
      'tag42',
      'tag53'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/2'
  },
  {
    title: 'Title 3',
    type: 'text',
    author_id: 'Arthur',
    searchable_id: 3,
    language_id: 3,
    category_id: 3,
    type_id: 3,
    tags: [
      'tag1',
      'tag2',
      'tag3'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/3'
  },
  {
    title: 'Title 4',
    type: 'video',
    author_id: 'Arthur',
    searchable_id: 4,
    language_id: 4,
    category_id: 4,
    type_id: 4,
    tags: [
      'tag1',
      'tag2',
      'tag3'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/4'
  },
  {
    title: 'Title 5',
    type: 'video',
    author_id: 'Arthur',
    searchable_id: 5,
    language_id: 5,
    category_id: 5,
    type_id: 5,
    tags: [
      'tag1',
      'tag2',
      'tag3'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/5'
  },
  {
    title: 'Title 6',
    type: 'text',
    author_id: 'Arthur',
    searchable_id: 6,
    language_id: 6,
    category_id: 6,
    type_id: 6,
    tags: [
      'tag1',
      'tag2',
      'tag3'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/6'
  },
  {
    title: 'Title 7',
    type: 'video',
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category_id: 7,
    type_id: 7,
    tags: [
      'tag1',
      'tag2',
      'tag3'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/7'
  },
  {
    title: 'Title 27',
    type: 'video',
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category_id: 7,
    type_id: 7,
    tags: [
      'tag1',
      'tag2',
      'tag3'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/7'
  },
  {
    title: 'Title 28',
    type: 'video',
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category_id: 7,
    type_id: 7,
    tags: [
      'tag1',
      'tag2',
      'tag3'
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/7'
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
