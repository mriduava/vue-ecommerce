import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {store} from "./store";
import "./registerServiceWorker";
import jQuery from 'jquery'; 

window.$ = window.jQuery = jQuery;

import 'popper.js'; 
import 'bootstrap'; 
import '../public/scss/app.scss';
import StoryblokVue from 'storyblok-vue';


Vue.use(StoryblokVue)

Vue.component('NavBar', require('./components/NavBar').default);

Vue.config.productionTip = false;

window.eventBus = new Vue()
// export const eventBus = new Vue();
// export default eventBus;
// Vue.prototype.$eventBus = eventBus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

