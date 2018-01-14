import Vue from 'vue'
import App from './App.vue'
import router from './route'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el:'#app',
  data:{
    currentRoute: window.location.pathname
  },
  render: h => h(App),
  router
})
