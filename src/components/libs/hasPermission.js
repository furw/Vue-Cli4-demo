const hasPermission = {
	install(Vue, options) {
		Vue.directive('has', {
			bind(el, binding, vnode) {
				let permTypes = localStorage.getItem('displayButtonList');
				if (permTypes != null) {
					if (!permTypes.includes(binding.value)) {
						Vue.nextTick(function() {
							el.parentNode.removeChild(el);
						})
					}
				}
			}
		});
	}
};

export default hasPermission;
