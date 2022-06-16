<template>
	<view>
		<!-- #ifndef MP-TOUTIAO -->
		<uniNavBar fixed="2"></uniNavBar>
			<!-- #endif 	 -->
		
		<view v-if="itvideo"><video class="dtbz" :src="itvideo" :autoplay="true" object-fit="cover" ></video></view>
		<view v-else-if="images&&images.length!=0" :style="{paddingTop:topx}">
			<view v-if="images.length==1">
				<u--image :showMenuByLongpress="false" :src="images[0]" :fade="true" width="100%" mode="widthFix"
					height="auto">
				</u--image>
			</view>
			<view v-else>
				<u-swiper :indicator="true" :list="images" :height="imgH" :indicatorActiveColor="xcxColor" imgMode="widthFix" 
					:autoplay="true" interval="4000" radius="5" :circular="true" bgColor="#ffffff">
				</u-swiper>
			</view>
		</view>
		
		
		<u-empty icon="/static/img/noimg.png" v-else-if="!loads" marginTop="150" iconSize="100" textSize="16"
			textColor="#9a9a9a" text="这张图不见了,联系客服解决吧">
		</u-empty>
		<view v-if="!loads">
			<view class="control slide-in-bottom" v-if="itvideo">
				<button class="control-center contorl-v  bg-gradual-red" @tap="savevideoAD">
					<u-icon color="#ffffff" labelColor="#ffffff" :label="downtext" size="25"
						:name="videoAd?'play-circle':'photo'"></u-icon>
				</button>
				<button open-type="share" class="control-right contorl-v bg-gradual-green">
					<u-icon color="#ffffff" size="30" name="share-square"></u-icon>
				</button>
			</view>
			<view class="control slide-in-bottom" v-else-if="images&&images.length!=0">
				<button class="control-left contorl-v bg-grey" v-if="Vague==1" @tap="savearrimg(dimgs)">
					<u-icon size="25" color="#ffffff" space="0" label="模糊下载" name="photo" labelColor="#ffffff"></u-icon>
				</button>
				<button class="control-center contorl-v  bg-gradual-red" @tap="savehimg">
					<u-icon color="#ffffff" labelColor="#ffffff" :label="downtext" size="25"
						:name="videoAd?'play-circle':'photo'"></u-icon>
				</button>
				<button open-type="share" class="control-right contorl-v bg-gradual-green">
					<u-icon color="#ffffff" size="30" name="share-square"></u-icon>
				</button>
			</view>
			<view class="control slide-in-bottom" v-else>
				<button open-type="contact" class="control-center contorl-v  bg-gradual-red">
					<u-icon color="#ffffff" labelColor="#ffffff" label="联系客服" size="30" name="server-man"></u-icon>
				</button>
				<button class="control-right contorl-v bg-gradual-green" @tap="showewm">
					<u-icon color="#ffffff" size="30" name="weixin-fill"></u-icon>
				</button>
			</view>
		</view>
		<interad></interad>
		<Pendant></Pendant>
		<showImg ref="showImg"></showImg>
		<u-loading-page loading-mode="spinner" :loading="loads" loadingText="加载中"></u-loading-page>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				sys: uni.$u.sys(),
				topx: 0,
				imgH: 500,
				downtext: '下载高清图',
				showkfwx: false,
				loads: true,
				videoAd: '',
				images: [],
				itvideo:''
			}
		},
		onLoad(o) {
			let that = this;
			this.getpost(o.id)
			this.getconfig(() => {
				console.log(that.Rewarded)
				if (that.Rewarded) {
					that.CreateAd();
				}
			})
		},
		onShow() {
			// 微信分享盆友圈
			//#ifdef MP-WEIXIN
			wx.showShareMenu({
				withShareTicket: false,
				menus: ['shareAppMessage', 'shareTimeline'],
			})
			//#endif
		},
		onShareAppMessage() {
			let that = this;
			return {
				title: that.title + ' - ' + that.xcxtitle, // 默认为小程序名称，可自定义
				path: '/pages/post/post?id=' + that.id, // 默认为当前页面路径，一般无需修改，QQ小程序不支持
				imageUrl: that.cover
			}
		},
		// 微信分享盆友圈|收藏
		//#ifdef MP-WEIXIN
		onShareTimeline() {
			var that = this;
			return {
				title: that.title + ' - ' + that.xcxtitle,
				imageUrl: that.cover,
				query: 'id=' + that.id
			}
		},
		onAddToFavorites() {
			var that = this;
			return {
				title: that.title + ' - ' + that.xcxtitle,
				imageUrl: that.cover,
				query: 'id=' + that.id
			}
		},
		//#endif
		methods: {
			async getpost(id) {
				let that = this;
				let ret = await this.$get('/posts/post', {
					data: {
						id: id
					}
				});
				var data = ret.data;
				if(data.video){
					this.downtext = "下载动态壁纸";
					this.itvideo = data.video;
					that.loads = false;
				}
				else {
					if (data.images.length > 1) {
						this.downtext = "下载所有高清图"
					}
					if (data.images) {
						uni.getImageInfo({
							src: data.images[0],
							success: (res) => {
								var bl = that.sys.windowWidth / res.width;
								var imgH = bl * res.height;
								that.imgH = imgH;
								if (imgH < that.sys.windowHeight) {
									that.topx = that.pxtorpx((that.sys.windowHeight - imgH) / 2) + 'rpx';
								}
								that.setData(data);
								console.log(that.topx)
								that.loads = false;
							},
							fail: (err) => {
								console.log(err)
								that.loads = false;
							}
						});
					} else {
						that.loads = false;
					}
				}
				
			},
			savehimg() {
				let that = this;
				
				if (that.videoAd) {
					that.videoAd.offError();
					that.videoAd.offClose();
					that.videoAd.onClose((res) => {
						if (res && res.isEnded) {
							that.savearrimg(that.images)
						} else {
							uni.showToast({
								icon: 'none',
								title: "保存失败，中途关闭广告！"
							})
						}
					})
					that.videoAd.onError((err) => {
						
					})
					that.videoAd.show().catch(() => {
						that.videoAd.load()
							.then(() => that.videoAd.show())
							.catch(err => {
								console.log(err)
								console.log('激励视频 广告显示失败')
								that.savearrimg(that.images)
							})
					})
				} else {
					that.savearrimg(that.images)
				}
			},
			// 保存视频
			savevideoAD(){
				var that = this;
				
				if (that.videoAd) {
					that.videoAd.offError();
					that.videoAd.offClose();
					that.videoAd.onClose((res) => {
						if (res && res.isEnded) {
							that.savevideo(that.itvideo)
						} else {
							uni.showToast({
								icon: 'none',
								title: "保存失败，中途关闭广告！"
							})
						}
					})
					that.videoAd.onError((err) => {
						
					})
					that.videoAd.show().catch(() => {
						that.videoAd.load()
							.then(() => that.videoAd.show())
							.catch(err => {
								console.log(err)
								that.savevideo(that.itvideo)
							})
					})
				} else {
					that.savevideo(that.itvideo)
				}
			},
			//初始化激励视频广告组件
			CreateAd() {
				let that = this;
				console.log(that.Rewarded)
				if (uni.createRewardedVideoAd) {
					that.videoAd = uni.createRewardedVideoAd({
						adUnitId: that.Rewarded
					})
					that.videoAd.onLoad(() => {})
					
				} else {
					that.videoAd = ''
				}
			},
		}
	}
</script>
<style lang="scss">
	@import "post.scss";
</style>
