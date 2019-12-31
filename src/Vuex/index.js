import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'
import getters from './getters.js'
import Hotsell from './modules/hotsell.js'
import list from './modules/list.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  modules:{
    Hotsell,
    list
  }
})