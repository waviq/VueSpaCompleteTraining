// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './route.js'

import VueResource from 'vue-resource'

Vue.use(VueResource)

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import './assets/custom.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: Router
})
