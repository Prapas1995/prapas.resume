import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/img/img-not-found.jpg',
  loading: '/img/loading-spin.svg',
  attempt: 1
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
