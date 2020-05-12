// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/iconfont.css'
// 解决移动端css不统一的问题
import './assets/styles/reset.css'
// 解决移动端1像素框的问题
import './assets/styles/border.css'
// 解决移动端点击会延迟300ms的问题，安装fastclick库
// import fastClick from 'fastclick'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
