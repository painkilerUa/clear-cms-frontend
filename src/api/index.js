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
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 1,
    language_id: 1,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTUgMTQuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUgMTQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiM5QTlCOUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxkZWZzPg0KCQk8cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik02LjksNi4zYzAuNCwwLjgsMC45LDEuNiwxLjcsMi4zQzcuNiw4LjksNi44LDkuMSw1LjcsOS42QzYsOSw2LjcsNy40LDYuOSw2LjMgTTcuMSwyLjYNCgkJCWMwLjgsMC41LDAuMywxLjYsMCwyLjdDNi45LDQuNiw2LjYsMy4xLDcuMSwyLjYgTTcsMi4zYy0wLjMsMC0wLjYsMC4yLTAuNywwLjVDNiwzLjUsNi42LDUuNyw2LjgsNmMtMC43LDItMi45LDYtNC4xLDYuMg0KCQkJYzAtMC4zLDAuMS0xLDEuNi0yYzAuMS0wLjEsMC4yLTAuMiwwLjItMC4yYy0xLjIsMC42LTIuOSwxLjYtMS45LDIuM2MwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC43LDAuMywxLjgtMC42LDIuOC0yLjcNCgkJCUM2LjgsOS40LDcuNyw5LjEsOSw4LjljMS40LDEsMi40LDEuMiwzLjEsMC45YzAuMi0wLjEsMC41LTAuMywwLjUtMC42Yy0wLjUsMC43LTEuOCwwLjItMi44LTAuNGMwLjktMC4xLDEuOS0wLjIsMi4zLDANCgkJCWMwLjUsMC4yLDAuNSwwLjQsMC41LDAuNWMwLTAuMSwwLjEtMC40LDAtMC41QzEyLjIsOCw5LjgsOC45LDksOC45QzcuOSw4LjMsNy41LDYuNiw3LjIsNS43YzAuMy0xLjEsMC42LTIsMC40LTIuOA0KCQkJQzcuNSwyLjUsNy4yLDIuMyw3LDIuM0M3LDIuMyw3LDIuMyw3LDIuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxyZWN0IHg9IjAiIHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNC44Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 2',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 2,
    language_id: 2,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/2'
  },
  {
    title: 'Title 3',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 3,
    language_id: 3,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/3'
  },
  {
    title: 'Title 4',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 4,
    language_id: 4,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/4'
  },
  {
    title: 'Title 5',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 5,
    language_id: 5,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/5'
  },
  {
    title: 'Title 6',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 6,
    language_id: 6,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/6'
  },
  {
    title: 'Title 7',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/7'
  },
  {
    title: 'Title 27',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'http://lorempicsum.com/nemo/200/200/7'
  },
  {
    title: 'Title 28',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
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
