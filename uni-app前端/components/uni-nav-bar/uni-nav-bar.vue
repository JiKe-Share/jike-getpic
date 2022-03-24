<template>
	<view>
		<view class="uni-navbar" v-if="fixed==1">
			<view class="uni-navbar__content" :style="{ height: statusBarHeight}">
				<view :style="{ height: statusBarH }"></view>
				<view class="uni-navbar__header uni-navbar__content_view">
					<button open-type="share" class="cu-btn custom-style" hover-class="">
						<view class="cuIcon-share lg text-gray"></view>
						<view class="uni-navbar-fenxiang">分享</view>
					</button>
					<view class="uni-navbar__header-container" @tap="gosousuo">
						<view type="text" class="ss">
							<view class="iconfont iconfont-sousuo texts"></view>
							<view class="texts">搜图</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bar-hei" :style="{ height: statusBarHeight}"></view>
		</view>

		<view class="uni-navbar" v-if="fixed==2">
			<view class="uni-rects">
				<view class="rects" :style="{top:rectTop,left:rectLeft,width:rectWidth,height:rectHeight}">
					<view class="cuIcon-roundleftfill-copy lg text-gray" :style="{lineHeight:rectHeight}" @tap="goback">
					</view>
					<view class="cuIcon-radioboxfill lg text-gray" :style="{lineHeight:rectHeight}" @tap="goindex">
					</view>
				</view>
			</view>
		</view>
		<view class="uni-navbar" v-if="fixed==3">
			<view class="uni-navbar__content" :style="{ height: statusBarHeight}">
				<view :style="{ height: statusBarH }"></view>
				<view class="uni-rects">
					<view class="rects" :style="{top:rectTop,left:rectLeft,width:rectWidth,height:rectHeight}">
						<view class="cuIcon-roundleftfill-copy lg text-gray" :style="{lineHeight:rectHeight}"
							@tap="goback"></view>
						<view class="cuIcon-radioboxfill lg text-gray" :style="{lineHeight:rectHeight}" @tap="goindex">
						</view>
					</view>
					<view class="uni-title">{{title}}</view>
				</view>
			</view>
			<view class="bar-hei" :style="{ height: statusBarHeight}"></view>
		</view>
	</view>
</template>
<script>
	var rect = wx.getMenuButtonBoundingClientRect();
	var win = uni.getSystemInfoSync();
	export default {
		name: "UniNavBar",
		data() {
			return {
				statusBarHeight: this.getBarHeight(50) + 'rpx',
				statusBarH: this.getBarHeight() + 'rpx',
				rectTop: this.getRpx(rect.top) + 'rpx',
				rectWidth: this.getRpx(rect.width) + 'rpx',
				rectHeight: this.getRpx(rect.height) + 'rpx',
				rectLeft: this.getRpx(win.screenWidth - rect.right) + 'rpx',
			}
		},
		props: {
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: ""
			},
			rightIcon: {
				type: String,
				default: ""
			},
			fixed: {
				type: [Boolean, String],
				default: false
			},
			color: {
				type: String,
				default: "#000000"
			},
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
			statusBar: {
				type: [Boolean, String],
				default: false
			},
			shadow: {
				type: [Boolean, String],
				default: false
			},
			border: {
				type: [Boolean, String],
				default: true
			}
		},
		mounted() {
			if (uni.report && this.title !== '') {
				uni.report('title', this.title)
			}
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
	$nav-height: 90rpx;
	.rects {
		background-color: #f5f5f5bb;
		border-radius: 50rpx;
		position: fixed;
		z-index: 9999;
		border: 2rpx #afafaf solid;
		display: flex;
		justify-content: space-around;
		// box-sizing: border-box;
	}
	.cuIcon-roundleftfill-copy {
		display: inline-block;
		width: 48%;
		text-align: center;
		font-size: 42rpx;
		height: 100%;
		color: #2a2a2a;
	}
	.cuIcon-radioboxfill {
		display: inline-block;
		width: 48%;
		font-size: 42rpx;
		text-align: center;
		height: 100%;
		color: #2a2a2a;
	}
	.uni-navbar__content {
		position: fixed;
		top: 0rpx;
		background-color: $uni-bg-color;
		overflow: hidden;
		z-index: 99999;
		width: 100%;
		// width: 750rpx;
	}
	.uni-navbar__header {
		height: $nav-height;
		line-height: $nav-height;
		font-size: 32rpx;
		// background-color: #ffffff;
	}

	.custom-style {
		width: 100rpx;
		padding: 0;
		word-wrap: break-word;
		text-align: center;
		background-color: transparent;
		display: inline-block;
		vertical-align: top;
	}

	.custom-style::after {
		border: none;
	}

	.cuIcon-share {
		display: block;
		height: 40rpx;
		padding: 0rpx;
		font-size: 40rpx;
		margin-top: 5rpx;
		color: #2a2a2a;
	}

	.uni-navbar-fenxiang {
		display: block;
		font-size: 20rpx;
		height: 25rpx;
		margin-top: 5rpx;
	}

	.uni-navbar__header-container {
		display: inline-block;
		vertical-align: top;
		padding: 10rpx 0rpx;
		width: 450rpx;
		text-align: center;
	}

	.uni-navbar__header-container .ss {
		background-color: #f0f0f0;
		height: 60rpx;
		border-radius: 8rpx;
		padding: 0rpx;
	}

	.ss .texts {
		display: inline-block;
		height: 100%;
		vertical-align: top;
		margin-top: -15rpx;
		color: #8a8a8a;
		vertical-align: top;
		font-size: 28rpx;
	}

	.iconfont-sousuo {
		margin-right: 10rpx;
	}

	.bar-hei {
		background-color: #ffffff;
	}

	.uni-rects {
		text-align: center;
	}

	.uni-title {
		width: 60%;
		height: 80rpx;
		margin: auto;
		line-height: 80rpx;
		font-weight: 700;
		overflow: hidden;
	}
</style>
