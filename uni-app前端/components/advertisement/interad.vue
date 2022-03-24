<template>
	<view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			var that = this;
			this.getconfig(() => {
				if (that.Insetid) {
					console.log(that.Insetid)
					that.inad();
				}
			})
		},
		methods: {
			inad: function() {
				var that = this;
				let InterstitialAd;
				if (uni.createInterstitialAd) {
					InterstitialAd = uni.createInterstitialAd({
						adUnitId: that.Insetid
					})
					InterstitialAd.onLoad(() => {})
					InterstitialAd.offClose();
					InterstitialAd.offError();
					InterstitialAd.onError((err) => {})
					InterstitialAd.onClose(() => {})
				}
				if (InterstitialAd) {
					setInterval(() => {
						InterstitialAd.show().catch((err) => {
							console.error(err)
						})
					}, 7000)
				}
			}
		}
	}
</script>

<style>

</style>
