// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Toaster from 'v-toaster'

import 'vuetify/dist/vuetify.min.css'
import 'v-toaster/dist/v-toaster.css'

Vue.use(Vuetify)
Vue.use(Toaster)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
