<template>
	<view>
		<view class="top-image">
			<image :src="topImage.url" mode="aspectFill"></image>
		</view>
		<view class="body-image">
			<view class="img-search">
				<view class="searchs">
					<input v-model="Search" class="inputSearch" :placeholder="searchPlaceholder">
					<button class="cu-btn btnSearch" size="mini" :style="{backgroundColor:xcxColor}"
						@click.stop="gosearch">搜索</button>
					</input>
				</view>
			</view>
			<view class="tag-array u-demo-block">
				<view class="tag-title">
					<u-icon name="tags" size="28px" label="热门推荐" labelSize="16px" :labelColor="xcxColor"
						:color="xcxColor"></u-icon>
				</view>
				<view class="recommend-tags">
					<u-scroll-list :indicator="false" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
						<view class="scroll-list" style="flex-direction: row;">
							<view v-for="(item, index) in indexTags" @tap="gotags(item.id,item.name)" :key="index"
								class="scroll-list-tags scroll-list__goods-item"
								:class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']">
					 		<image :src="item.cover" mode="widthFix"></image>
								<view class="tag-name">
									<u--text :lines="1" size="12px" :text="item.name" align="center" color="#ffffff"
										lineHeight="20"></u--text>
								</view>
							</view>
						</view>
					</u-scroll-list>
				</view>
			</view>
			<bannerad marginBottom="10rpx"></bannerad>
			<view class="index-class">
				<view v-for="(item,index) in indexClass" :key="index" class="class-list">
					<view class="cla-title">
						<image :src="item.cover" mode="widthFix"></image>
						<text :style="{color:xcxColor}">{{item.name}}</text>

						<view class="go-class" @tap="goclass(item.id)">更多<text class="cuIcon cuIcon-right"></text>
						</view>
					</view>
					<view class="cal-posts">
						<view class="img-post" v-for="(Pitem,Pindex) in item.posts" :key="Pindex"
							@click="gopost(Pitem.ID)">
							<u--image :showMenuByLongpress="false" :src="Pitem.cover" :fade="true" duration="450"
								width="100%" mode="widthFix" height="auto" radius="15rpx">
							</u--image>
						</view>
						<view class="img-post" v-if="item.posts.length!=0&&item.posts.length%2==0"></view>
					</view>
				</view>
			</view>
		</view>
		<interad></interad>
		<Pendant></Pendant>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				Search: ''
			}
		},
		onLoad() {
			let that = this;
			this.getindex()
			this.getconfig()
		},
		methods: {
			async getindex() {
				let that = this;
				let ret = await this.$get(that.setapi + 'index', {});
				if (ret.code == 1) {
					var data = ret.data;
					// #ifdef MP-TOUTIAO
					uni.setNavigationBarColor({
						frontColor: data.topTextcolor,
						backgroundColor: data.setdata.xcxColor,
						animation: {
							duration: 400,
							timingFunc: 'easeIn'
						}
					})
					uni.setNavigationBarTitle({
						title: data.title
					});
					// #endif
					this.setData(data.setdata);
					console.log(data.setdata)
				}
			},
			gosearch() {
				let that = this;
				if (that.Search) {
					that.$get('/posts/search', {
						data: {
							key: that.Search
						}
					}).then((ret) => {
						if (ret.data == 'posts') {
							uni.$u.route('/pages/search/search', {
								key: that.Search
							});
						} else {
							console.log(ret.data)
							uni.$u.route('/pages/tags/tags', {
								id: ret.data.term_id,
								name: ret.data.name
							});
						}
					}).catch(() => {})
				} else {
					uni.showToast({
						title: '搜素内容为空！',
						icon: 'error'
					})
				}
			},
		}
	}
</script>
<style lang="scss">
	@import "index.scss";
</style>
