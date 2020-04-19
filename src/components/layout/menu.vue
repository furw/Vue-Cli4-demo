<template>
	<div class="left-nav">
		<!-- :default-openeds="data && data[0] && [data[0].id]" 默认展开列表 -->
		<el-menu :default-active='active' :default-openeds='arr' unique-opened background-color="#2b2e3b" text-color="#ccc"
		 active-text-color="#fff">
			<template v-for="item in data">
				<sub-menu :data="item" :key="item.id"></sub-menu>
			</template>
		</el-menu>
	</div>
</template>
<script>
	import subMenu from './sub-menus'

	export default {
		components: {
			subMenu
		},
		props: ['data'],
		data() {
			return {
				active: '',
				arr: []
			}
		},
		methods: {
			resetMenu() {
				this.active = '';
				this.arr = [];
				sessionStorage.removeItem('menuId')
				sessionStorage.removeItem('menuName');
				this.$store.commit('breadcrumb', null, null);
				 
			}
		},
		mounted: function() {
			this.active = sessionStorage.getItem('menuId');
		},
		created: function() {}
	}
</script>
<style>
	.el-menu {
		border: none;
	}

	.el-menu .is-active {
		background: #A52A2A !important;
		background: #409EFF !important;
	}
</style>
