import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store/index'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  axios,
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
