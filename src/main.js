import Vue from 'vue'
import App from './App.vue'
import router from './router'

import $htttp from './service/index'

Vue.prototype.$http = $htttp;

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: `<App/>`
})