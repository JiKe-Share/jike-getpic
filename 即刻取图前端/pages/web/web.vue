<template>
	<view>
		<web-view :src="url"></web-view>
		<interad></interad>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
			}
		},
		onLoad(e) {
			this.url = uni.getStorageSync('weburl')
			console.log(this.url)
			this.getconfig()
		},
		onShow() {
			var that = this;
			//#ifdef MP-WEIXIN
			wx.showShareMenu({
				withShareTicket: false,
				menus: ['shareAppMessage', 'shareTimeline'],
			})
			//#endif
		},
		onHide() {},
		methods: {}
	}
</script>

<style>

</style>
