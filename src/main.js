import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from './router/index.js'
import HotSell from '@/components/hotsell_nav/hotSell.vue'
import store from './Vuex/index.js'


//注册全局组件
Vue.component('HotSell',HotSell)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  router,
  store
}).$mount('#app')
