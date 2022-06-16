<template>
	<view>
		<uniNavBar fixed="3" :title="'达人作品：'+taginfo.name"></uniNavBar>
		<view class="tag-infos">
			<view class="tag-info-left tag-info">
				<u-avatar :src="taginfo.cover" shape="circle" size="50"></u-avatar>
			</view>
			<view class="tag-info-right tag-info">
				<u--text :text="taginfo.name" :color="xcxColor" :lines="1" :bold="true"></u--text>
				<u--text :text="taginfo.description?taginfo.description:'这个人很懒，什么都没有留下'" color="#999999" :lines="1"
					size="14"></u--text>
			</view>
			<u-divider :dot="true"></u-divider>
			<u--text text="免责声明:所有图片素材均来源于用户上传,侵权请联系客服删除" color="#4f4f4f" :lines="2" size="14"></u--text>
			<bannerad marginTop="8rpx"></bannerad>
		</view>
		<u-sticky bgColor="#fff">
			<u-tabs :current="taginfo.cindex" :list="showclass" :lineColor="xcxColor" @click="getitclass"></u-tabs>
		</u-sticky>
		<view class="tag-posts" v-if="posts!=''">
			<block v-for="(item,index) in posts" :key="index">
				<bannerad v-if="index%15==0&&index!=0" marginTop="5rpx" marginBottom="5rpx" adw="97vw"></bannerad>
				<view class="tag-post" @click="gopost(item.ID)">
					<u--image :showMenuByLongpress="false" :src="item.cover" :fade="true" width="100%" mode="widthFix"
						height="auto" radius="15rpx">
					</u--image>
				</view>
			</block>
			<view class="tag-post" v-if="posts.length!=0&&posts.length%2==0"></view>
		</view>
		<u-loadmore bgColor="#ffffff" loadmoreText="点击加载更多" @loadmore="loadmore" loadingText="努力加载中..." nomoreText="到底了"
			v-if="posts!=''" marginTop="0" height="50rpx" :line="true" :status="loadstu" />
		<view class="bg-white" v-else>
			<u-empty icon="/static/img/nodata.png" textColor="#9a9a9a" marginTop="0" iconSize="100" textSize="16"
				text="该分类下还没有作品"></u-empty>
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
				showclass: [],
				pages: 0,
				tid: 1,
				tname: '',
				loadstu: 'loading',
				cid: 1,
			}
		},
		onLoad(o) {
			this.tid = o.id;
			this.tname = o.name;
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
				title: that.taginfo.name + ' - ' + that.shareTitle,
				path: '/pages/tags/tags?id=' + that.id + '&name=' + that.tname, // 默认为当前页面路径，一般无需修改，QQ小程序不支持
				imageUrl: that.taginfo.cover
			}
		},
		// 微信分享盆友圈|收藏
		//#ifdef MP-WEIXIN
		onShareTimeline() {
			var that = this;
			return {
				title: that.taginfo.name + ' - ' + that.shareTitle,
				imageUrl: that.taginfo.cover,
				query: 'id=' + that.id + '&name=' + that.tname
			}
		},
		onAddToFavorites() {
			var that = this;
			return {
				title: that.taginfo.name + ' - ' + that.shareTitle,
				imageUrl: that.taginfo.cover,
				query: 'id=' + that.id + '&name=' + that.tname
			}
		},
		//#endif
		onReachBottom() {
			if (this.page >= this.pages) {
				this.loadstu = 'nomore'
				return true
			} else {
				this.loadstu = 'loading'
				this.insetpost()
			}
		},
		methods: {
			loadmore() {
				this.loadstu = 'loading'
				this.insetpost()
			},
			async getpost(cid = 0) {
				let that = this;
				// #ifdef MP-WEIXIN
				let pt = 'wx'
				// #endif
				// #ifdef MP-TOUTIAO
				let pt = 'dy'
				// #endif
				// #ifdef MP-KUAISHOU
				let pt = 'ks'
				// #endif
				if (cid) {
					that.page = 0;
				}
				let ret = await this.$get('/posts/tagspost', {
					data: {
						id: that.tid,
						name: that.tname,
						pt: pt,
						page: that.page,
						cid: cid
					}
				});
				if (ret.code == 1) {
					that.page++;
					let res = ret.data;
					if (that.page >= res.pages) {
						that.loadstu = 'nomore'
					} else {
						that.loadstu = 'loadmore'
					}
					that.setData(res);
					console.log(ret.data)
					this.loads = false;
				}
			},
			async insetpost() {
				let that = this;
				// #ifdef MP-WEIXIN
				let pt = 'wx'
				// #endif
				// #ifdef MP-TOUTIAO
				let pt = 'dy'
				// #endif
				// #ifdef MP-KUAISHOU
				let pt = 'ks'
				// #endif
				let ret = await this.$get('/posts/tagspost', {
					data: {
						id: that.tid,
						name: that.tname,
						pt: pt,
						page: that.page,
						cid: that.cid
					}
				});
				if (ret.code == 1) {
					that.page++;
					let res = ret.data;
					if (that.page >= res.pages) {
						that.loadstu = 'nomore'
					}
					that.pages = res.pages;
					that.posts = that.posts.concat(res.posts)
					console.log(ret.data)
					this.loads = false;
				}
			},
			getitclass(e) {
				this.cid = e.cat_ID;
				this.loadstu = 'loading'
				this.getpost(this.cid)
			}
		},
	}
</script>
<style lang="scss">
	@import "tags.scss";
</style>
