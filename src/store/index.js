import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		menuName: null,
		menuPath: null,
	},
	mutations: {
		breadcrumb(state, name, path) { //面包屑
			state.menuPath = path;
			state.menuName = name;
		}
	},
	actions: {},
	modules: {}
})
