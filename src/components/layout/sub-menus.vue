<template>
	<el-submenu :index="data.id" v-if="data.children != null ">
		<span slot="title"><i class="menuImage"></i><i :class="data.icon"></i>{{data.label}}</span>
		<template v-for="obj in data.children">
			<sub-menu :data="obj" :key="obj.id"></sub-menu>
		</template>
	</el-submenu>

	<el-menu-item :index="data.id" @click='changeRoute(data)' v-else>
		<i :class="data.icon"></i>{{data.label}}
	</el-menu-item>
</template>
<script>
	import subMenu from './sub-menus'
	export default {
		name: 'subMenu',
		props: ['data'],
		components: {
			subMenu
		},
		methods: {
			changeRoute(data) {
				sessionStorage.setItem('menuId', data.id);
				sessionStorage.setItem('menuName', data.label);
				localStorage.setItem('displayButtonList', data.permTypes);

				this.$store.commit('breadcrumb', data.label, data.perUrl);
				this.$router.push(data.perUrl);
			}
		},
		mounted: function() {},
		created: function() {}

	}
</script>
