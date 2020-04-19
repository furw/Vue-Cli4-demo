import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
import Main from '@/components/layout/Main.vue'
import _404 from '@/assets/page/404.vue'
import Menus from '@/views/system/menus.vue'
import Role from '@/views/system/role.vue'
import Home from '@/views/home/index.vue'
import Log from '@/views/system/log.vue'
import Dictionary from '@/views/system/dictionary.vue'
import Param from '@/views/system/param.vue'
import User from '@/views/system/user.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/main',
		name: 'main',
		component: Main,
		redirect: '/home', //重定向
		children: [{
			path: '/home',
			name: 'home',
			component: Home
		}, {
			path: '/system/menus',
			name: 'menus',
			component: Menus
		}, {
			path: '/system/role',
			name: 'role',
			component: Role
		}, {
			path: '/system/user',
			name: 'user',
			component: User
		}, {
			path: '/system/param',
			name: 'param',
			component: Param
		}, {
			path: '/system/dictionary',
			name: 'dictionary',
			component: Dictionary
		}, {
			path: '/system/log',
			name: 'log',
			component: Log
		}]
	},
	{
		path: '/_404',
		name: '_404',
		component: _404,
	}
]

const router = new VueRouter({
	// mode: 'history',
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

// 路由前置守卫
router.beforeEach(function(to, from, next) {
	if (to.name == null) {
		router.push('/_404');
		return;
	}
	next();
});

export default router
