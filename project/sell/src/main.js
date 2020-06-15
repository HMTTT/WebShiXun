// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Resource from 'vue-resource'
Vue.config.productionTip = false

Vue.use(Resource)
Vue.use(Router)
//    关闭生产模式下的提示
Vue.config.productionTip = false
/* eslint-disable no-new */
//定义路由页面
const routes = [
]

const router = new Router({
	routes
})

let app = new Vue({
	el:"#app",
	router,
	//渲染视图
	render:h => h(App)
})

Vue.use({
	app
})
