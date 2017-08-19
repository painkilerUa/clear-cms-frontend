export const content = state => state.content
export const types = state => state.types
export const tags = state => state.tags

// types
export const getContentTypeTitles = (state) => state.types.map(item => item.type)
export const getContentTypeIdByTitle = (state) => (type) => state.types.find(item => item.type === type).id

// tags
export const getTagTitles = (state) => state.tags.map(item => item.name)
export const getTagIdByNames = (state) => (names) => state.tags.filter(item => names.indexOf(item.name) !== -1).map(item => item.id)

// auth
export const getIsLoggedIn = (state) => state.auth.isLoggedIn
export const getUsername = (state) => state.auth.username
