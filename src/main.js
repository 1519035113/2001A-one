import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入axios
import axios from './utils/request'
Vue.prototype.$axios = axios

// 配置Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 配置echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 引入样式文件
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
