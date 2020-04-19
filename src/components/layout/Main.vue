<template>
	<div class="page clearfix">

		<!-- 菜单 -->
		<div class="menu" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
		 element-loading-background="rgba(0, 0, 0, 0.8)">
			<div class="logo">VUE 管理系统</div>
			<menus ref="child" :data="menuJson"></menus>
		</div>

		<!-- 头部 -->
		<div class="header">
			<div class="breadcrumb">
				<h3 @click="toHome">首页</h3>
				<h3 v-if="menuName != undefined">/</h3>
				<h3>{{ menuName }}</h3>
			</div>
			<el-dropdown class="down_menu" @command="handleCommand">
				<span class="el-dropdown-link">
					<i class="iconfont icon-user"></i>
					Admin
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="editPwd">修改密码</el-dropdown-item>
					<el-dropdown-item command="signOut">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>

		<!-- 内容主区域 -->
		<div class="content" style="overflow-y: auto;">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	const menuJson = require("@/assets/api/menu.json"); //加载本地数据文件
	import menus from "./menu";

	export default {
		components: {
			menus: menus
		},
		data() {
			return {
				loading: false,
				menuJson: menuJson,
				menuName: undefined,
			};
		},
		methods: {
			handleCommand(command) {
				switch (command) {
					case 'editPwd':
						break;
					case 'signOut':
						this.$router.push('/');
						break;
					default:
				}
			},
			toHome() {
				this.$refs.child.resetMenu(); //调用子组件函数
				this.$router.push("/home");
			},
			submitForm() {},
			getMenu() {}, //获取菜单列表
			successMessage(title, msg) {},
			errorMessage(title, msg) {}
		},
		computed: {},
		watch: {
			'$store.state.menuName': function(newName, oldName) {
				this.menuName = newName;
			}
		},
		mounted: function() {
			this.menuName = sessionStorage.getItem('menuName');
		},
		created: function() {}
	};
</script>

<style scoped>
	.page {
		width: 100%;
		height: 100%;
		min-width: 1280px;
	}

	.header {
		float: left;
		height: 50px;
		width: calc(100% - 202px);
		background: white;
	}

	.menu {
		width: 200px;
		height: 100vh;
		float: left;
		overflow: auto;
		background-color: #282c34;
	}

	.menu::-webkit-scrollbar {
		display: none;
	}

	.menu .logo {
		width: 100%;
		height: 55px;
		background: #21252b;
		text-align: center;
		line-height: 55px;
		font-size: 18px;
		color: #f1f1f1;
	}

	.content {
		float: left;
		height: 100vh;
		width: calc(100% - 201px);
		height: calc(100vh - 59px);
		box-sizing: border-box;
		/* overflow-y: hidden; */
		overflow-x: hidden;
		background-color: #f5f7f9;
		margin-top: 3px;
		/* overflow-y:auto; */
	}

	.breadcrumb {
		float: left;
		height: 50px;
		line-height: 49px;
	}

	.breadcrumb h3 {
		float: left;
		margin-left: 20px;
		font-weight: 500;
		cursor: pointer;
	}

	.down_menu {
		float: right;
		height: 50px;
		line-height: 50px;
		margin-right: 10px;
		cursor: pointer;
		font-size: 20px;
		color: #555;
	}
</style>
