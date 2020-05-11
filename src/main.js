import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import Login from './components/login/Login.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/login', 
    component: Login
  },
  {
    path: '/', 
    component: Home
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
