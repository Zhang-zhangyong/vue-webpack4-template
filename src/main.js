import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';

// import './style/reset.css';
import './style/_reset.scss';
// import { resizeFontSize } from './utils/index';
import { Toast, Button } from 'vant';

// window.onresize = resizeFontSize;
// resizeFontSize();
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