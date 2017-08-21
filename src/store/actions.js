import api from '../api'

export const getTypes = ({ commit }, payload) => {
  const urlEnd = api.URLS.contentTypes
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
  .then((res) => { commit('setTypes', res.body.items) })
  .catch((err) => console.error(err))
}

export const getTags = ({ commit }, payload) => {
  const urlEnd = api.URLS.tags
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
  .then((res) => commit('setTags', res.body.items))
  .catch((err) => console.error(err))
}

// auth
export const authLogin = ({ commit }, credentials) => {
  const urlEnd = ''
  const type = 'post'
  api.requestToServer(urlEnd, type, credentials)
  .then((res) => commit('authLogin'))
  .catch((err) => console.log(err))
}
