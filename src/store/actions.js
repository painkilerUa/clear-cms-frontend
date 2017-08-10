import api from '../api'

export const getContent = ({ commit }, payload) => {
  const urlEnd = ''
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => commit('setContent', res.body))
    .catch((err) => console.error(err))
}

export const getUsers = ({ commit }, payload) => {
  const urlEnd = '/users'
  const type = 'get'
  // replace below method to "requestToServer"
  api.requestUsers(urlEnd, type, payload)
    .then((res) => commit('setUsers', res))
    .catch((err) => console.error(err))
}
