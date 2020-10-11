import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import ElementUI from 'element-ui'
import './scss/index.scss'

import './permission'

Vue.use(ElementUI, { size: 'small' })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
