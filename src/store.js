import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios)



export const store = new Vuex.Store({
  state: {
    storyData: [],
    sendData: []
  },
  getters: {
    allStoryData: state => {
      return state.storyData
    },
 
    dataItems: state => {
      return state.sendData.map(cartitem=> cartitem.product)
    }
  },
  mutations: {
    GET_STORY: (state, storyData) => {
      state.storyData = storyData
    }
  },
  actions: {
    getStoryblokData({commit}) {
      let token = 'vzwC59CqmD9irvJTGSQVKAtt'
      axios.get(`https://api.storyblok.com/v1/cdn/stories?version=draft&token=${token}&starts_with=women`).then(res => {        
      commit('GET_STORY', res.data.stories);
      })

    }
  }

});
