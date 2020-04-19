import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '../http.js'
import './assets/base.css'
import ElementUI from 'element-ui'; //引入组件
import 'element-ui/lib/theme-chalk/index.css';
import hasPermission from '@/components/libs/hasPermission' //按钮权限

Vue.use(ElementUI); //使用组件
Vue.use(hasPermission);

Vue.prototype.$http = axios; //使用Vue.prototype实现全局变量

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
