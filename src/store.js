import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    sendData: []
  },
  getters: {
    dataItems: state => {
      return state.sendData.map(cartitem=> cartitem.product)
    }

  },
  mutations: {},
  actions: {}

});
