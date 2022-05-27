import Vue from 'vue'
import App from './App.vue'

import router from '../router/index'  //importamos el archivo router

Vue.config.productionTip = false

new Vue({
  router, //lo agregamos al elemento como parametro
  render: h => h(App),
}).$mount('#app')
