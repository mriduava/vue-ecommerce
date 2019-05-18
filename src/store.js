import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from 'vue-axios';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
Vue.use(VueAxios, axios)



export const store = new Vuex.Store({
  state: {
    womenData: [],
    menData: [],
    sendData: []
  },
  getters: {
    allWomenData: state => {
      return state.womenData
    },
    allMenData: state => {
      return state.menData
    },
 
    dataItems: state => {
      return state.sendData.map(cartitem=> cartitem.product)
    }
  },
  mutations: {
    GET_WOMEN: (state, girlsData) => {
      state.womenData = girlsData
    },
    GET_MEN: (state, manData) => {
      state.menData = manData
    }
  },
  actions: {
    getStoryWomenData({commit}) {
      let token = 'vzwC59CqmD9irvJTGSQVKAtt'
      axios.get(`https://api.storyblok.com/v1/cdn/stories?version=draft&token=${token}&starts_with=women`).then(res => {        
      commit('GET_WOMEN', res.data.stories);
      })
    },

    getStoryMenData({commit}) {
      let token = 'vzwC59CqmD9irvJTGSQVKAtt'
      axios.get(`https://api.storyblok.com/v1/cdn/stories?version=draft&token=${token}&starts_with=men`).then(res => {        
      commit('GET_MEN', res.data.stories);
      })
    }
  },

  plugins: [createPersistedState()]

});
