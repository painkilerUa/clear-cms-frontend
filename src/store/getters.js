export const content = state => state.content
export const types = state => state.types
export const tags = state => state.tags

// types
export const getContentTypeTitles = (state, getters) => state.types.map(item => item.type)
export const getContentTypeIdByTitle = (state, geters) => (title) => state.types.find(item => item.title === title).id

// tags
export const getTagTitles = (state, getters) => state.tags.map(item => item.title)
export const getTagIdByName = (state, getters) => (name) => state.tags.find(item => item.name === name).id
