export const content = state => state.content
export const types = state => state.types
export const tags = state => state.tags

// content
export const getContentById = (state, getters) => (id) => state.content.items.find(item => item.id === id)

// types
export const getContentTypeTitles = (state, getters) => state.types.map(item => item.type)
export const getContentTypeIdByTitle = (state, geters) => (type) => state.types.find(item => item.type === type).id

// tags
export const getTagTitles = (state, getters) => state.tags.map(item => item.name)
export const getTagIdByNames = (state, getters) => (names) => state.tags.filter(item => names.indexOf(item.name) !== -1).map(item => item.id)
