// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './router/router.js'
import axios from "axios"




axios.defaults.baseURL = "https://wd1080820118dsbrnx.wilddogio.com/"

//将axios挂载到Vue中
Vue.prototype.axios = axios



//配置产生信息
Vue.config.productionTip = false


//使用路由插件
Vue.use(VueRouter)



//实例化路由
const router = new VueRouter({
	routes:Routes,
	mode:"history"
})


//全局守卫

// router.beforeEach((to,from,next) => {
// 	console.log(to)
// 	if(to.path == "/login" || to.path == "/register"){
// 		next();
// 	}else {
// 		alert("还没登录，请先登录！")
// 		next("/login")
// 	}
// })



//后置钩子

// router.afterEach((to,from) => {
// 	alert("after each")
// })

/* eslint-disable no-new */


//实例化Vue
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
