//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/styles/reset.css'
import './assets/styles/border.css'
//1px border => 多px border

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
