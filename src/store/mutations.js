export const setTypes = (state, types) => { state.types = types }
export const setTags = (state, tags) => { state.tags = tags }
export const setCategories = (state, categories) => { state.categories = categories }

// auth
export const authLogin = state => { state.auth.pending = true }
export const authLoginSuccess = (state) => { state.auth.isLoggedIn = true; state.auth.pending = false }
export const authLoginSetUsername = (state, name) => { state.auth.username = name }
export const authLoginSetUserRole = (state, userRole) => { state.auth.userRole = userRole }
export const authLogout = state => { state.auth.isLoggedIn = false; state.auth.username = null; state.auth.userRole = null }

export const setActions = (state, actions) => { state.actions = actions }
export const setRoles = (state, roles) => { state.roles = roles }

// Companies
export const setCompanies = (state, payload) => { state.companies = payload }
//
export const setDataPreviewArticle = (state, payload) => { state.articlePreview = payload }
// Lngs
export const setLanguages = (state, payload) => { state.languages = payload }
export const initConfAction = (state, payload) => {
  state.confData.id = payload.id
  state.confData.actionName = payload.actionName
  state.confData.showPopup = true
}

export const clearConfAction = (state, payload) => {
  state.confData.id = null
  state.confData.actionName = null
  state.confData.showPopup = false
}

// Information block mutation
export const setInformationMsg = (state, payload) => {
  state.informationMsg.text = payload.text
  for (let className in state.informationMsg.className) {
    state.informationMsg.className[className] = false
  }
  if (payload.className) {
    state.informationMsg.className[payload.className] = true
  }
}

export const setStyleForMsg = (state, payload) => {
  state.informationMsg.style = payload
}
