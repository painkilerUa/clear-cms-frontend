import api from '@/api'
import router from '@/router'

export const redirect = () => router.push('/')

// auth
export const authLogout = ({ commit }, payload) => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  redirect()
  commit('authLogout')
}

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
  api.requestToServer(urlEnd, type, payload, {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }})
  .then((res) => commit('setTags', res.body.items))
  .catch((err) => console.error(err))
}

export const getActions = ({ commit }, payload) => {
  const urlEnd = api.URLS.actions
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
  .then((res) => commit('setActions', res.body))
  .catch((err) => console.log(err))
}

export const getRoles = ({ commit }, payload) => {
  const urlEnd = api.URLS.roles
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
  .then((res) => commit('setRoles', res.body.items))
  .catch((err) => console.log(err))
}
