const lotusUtils = {
	webUrl: {
		api: 'http://192.168.1.143:3001/' //https://express.xiaoyaozhan.com/express/
	},
	//第三方登录
	wxLoginFn(type) {
		return new Promise((resolve, reject) => {
			//获取服务供应商微信
			return uni.getProvider({
				service: 'oauth',
				success: function(res) {
					if (~res.provider.indexOf(type)) {
						//获取微信登录后信息
						uni.login({
							provider: type,
							success: function(loginRes) {
								//console.log(JSON.stringify(loginRes));
								//获取用户信息
								uni.getUserInfo({
									provider: type,
									success: function(infoRes) {
										/* uni.showToast({
											title: JSON.stringify(infoRes),
											icon: 'none'
										}); */
										if (infoRes.errMsg.indexOf("getUserInfo:ok") > -1) {
											const userInfor = JSON.stringify(infoRes.userInfo);
											//console.log(userInfor);
											//缓存用户信息
											//uni.setStorageSync('userInfor', userInfor);
											uni.setStorage({
												key: 'userInfor',
												data: userInfor,
												success: function() {
													//console.log('success');
													resolve({
														code: 1,
														userData:userInfor
													});
												}
											});

										}


									}
								});
							},
							fail(error) {
								//plus.ui.alert(JSON.stringify(error));
								//console.log(JSON.stringify(error));								
								resolve(error);
							}
						});
					}
				}
			});
		});
	},
	//打开摄像头获取拍照路径
	openCamera(openAlert) {
		const cmr = plus.camera.getCamera();
		const res = cmr.supportedImageResolutions[0];
		const fmt = cmr.supportedImageFormats[0];
		const _this = this;
		return new Promise((resolve, reject) => {
			cmr.captureImage(
				(path) => {
					if (openAlert) {
						plus.ui.alert('Capture image success: ' + path, '', '温馨提示', '确定');
					}
					resolve(path);
				},
				(error) => {
					//cmr.stopVideoCapture();
					//plus.ui.alert('Capture image failed: ' + error.message);
				}, {
					resolution: res,
					format: fmt
				}
			);

		});
	},
	//图片预览
	imagesPreviewer(imgArray) {
		uni.previewImage({
			urls: imgArray,
			success(res) {

			},
			fail() {

			}
		})
	},
	//接口请求封装url=>api请求url,method=>请求的方法GET OR POST,options=>api请求data参数
	ajax(url, method, options) {
		uni.showLoading({
			title: '加载中',
			mask: true
		});
		return new Promise((resolve, reject) => {
			uni.request({
				url: url, //仅为示例，并非真实接口地址。
				method: method,
				data: options,
				header: {
					'content-type': 'application/x-www-form-urlencoded', //自定义请求头信息
				},
				success: (res) => {
					uni.hideLoading();
					resolve(res.data);
				},
				fail: (err) => {
					uni.showToast({
						title: `${JSON.stringify(err)}`,
						icon: 'none'
					})
				},
				complete: (res) => {
					uni.showToast({
						title: `${JSON.stringify(res)}`,
						icon: 'none'
					})
				}
			});
		});
	},
	//设置本地缓存
	setStorageFn(sKey,sVal,type){
			//同步设置本地缓存
			if(type === "sync"){
				return new Promise((resolve,reject)=>{
					try {
						uni.setStorageSync(sKey,sVal);
						resolve(true);
					} catch (e) {
						// error
						resolve(`设置本地存储${sKey}失败`);
					}
				});
			}else{
				//异步设置本地缓存
				return new Promise((resolve,reject)=>{
					uni.setStorage({
						key:sKey,
						data:sVal,
						success: function (res) {
							resolve(true);
						},
						fail:function(error){
							resolve(`设置本地存储${sKey}失败`);
						}
					});
				});
			}
		},
	//获取缓存信息
	getStorageFn(sKey,type){
		//同步获取本地缓存
		if(type === "sync"){
			return new Promise((resolve,reject)=>{
				try {
					const value = uni.getStorageSync(sKey);
					if (value) {
						resolve(value);
					}
				} catch (e) {
					// error
					resolve(`获取本地存储${sKey}失败`);
				}
			});
		}else{
			//异步获取本地缓存
			return new Promise((resolve,reject)=>{
				uni.getStorage({
					key:sKey,
					success: function (res) {
						resolve(res.data);
					},
					fail:function(error){
						resolve(`获取本地存储${sKey}失败`);
					}
				});
			});
		}
	},
	
	
	
	
}

export {
	lotusUtils
}
