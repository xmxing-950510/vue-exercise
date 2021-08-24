// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import * as echarts from 'echarts';
import './assets/iconfont/iconfont.css'
import './assets/app.scss'
import store from './store'
Vue.use(ElementUI)

import VueCron from 'vue-cron'
Vue.use(VueCron)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
