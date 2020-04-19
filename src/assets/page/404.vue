<template>
	<div>
		<h1> 404 </h1>
		<label>页面不存在!</label>
		<a href="###" @click='back'>返回上个页面</a>
		<a href="###" @click='toLogin'>返回登录页面</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			toLogin() {
				this.$router.push('/');
			},
			back() {
				this.$router.history.go(-1);
			}
		},
	}
</script>

<style scoped>
	div {
		text-align: center;
	}

	h1 {
		text-align: center;
		font-size: 150px;
		color: #42B983;
		margin-top: 10%;
	}

	label {
		float: left;
		width: 100%;
		text-align: center;
		font-size: 20px;
		color: red;
	}

	a {
		height: 100px;
		line-height: 100px;
		margin-top: 20px;
		margin: 0 10px 0 10px;
	}
</style>
