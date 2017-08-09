// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import AutocompleteInput from '@/components/common/AutocompleteInput'
import Popup from '@/components/common/Popup'
// import vSelect from 'vue-select'

Vue.config.productionTip = false

Vue.component('autocomplete-input', AutocompleteInput)
// Vue.component('v-select', vSelect)
Vue.component('popup', Popup)

Vue.use(VueResource)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
