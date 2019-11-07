import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ]
})
