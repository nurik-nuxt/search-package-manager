import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vClickOutside from 'v-click-outside'

Vue.config.productionTip = false

new Vue({
  store,
  vClickOutside,
  render: h => h(App),
}).$mount('#app')
