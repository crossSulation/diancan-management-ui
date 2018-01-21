import Vue from 'vue'
import App from './App.vue'
import router from './route'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入font vue awesome
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon.vue'

import appconfig from './configs'

Vue.prototype.$appconfigs =appconfig;

Vue.component('icon',Icon)

Vue.use(ElementUI)

new Vue({
  el:'#app',
  data:{
    currentRoute: window.location.pathname
  },
  render: h => h(App),
  router
})
