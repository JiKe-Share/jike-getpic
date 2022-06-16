<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	@import "static/colorui/main.css";
	@import "static/colorui/icon.css";
	.slide-in-bottom {
		animation: slide-in-bottom 1.2s ease
	}
	@keyframes slide-in-bottom {
		0% {
			transform: translate(-50%, 1000rpx);
			opacity: 0
		}

		100% {
			transform: translate(-50%, 0);
			opacity: 1
		}
	}

	button::after {
		border: none;
	}

	button {
		padding-left: 0;
		padding-right: 0;
		line-height: inherit;
		width: 100%;
		text-align: center;
	}

	button {
		border-radius: 0;
	}
</style>
