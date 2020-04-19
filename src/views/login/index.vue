<template>
	<div class="_body">
		<section>
			<el-form :model="user" status-icon :rules="rules" ref="userForm" label-width="70px">
				<el-form-item style label="用户名" prop="name">
					<el-input type="userName" v-model="user.name"></el-input>
				</el-form-item>
				<el-form-item label="密  码" prop="password">
					<el-input type="password" v-model="user.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('userForm')">登录</el-button>
					<el-button @click="resetForm('userForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: "",
					password: ""
				},
				rules: {
					name: [{
						required: true,
						message: "请填写用户名",
						trigger: "change"
					}],
					password: [{
						required: true,
						message: "请填写密码",
						trigger: "change"
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						console.log("submit!");
						this.$router.push("/main");
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	};
</script>

<style scoped>
	._body {
		display: flex;
		justify-content: center;
		align-content: center;
		height: 100vh;
		background-color: #282c34;
	}

	section {
		height: 160px;
		width: 350px;
		padding: 50px;
		margin: auto;
		background-color: #f5f5f5;
	}
</style>
