import api from '@/api'
import router from '@/router'

export const redirect = () => router.push('/')

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
export const authLogout = ({ commit }, payload) => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  redirect()
  commit('authLogout')
}
