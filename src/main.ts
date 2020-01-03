import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';

import './style/_reset.scss';
import { Toast, Button } from 'vant';

Vue.use(Toast).use(Button);

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: `<App/>`
});