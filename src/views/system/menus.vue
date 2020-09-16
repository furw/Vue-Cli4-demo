<template>
	<div id="_body">

		<header>
			<el-button type="primary" v-has="'add'">新增</el-button>
			<el-button type="success" v-has="'select'">查询</el-button>
			<el-button type="warning" v-has="'edit'">编辑</el-button>
			<el-button type="danger" v-has="'delete'">删除</el-button>
		</header>

		<section>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="id" label="id" width="120">
				</el-table-column>
				<el-table-column prop="label" label="菜单名称" width="200">
				</el-table-column>
				<el-table-column prop="perUrl" label="菜单地址" width="260">
				</el-table-column>
				<el-table-column prop="permTypes" label="菜单权限" width="260">
				</el-table-column>
				<el-table-column prop="icon" label="菜单图标" width="240">
				</el-table-column>
				<el-table-column prop="state" label="状态" width="200">
				</el-table-column>
			</el-table>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					id: '1',
					label: '角色管理',
					perUrl: '/system/menus',
					permTypes: '["add", "delete","edit"]',
					icon: "el-icon-document",
					state: '1'
				}, {
					id: '2',
					label: '角色管理',
					perUrl: '/system/menus',
					permTypes: '["add", "delete","edit"]',
					icon: "el-icon-document",
					state: '1'
				}, {
					id: '3',
					label: '角色管理',
					perUrl: '/system/menus',
					permTypes: '["add", "delete","edit"]',
					icon: "el-icon-document",
					state: '1'
				}, {
					id: '4',
					label: '角色管理',
					perUrl: '/system/menus',
					permTypes: '["add", "delete","edit"]',
					icon: "el-icon-document",
					state: '1'
				}, {
					id: '5',
					label: '角色管理',
					perUrl: '/system/menus',
					permTypes: '["add", "delete","edit"]',
					icon: "el-icon-document",
					state: '1'
				}]
			};
		},
		methods: {}
	};
</script>

<style scoped>
	header {
		display: flex;
		flex-direction: row;
		margin-top: 50px;
	}

	section {
		margin-top: 30px;
	}
</style>
