export const setTypes = (state, types) => { state.types = types }
export const setTags = (state, tags) => { state.tags = tags }

// auth
export const authLogin = state => { state.auth.pending = true }
export const authLoginSuccess = (state) => { state.auth.isLoggedIn = true; state.auth.pending = false }
export const authLoginSetUsername = (state, name) => { state.auth.username = name }
export const authLogout = state => { state.auth.isLoggedIn = false }
