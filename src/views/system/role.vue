<template>
	<div id='_body'>

		<header>
			<el-button type="primary">新增</el-button>
			<el-button type="success">查询</el-button>
			<el-button type="warning">编辑</el-button>
			<el-button type="danger">删除</el-button>
		</header>

		<section>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="roleName" label="角色名称">
				</el-table-column>
				<el-table-column prop="state" label="状态">
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
					roleName: '超级管理员',
					state: 2
				}, {
					roleName: '超级管理员',
					state: 2
				}, {
					roleName: '超级管理员',
					state: 2
				}, {
					roleName: '超级管理员',
					state: 2
				}, {
					roleName: '超级管理员',
					state: 2
				}, {
					roleName: '超级管理员',
					state: 2
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
