import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from "./router";
import {store} from "./store";
import "./registerServiceWorker";
import jQuery from 'jquery'; 
// import firebase from 'firebase'; 

window.$ = window.jQuery = jQuery;

import 'popper.js'; 
import 'bootstrap'; 
import '../public/scss/app.scss';
import StoryblokVue from 'storyblok-vue';

Vue.use(Vuetify);

Vue.use(StoryblokVue)

Vue.component('NavBar', require('./components/NavBar').default);

Vue.config.productionTip = false;

window.eventBus = new Vue()
// export const eventBus = new Vue();
// export default eventBus;
// Vue.prototype.$eventBus = eventBus;


// export const config = {
//   apiKey: "AIzaSyCPY4gZqYGwnC2wUetdOUaRFoeLUtmXjVw",
//   authDomain: "mridustore.firebaseapp.com",
//   databaseURL: "https://mridustore.firebaseio.com",
//   projectId: "mridustore",
//   storageBucket: "mridustore.appspot.com",
//   messagingSenderId: "234274059906",
//   appId: "1:234274059906:web:23d2bf249936bc36"
// }

// firebase.initializeApp(config);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

