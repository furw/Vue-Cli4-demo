<template>
	<div id="_body">
		<h2>当前环境 {{ url }} </h2>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url: process.env.VUE_APP_URL
			};
		},
		methods: {}
	};
</script>

<style scoped>

</style>
