import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const API_URL = 'https://quote-garden.herokuapp.com/api/v3/'

export default new Vuex.Store({
  state: {
    loading: false,
    errorMessage: '',
    quotes: [],
    quote: null
  },
  mutations: {
    setLoading (state, data) {
      state.loading = data
    },
    setErrorMessage (state, data) {
      state.errorMessage = data
    },
    setQuote (state, data) {
      state.quote = data
    },
    setQuotes (state, data) {
      state.quotes = data
    }
  },
  actions: {
    async loadRandomQuote ({ commit }) {
      commit('setLoading', true)
      try {
        const result = await Axios.get(`${API_URL}quotes/random`)
        if (result.status === 200) {
          const quote = result.data.data[0]
          if (quote) {
            commit('setQuote', quote)
          }
        }
      } catch (e) {
        commit('setErrorMessage', 'Error cargando cita aleatoria ...')
      }
      commit('setLoading', false)
    },
    async loadAuthorQuotes ({ commit }, authorName) {
      commit('setLoading', true)
      try {
        const result = await Axios.get(`${API_URL}quotes?author=${authorName}`)
        if (result.status === 200) {
          commit('setQuotes', result.data.data)
        }
      } catch (e) {
        commit('setErrorMessage', 'Error cargando las citas de: ' + authorName + ' ...')
      }
      commit('setLoading', false)
    }
  }
})
