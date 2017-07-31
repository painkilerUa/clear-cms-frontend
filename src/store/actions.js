import api from '../api'

export const getContent = ({ commit }, payload) => {
  const urlEnd = '/content'
  const type = 'post'
  // replace below method to "requestToServer"
  api.requestContent(urlEnd, type, payload)
    .then((res) => {
      commit('setContent', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getUsers = ({ commit }, payload) => {
  const urlEnd = '/users'
  const type = 'post'
  // replace below method to "requestToServer"
  api.requestUsers(urlEnd, type, payload)
    .then((res) => {
      commit('setUsers', res)
    })
    .catch((err) => {
      console.error(err)
    })
}
