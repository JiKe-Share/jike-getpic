<template>
	<view>
		<view class="cu-modal" :class="imgshow?'show':''">
			<view class="cu-dialog">
				<view class="bg-img">
					<image :src="showimage" mode="widthFix"></image>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub" @tap="hide">取消</view>
					<view class="action margin-0 flex-sub  solid-left" @tap="saveshowimg">保存图片</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: "show-img",
		data() {
			return {
				imgshow: false,
				showimage: ''
			};
		},
		props: {

		},
		methods: {
			show(showimage) {
				if (showimage) {
					this.showimage = showimage;
					this.imgshow = true;
				}

			},
			hide() {
				this.imgshow = false;
			},
			saveshowimg() {
				var that = this;
				this.saveimg(this.showimage, function() {
					that.hide()
				})
			}
		}
	}
</script>

<style>
	.cu-dialog {
		border-radius: 15rpx;
		padding-top: 10rpx;
		background-color: #ffffff;
	}
</style>
