import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios';
import store from './store'
// 挂载到vue原型链上
Vue.prototype.axios = axios;


Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if(!window.sessionStorage.token&&to.name!=='login'){
    next({name:'login'})
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

