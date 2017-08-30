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
import vSelect from 'vue-select'
import VeeValidate from 'vee-validate'
import Icon from 'vue-awesome/components/Icon'
import Datepicker from 'vuejs-datepicker'
import VueFroala from 'vue-froala-wysiwyg'
import VueEditor from 'vue2-editor'

Vue.config.productionTip = false

Vue.component('autocomplete-input', AutocompleteInput)
Vue.component('icon', Icon)
Vue.component('v-select', vSelect)
Vue.component('popup', Popup)
Vue.component('datepicker', Datepicker)

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.use(VueFroala)
Vue.use(VueEditor)

// Vue.http.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
