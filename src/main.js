import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeList from './routes/routes.js'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
var ioInstance = socketio('http://localhost:8080')
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(VueSocketio, 'http://localhost:8080')
Vue.use(VueSocketio, ioInstance)

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
  components: { App },
  sockets: {
    dataSent: function (val) {
      console.log('emit got')
    },
    valueChanged: function (val) {
      console.log('emit got')
      this.$socket.emit('change', val)
      console.log('response emit sent')
    }
  }
}).$mount('#app')
