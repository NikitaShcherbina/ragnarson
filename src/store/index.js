import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentCart: '',
      previousCart: '',
      desk_id: null
  },
  mutations: {
      setDeskId (state, payload) {
          state.desk_id = payload
      },
      setCurrentCart (state, payload) {
          state.currentCart = payload
      },
      setPreviousCart (state, payload) {
          state.previousCart = payload
      }
  },
  actions: {
      getDesk({commit, dispatch}) {
          axios
              .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
              .then(response => {
                  console.log(response)
                  commit('setDeskId', response.data.deck_id)
                  dispatch('getCart')
              })
      },
      getCart({commit, state}) {
          state.currentCart && commit('setPreviousCart', state.currentCart)
          return axios
              .get(`https://deckofcardsapi.com/api/deck/${state.desk_id}/draw/?count=1`)
              .then(response => {
                  console.log(response)
                  commit('setCurrentCart', response.data.cards[0])
              })
      }
  },
  modules: {
  }
})
