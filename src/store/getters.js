export const content = state => state.content
export const types = state => state.types
export const tags = state => state.tags
export const actions = state => state.actions
export const roles = state => state.roles

// types
export const getContentTypeTitles = (state) => state.types.map(item => item.type)
export const getContentTypeIdByTitle = (state) => (type) => state.types.find(item => item.type === type).id
export const getContentTypeForSelect = (state) => state.types.map(item => {
//  if (item.is_active) {
  return {
    label: item.type,
    value: item.id
  }
//  }
})

// tags
export const getTagTitles = (state) => state.tags.map(item => item.name)
export const getTagIdByNames = (state) => (names) => state.tags.filter(item => names.indexOf(item.name) !== -1).map(item => item.id)
export const getTagsForSelect = (state) => state.tags.map(item => {
//  if (item.is_active) {
  return {
    label: item.name,
    value: item.id
  }
//  }
})

// auth
export const getIsLoggedIn = (state) => state.auth.isLoggedIn
export const getUsername = (state) => state.auth.username
export const getUserRole = (state) => state.auth.userRole
export const getAccessToken = state => state.auth.accessToken

// categories
export const getCategoriesTitle = (state) => state.categories.map(item => item.title)
export const getCategoriesForSelect = (state) => state.categories.map(item => {
//  if (item.is_active) {
  return {
    label: item.title,
    value: item.id
  }
//  }
})
// companies
export const getCompaniesForSelect = (state) => state.companies.map(item => {
//  if (item.is_active) {
  return {
    label: item.name,
    value: item.id
  }
//  }
})
// roles
export const getRolesForSelect = (state) => state.roles.map(item => {
//  if (item.is_active) {
  return {
    label: item.name,
    value: item.id
  }
//  }
})
// languages
export const getLanguagesForSelect = (state) => state.languages.map(item => {
//  if (item.is_active) {
  return {
    label: item.name,
    value: item.id
  }
//  }
})
export const getArticlePreview = (state) => state.articlePreview

export const getConfData = (state) => state.confData

export const getInformationMsgs = (state) => state.informationMsg
