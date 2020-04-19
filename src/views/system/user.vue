<template>
	<div id='_body'>

		<header>
			<el-input v-model="input" style="width: 300px;margin-right: 20px;" placeholder="请输入内容"></el-input>
			<el-button type="success">查询</el-button>
			<el-button type="primary">新增</el-button>
			<el-button type="warning">编辑</el-button>
			<el-button type="danger">删除</el-button>
		</header>

		<section>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="id" label="id" width="80">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="150">
				</el-table-column>
				<el-table-column prop="sex" label="性别" :formatter="formatFun" width="150">
				</el-table-column>
				<el-table-column prop="age" label="年龄" width="150">
				</el-table-column>
				<el-table-column prop="email" label="邮箱" width="240">
				</el-table-column>
				<el-table-column prop="phone" label="手机" width="210">
				</el-table-column>
				<el-table-column prop="address" label="地址">
				</el-table-column>
			</el-table>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
				tableData: [{
					id: '1',
					name: '王小虎',
					sex: 1,
					age: 24,
					email: 'wangxiaohu@gmail.com',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					id: '2',
					name: '王小虎',
					sex: 1,
					age: 24,
					email: 'wangxiaohu@gmail.com',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					id: '3',
					name: '王小虎',
					sex: 1,
					age: 24,
					email: 'wangxiaohu@gmail.com',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					id: '4',
					name: '王小虎',
					sex: 0,
					age: 24,
					email: 'wangxiaohu@gmail.com',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					id: '5',
					name: '王小虎',
					sex: 1,
					age: 24,
					email: 'wangxiaohu@gmail.com',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					id: '6',
					name: '王小虎',
					sex: 0,
					age: 24,
					email: 'wangxiaohu@gmail.com',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					id: '7',
					name: '王小虎',
					sex: 1,
					age: 24,
					email: 'wangxiaohu@gmail.com',
					phone: '18888888888',
					address: '上海市普陀区金沙江路 1518 弄',
				}]
			};
		},
		methods: {
			formatFun(row, column) { //数据转换
				return row.sex == 1 ? "男" : "女";
			}
		}
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
