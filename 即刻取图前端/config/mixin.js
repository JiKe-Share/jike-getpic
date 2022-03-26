var Nullfun = function() {};
export default {
	data() {
		return {
			name: 'wk',
			// #ifdef MP-WEIXIN
			setapi: '/wxset/',
			// #endif
			// #ifdef MP-TOUTIAO
			setapi: '/dyset/',
			// #endif
		}
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
	// 微信分享盆友圈|收藏
	//#ifdef MP-WEIXIN
	onShareTimeline() {
		var that = this;
		return {
			title: that.shareTitle,
			imageUrl: that.shareImage,
			query: ''
		}

	},
	onAddToFavorites() {
		var that = this;
		return {
			title: that.shareTitle,
			imageUrl: that.shareImage,
			query: ''
		}
	},
	//#endif
	methods: {
		gowlapp(index, e) {
			let that = this;
			let type = e['wlapp-type'];
			console.log(e)
			switch (type) {
				case '1':
					uni.navigateToMiniProgram({
						appId: e['wlapp-appid'],
						path: e['wlapp-url'],
						success(res) {
							// 打开成功
						}
					})
					break;
				case '2':
					// #ifdef MP-WEIXIN
					wx.openChannelsUserProfile({
						finderUserName: e['wlapp-appid'],
						success(res) {
							// 打开成功
						}
					})
					// #endif
					// #ifdef MP-TOUTIAO
					console.log('关注抖音号');
					tt.openAwemeUserProfile({
						success: (res) => {
							console.log(res);
						},
						fail: (err) => {
							console.log(err);
						}
					});
					// #endif
					break;
				case '3':
					uni.downloadFile({
						url: e['wlapp-url'],
						success: function(res) {
							var filePath = res.tempFilePath;
							uni.openDocument({
								filePath: filePath,
								showMenu: true,
								success: function(res) {
									console.log('打开文档成功');
								}
							});
						}
					});
					break;
				case '4':
					uni.setStorageSync('weburl', e['wlapp-url']);
					uni.$u.route('/pages/web/web');
					break;
				case '5':
					// #ifdef MP-WEIXIN
					uni.previewImage({
						urls: [e['wlapp-image']['url']],
						current: 0
					})
					// #endif
					// #ifdef MP-TOUTIAO
					that.$refs.showImg.show(e['wlapp-image']['url']);
					// #endif
					break;
				default:
					break;
			}
		},
		showewm() {
			console.log(this.wxewmTmage)
			var that = this;
			// #ifdef MP-WEIXIN
			uni.previewImage({
				urls: [that.wxewmTmage],
				current: 0
			})
			// #endif
			// #ifdef MP-TOUTIAO
			that.$refs.showImg.show(that.wxewmTmage);
			// #endif
		},
		savearrimg(arr) {
			if (arr.length > 1) {
				for (let i = 0; i < arr.length; i++) {
					this.saveimg(arr[i]);
				}
			} else {
				this.saveimg(arr[0])
			}
		},
		saveimg(url, suc = Nullfun, fa = Nullfun) {
			console.log(url)
			if (url.indexOf("http") != -1) {
				uni.authorize({
					// #ifdef MP-WEIXIN
					scope: "scope.writePhotosAlbum",
					// #endif
					// #ifdef MP-TOUTIAO
					scope: "scope.album",
					// #endif
					success: function() {
						uni.downloadFile({
							url: url,
							success: function(ress) {
								// uni.hideToast();
								//图片保存到本地
								uni.saveImageToPhotosAlbum({
									filePath: ress.tempFilePath,
									success: function(data) {
										uni.showToast({
											title: '保存成功',
											icon: 'success',
											duration: 2000
										})
										suc();
									}
								})
							},
							fail: function(err) {
								console.log(err.errMsg)
								fa();
								uni.showToast({
									title: '下载失败',
								})
							}
						})
					},
					fail: function(e) {
						uni.showModal({
							title: '提示',
							content: '您拒绝了授权保存图片，需要重新授权',
							confirmText: '授权',
							cancelText: '取消',
							success(res) {
								if (res.confirm) {
									uni.openSetting({
										success(res) {
											console.log(res.authSetting)
										}
									})
								} else if (res.cancel) {
									console.log('用户点击取消')
								}
							}
						})
					},
				})
			} else {
				uni.authorize({
					// #ifdef MP-WEIXIN
					scope: "scope.writePhotosAlbum",
					// #endif
					// #ifdef MP-TOUTIAO
					scope: "scope.album",
					// #endif
					success() {
						uni.saveImageToPhotosAlbum({
							filePath: url,
							success: function(data) {
								uni.showToast({
									title: '保存成功',
									icon: 'success',
									duration: 2000
								})
								suc();
							}
						})
					},
					fail: function(err) {
						if (err.errmsg = 'authorize:fail auth deny') {
							uni.showModal({
								title: '提示',
								content: '您拒绝了授权保存图片，需要重新授权',
								confirmText: '授权',
								cancelText: '取消',
								success(res) {
									if (res.confirm) {
										uni.openSetting({
											success(res) {
												console.log(res.authSetting)
											}
										})
									} else if (res.cancel) {
										console.log('用户点击取消')
									}
								}
							})
						};
					}
				})
			}
		},
		getconfig(s = Nullfun) {
			let that = this;
			let ret = this.$get(that.setapi + 'config', {}).then((ret) => {
				if (ret.code == 1) {
					this.setData(ret.data);
					console.log(ret.data)
					uni.$u.mpShare = {
						title: that.shareTitle, // 默认为小程序名称，可自定义
						path: '/pages/index/index', // 默认为当前页面路径，一般无需修改，QQ小程序不支持
						imageUrl: that.shareImage,
					}
					s();
				}
			}).catch(() => {})
		},
		pxtorpx(px) {
			var rpx = px / (uni.upx2px(100) / 100);
			return rpx;
		},
		goback() {
			const pages = getCurrentPages();

			if (pages.length === 2) {
				uni.navigateBack({
					delta: 1
				});
			} else if (pages.length === 1) {
				uni.$u.route('/pages/index/index');
			} else {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		goindex() {
			uni.$u.route({
				url: '/pages/index/index',
				type: 'redirect'
			})
		},
		gopost(id) {
			uni.$u.route('/pages/post/post', {
				id: id
			});
		},
		goclass(id) {
			uni.$u.route('/pages/class/class', {
				id: id
			});
		},
		gotags(id, name) {
			uni.$u.route('/pages/tags/tags', {
				id: id,
				name: name
			});
		},
		getRect(selector) {
			return new Promise((resolve) => {
				let view = uni.createSelectorQuery().select(selector);
				view.fields({
					size: true,
					rect: true,
					scrollOffset: true
				}, (res) => {
					resolve(res);
				}).exec();
			})
		},
		getRpx(num) {
			var winWidth = uni.getSystemInfoSync().windowWidth;
			return num * (750 / winWidth);
		},
		getBarHeight(num = 0) {
			return this.getRpx(uni.getSystemInfoSync().statusBarHeight + num)
		},
		setData: function(obj, callback) {
			let that = this;
			const handleData = (tepData, tepKey, afterKey) => {
				tepKey = tepKey.split('.');
				tepKey.forEach(item => {
					if (tepData[item] === null || tepData[item] === undefined) {
						let reg = /^[0-9]+$/;
						tepData[item] = reg.test(afterKey) ? [] : {};
						tepData = tepData[item];
					} else {
						tepData = tepData[item];
					}
				});
				return tepData;
			};
			const isFn = function(value) {
				return typeof value == 'function' || false;
			};
			Object.keys(obj).forEach(function(key) {
				let val = obj[key];
				key = key.replace(/\]/g, '').replace(/\[/g, '.');
				let front, after;
				let index_after = key.lastIndexOf('.');
				if (index_after != -1) {
					after = key.slice(index_after + 1);
					front = handleData(that, key.slice(0, index_after), after);
				} else {
					after = key;
					front = that;
				}
				if (front.$data && front.$data[after] === undefined) {
					Object.defineProperty(front, after, {
						get() {
							return front.$data[after];
						},
						set(newValue) {
							front.$data[after] = newValue;
							that.$forceUpdate();
						},
						enumerable: true,
						configurable: true
					});
					front[after] = val;
				} else {
					that.$set(front, after, val);
				}
			});
			isFn(callback) && this.$nextTick(callback);
		},
	}
}
