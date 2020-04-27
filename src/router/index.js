import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainList from '../components/MainList.vue'
import ListItem from '../components/ListItem.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    // name: 'home',
    component: Home,
    children: [{
      path: '',
      component: MainList,
      children: [{
        path: '',
        name: 'home',
        component: ListItem
      }]
    }]
  }, {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router