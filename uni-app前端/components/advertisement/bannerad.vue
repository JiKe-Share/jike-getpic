<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
		<view v-if="Banner" class="ad-class" :style="'margin:'+marginTop+' 0 '+marginBottom+';'">
			<ad-custom :unit-id="Banner" :style="'width:'+adw+'!important;'"></ad-custom>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-TOUTIAO -->
		<view v-if="Banner" class="ad-class" :style="'margin:'+marginTop+' 0 '+marginBottom+';'">
			<ad type="banner video large lImg rImg" :style="'width:'+adw+'!important;'" :unit-id="Banner"></ad>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		name: "bannerID",
		props: {
			marginTop: {
				type: String,
				default: "0"
			},
			marginBottom: {
				type: String,
				default: "0"
			},
			adw: {
				type: String,
				default: "100%"
			},
		},
		data() {
			return {
			};
		},
		mounted() {
			var that = this;
			this.getconfig()
		}
	}
</script>

<style>
	.ad-class {
		width: 100%;
	}
</style>
