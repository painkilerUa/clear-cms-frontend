export const content = state => state.content
export const types = state => state.types
export const tags = state => state.tags

// types
export const getContentTypeTitles = (state, getters) => state.types.map(item => item.type)

// tags
export const getTagTitles = (state, getters) => state.tags.map(item => item.title)
