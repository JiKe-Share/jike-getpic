<template>
	<view>
		<view class="right-bottom">
			<button class="wlapp-item" v-for="(item,index) in wlapp" v-if="item['wlapp-show']!=0"
				@tap="gowlapp(index,item)" :key="index">
				<u--image :src="item['wlapp-icon']['url']" :showLoading="true" mode="widthFix" width="100%"
					height="auto"></u--image>
			</button>
			<!-- #ifndef MP-KUAISHOU -->
			<button class="wlapp-item" open-type="contact">
				<u--image src="/static/img/showkefu.png" :showLoading="true" mode="widthFix" width="100%" height="auto">
				</u--image>
			</button>
			<!-- #endif -->
		</view>
		<showImg ref="showImg"></showImg>
	</view>
</template>
<script>
	export default {
		name: "Pendant",
		data() {
			return {
				wlapp: []
			};
		},
		mounted() {
			this.getwlapp();
		},
		methods: {
			async getwlapp() {
				let that = this;
				let ret = await this.$get(that.setapi + 'wlapp', {}).then((ret) => {
					if (ret.code == 1) {
						this.setData(ret.data);
						console.log(ret.data)
					}
				}).catch(() => {})
			},
		}
	}
</script>

<style>
	.right-bottom {
		position: fixed;
		right: 0rpx;
		bottom: 250rpx;
		width: 100rpx;
		border-radius: 20rpx 0 0 20rpx;
		background-color: #ffffff;
		z-index: 99;
		text-align: center;
		opacity: .8;
	}
	.wlapp-item {
		width: 80%;
		margin: 10rpx auto;
		border-radius: 15rpx;
		overflow: hidden;
		height: auto;
	}
</style>
