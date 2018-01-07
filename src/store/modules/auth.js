import ls from 'local-storage'
import store from 'src/store'
import router from 'src/router'
import { STORAGE_AUTH_TOKEN } from 'src/constants'
import api from 'services/api'

function keepSession(event) {
  if (event.key === STORAGE_AUTH_TOKEN && (event.newValue === null || event.newValue === '')) {
    store.dispatch('auth/logout')
  }
}

const state = {
  isLoggedIn: !!ls.get(STORAGE_AUTH_TOKEN),
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
}

const mutations = {
  LOGIN(state) {
    state.isLoggedIn = true
  },
  LOGOUT(state) {
    state.isLoggedIn = false
  },
}

const actions = {
  async login({ commit }, { email, password, lsToken }) {
    try {
      // const { headers: { 'x-auth-token': apiToken } } = lsToken
      //   ? await api.get(`/sessions/${lsToken}`)
      //   : await api.post('/sessions', { email, password })
      // ls.set(STORAGE_AUTH_TOKEN, apiToken)
      // api.setHeader('x-auth-token', apiToken)
      if (!lsToken) {
        commit('LOGIN')
        router.push({ name: 'Monitor' })
      }
      // TODO: Maybe try `ls.on`
      window.addEventListener('storage', keepSession)
    } catch (err) {
      if (lsToken) ls.remove(STORAGE_AUTH_TOKEN)
      throw err
    }
  },
  async logout({ commit }) {
    try {
      const lsToken = ls.get(STORAGE_AUTH_TOKEN)
      if (lsToken) await api.delete(`/sessions/${lsToken}`)
      ls.remove(STORAGE_AUTH_TOKEN)
      api.setHeader('x-auth-token', null)
      commit('LOGOUT')
      router.push({ name: 'SignIn' })
      // TODO: Maybe try `ls.off`
      window.removeEventListener('storage', keepSession)
      window.location.reload()
    } catch (err) {
      throw err
    }
  },
}

export default {
  namespaced: 'auth',
  state,
  getters,
  mutations,
  actions,
}
