export const mutations = {
  SET_TOKEN(state, payload) {
      state.token = payload
  },
  SET_USER(state, payload) {
      state.user = payload
  },
  RESET_USER(state) {
      state.user = null
      state.token = null
  }
}