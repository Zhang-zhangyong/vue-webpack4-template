import Vue from 'vue';
import Router from 'vue-router';

// 路由按需加载(懒加载)的三种方式
const Index = () => import(/* webpackChunkName: "Index" */ '../views/index.vue'); 
const Article = () => import(/* webpackChunkName: "Article" */ '../views/article.vue'); 
// const Home = r => require.ensure([], () => r(require('../components/Home.vue')), 'home');
// const Home = resolve => require(['../components/Home.vue'],resolve);

import Detail from '../components/Detail.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
    },
  ]
});
