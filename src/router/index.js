import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../components/Home.vue';

// 路由按需加载(懒加载)的三种方式
// const Home = () => import('../components/Home.vue'); 
// const Home = r => require.ensure([], () => r(require('../components/Home.vue')), 'home');
const Home = resolve => require(['../components/Home.vue'],resolve);

import Detail from '../components/Detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ]
});
