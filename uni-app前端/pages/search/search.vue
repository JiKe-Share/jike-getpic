<template>
	<view>
		<uniNavBar fixed="3" :title="'搜索“'+key+'”'"></uniNavBar>
		<view class="class-posts" v-if="posts!=''" id="postsheight">
			<block v-for="(item,index) in posts" :key="index">
				<bannerad v-if="index%15==0" marginTop="5rpx" marginBottom="5rpx" adw="97vw"></bannerad>
				<view @click="gopost(item.ID)" class="class-post">
					<u--image :showMenuByLongpress="false" :src="item.cover" :fade="true" width="100%" mode="widthFix"
						height="auto" radius="15rpx">
					</u--image>
				</view>
			</block>
			<view class="class-post" v-if="posts.length!=0&&posts.length%2==0"></view>
		</view>
		<u-loadmore @loadmore="loadmore" loadmoreText="点击加载更多" bgColor="#ffffff" loadingText="努力加载中..." nomoreText="到底了"
			v-if="posts!=''" marginTop="0" height="50rpx" :line="true" :status="loadstu" />
		<view class="bg-white" v-else>
			<u-empty icon="/static/img/nodata.png" textColor="#9a9a9a" marginTop="0" iconSize="100" textSize="16"
				text="该分类下还没有作品"></u-empty>
			<bannerad marginTop="25rpx" marginBottom="0"></bannerad>
		</view>
		<interad></interad>
		<Pendant></Pendant>
		<u-loading-page loading-mode="spinner" :loading="loads" loadingText="内容加载中"></u-loading-page>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				loads: true,
				page: 0,
				posts: [],
				pages: 0,
				key: '',
				loadstu: 'loading',
				ctitle: ''
			}
		},
		onLoad(o) {
			this.key = o.key;
			this.getpost()
			this.getconfig()

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
			var that = this;
			return {
				title: '搜索“' + that.key + '” - ' + that.shareTitle,
				path: '/pages/search/search?key=' + that.key, // 默认为当前页面路径，一般无需修改，QQ小程序不支持
				imageUrl: that.shareImage
			}
		},
		// 微信分享盆友圈|收藏
		//#ifdef MP-WEIXIN
		onShareTimeline() {
			var that = this;
			return {
				title: '搜索“' + that.key + '” - ' + that.shareTitle,
				imageUrl: that.shareImage,
				query: 'key=' + that.key
			}

		},
		onAddToFavorites() {
			var that = this;
			return {
				title: '搜索“' + that.key + '” - ' + that.shareTitle,
				imageUrl: that.shareImage,
				query: 'key=' + that.key
			}
		},
		//#endif
		onReachBottom() {
			if (this.page >= this.pages) {
				this.loadstu = 'nomore'
				return true
			} else {
				this.loadstu = 'loading'
				this.getpost()
			}
		},
		methods: {
			loadmore() {
				this.loadstu = 'loading'
				this.getpost()
			},
			async getpost() {
				let that = this;
				let ret = await this.$get('/posts/searchposts', {
					data: {
						key: that.key,
						page: that.page
					}
				});
				if (ret.code == 1) {
					console.log(ret.data)
					that.page++;
					let res = ret.data;
					if (that.page >= res.pages) {
						that.loadstu = 'nomore'
					} else {
						that.loadstu = 'loadmore'
					}
					that.pages = res.pages;
					that.posts = that.posts.concat(res.posts)
					this.loads = false;
				}
			}
		},
	}
</script>
<style lang="scss">
	@import "search.scss";
</style>
