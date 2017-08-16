import api from '../api'

export const getContent = ({ commit }, payload) => {
  const urlEnd = '/content'
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => commit('setContent', res.body))
    .catch((err) => console.error(err))
}

export const getTypes = ({ commit }, payload) => {
  const urlEnd = '/api/v1/contentTypes'
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => {
      commit('setTypes', res.body.items)
    })
    .catch((err) => console.error(err))
}

export const getTags = ({ commit }, payload) => {
  const urlEnd = '/api/v1/tags'
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => commit('setTags', res.body.items))
    .catch((err) => console.error(err))
}
