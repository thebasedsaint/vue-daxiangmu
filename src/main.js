import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.less'
import axios from 'axios'

//安裝elementUi
Vue.use(ElementUI)

//設置axios的BaseUrl
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/posts'
//將axios掛在到原型prototype上，全局使用
Vue.prototype.$http = axios

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
