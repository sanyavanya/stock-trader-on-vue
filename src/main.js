import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import { store } from './store/store.js'
import { routes } from './routes.js'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = "https://stock-trader-on-vue-default-rtdb.firebaseio.com/";

const router = new VueRouter({
  routes,
  // mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')