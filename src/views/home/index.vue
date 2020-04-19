<template>
	<div id="_body">

		<h1>首页</h1>

		<section>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus minima repellat libero pariatur quaerat iure
				minus rem possimus reiciendis rerum esse voluptatem autem perferendis cupiditate quisquam placeat neque nesciunt.
				Dolorem nihil atque accusamus asperiores adipisci soluta nesciunt sint consequatur sit suscipit praesentium aliquid
				quos tenetur odio ullam nulla vitae itaque tempore velit facilis blanditiis temporibus libero maxime eius quisquam
				repellendus sunt rem eligendi neque corporis minima tempora expedita ut quasi sed repudiandae reprehenderit
				explicabo. Quaerat rem repudiandae commodi harum eius esse unde? Itaque necessitatibus error quis recusandae velit
				earum laborum corrupti autem delectus ducimus aut saepe aspernatur atque sit provident.
			</p>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {},
		mounted() {}
	};
</script>

<style scoped>
	section {
		display: flex;
		flex-direction: row;
	}

	section div {
		width: 200px;
		height: 100px;
		margin: 20px;
		border-radius: 10px;
	}

	p {
		line-height: 50px;
		font-size: 23px;
	}
</style>
