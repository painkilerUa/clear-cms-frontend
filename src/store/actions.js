import api from '../api'

export const getContent = ({ commit }, payload) => {
  const urlEnd = ''
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => commit('setContent', res.body))
    .catch((err) => console.error(err))
}

export const getTypes = ({ commit }, payload) => {
  const urlEnd = '/types'
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => commit('setTypes', res.body))
    .catch((err) => console.error(err))
}

export const getTags = ({ commit }, payload) => {
  const urlEnd = '/tags'
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => commit('setTags', res.body))
    .catch((err) => console.error(err))
}
