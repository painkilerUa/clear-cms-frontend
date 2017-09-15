import api from '@/api'
import router from '@/router'

const isLoggedIn = localStorage.getItem('token')
export const redirect = () => { router.push('/'); router.go('/') }

// auth
export const authLogout = ({ commit }, payload) => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('userRole')
  commit('authLogout')
  redirect()
}

export const getContentById = ({ commit }, payload, id) => {
  if (isLoggedIn) {
    const urlEnd = `${api.URLS.content}/${this.id}`
    const type = 'get'
    api.requestToServer(urlEnd, type, payload, id)
    .then((res) => {
      this.contentItem = res.body
    })
    .catch((err) => console.error(err))
  }
}

export const getUserRoles = ({ commit }, payload) => {
  if (isLoggedIn) {
    const urlEnd = api.URLS.userRoles
    const type = 'get'
    api.requestToServer(urlEnd, type, payload)
    .then((res) => {
      let userRole = res.body[0]
      localStorage.setItem('userRole', userRole)
      commit('authLoginSetUserRole', userRole)
    })
    .catch((err) => console.log(err))
  }
}

export const getTypes = ({ commit }, payload) => {
  const urlEnd = api.URLS.contentTypes
  const type = 'get'
  if (isLoggedIn) {
    api.requestToServer(urlEnd, type, payload)
    .then((res) => {
      commit('setTypes', res.body.items)
    })
    .catch((err) => console.error(err))
  }
}

export const getTags = ({ commit }, payload) => {
  const urlEnd = api.URLS.tags
  const type = 'get'
  if (isLoggedIn) {
    api.requestToServer(urlEnd, type, payload)
    .then((res) => {
      commit('setTags', res.body.items)
    })
    .catch((err) => console.error(err))
  }
}

export const getActions = ({ commit }, payload) => {
  const urlEnd = api.URLS.actionsURLS.actions
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

export const getCategories = ({ commit }, payload) => {
  const urlEnd = api.URLS.categories
  const type = 'get'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => commit('setCategories', res.body.items))
    .catch((err) => console.log(err))
}

export const getCompanies = ({ commit }, payload) => {
  api.requestToServer(api.URLS.companies, 'get')
    .then((res) => commit('setCompanies', res.body.items))
    .catch((err) => console.log(err))
}

export const setDataPreviewArticle = ({ commit }, payload) => {
  commit('setDataPreviewArticle', payload)
}
