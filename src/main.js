import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeList from './routes/routes.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routeList
})

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
