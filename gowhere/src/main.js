//入口文件
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import './assets/styles/reset.css'
import './assets/styles/border.css'
//1px border => 多px border
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
