import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: '********',
    search: null,
    selected: {},
    response: {}
  },
  getters: {
    getResponse: function (state) {
      return state.response
    },
    getSelected: function (state) {
      return state.selected
    }
  },
  mutations: {
    setSearch: function (state, payload) {
      state.search = payload
    },
    setResponse: function (state, payload) {
      state.response = payload
    },
    setSelected: function (state, payload) {
      state.selected = payload
    },
    setNull: function (state) {
      state.response = {}
      state.selected = {}
    }
  },
  actions: {
    search({commit}, payload) {
      return axios.get('http://www.omdbapi.com/?s='+ payload +'&apikey='+ this.state.apiKey)
        .then((res) => {
          commit('setSearch', payload)
          if (res.data['Response'] == 'True') {
            commit('setResponse', res.data['Search'])
          } else {
            commit('setNull')
          }
        })
    },
    movie({commit}, payload) {
      return axios.get('http://www.omdbapi.com/?i='+ payload +'&apikey='+ this.state.apiKey)
        .then((res) => {
          if (res.data['Response'] == 'True') {
            commit('setSelected', res.data)
          }
        })
    }
  }
})
