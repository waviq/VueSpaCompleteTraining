import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/authentification/Login.vue'
import Register from './components/authentification/Register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

export default router
