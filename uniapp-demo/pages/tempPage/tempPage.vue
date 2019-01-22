<template>
	<view></view>
</template>
<script>
	export default {
		onLaunch: function () {
		},
		onShow: function () {
			try{
				const value = uni.getStorage({
					key:'userInfor',
					success: function (res) {
						//获取到微信用户
						if(res.data){
							uni.switchTab({
								url: '/pages/form/form'
							});
						}
					},
					fail() {
						//获取不到微信用户信息
						uni.navigateTo({
							url: '/pages/login/login'
						});
					}
				});
				
			}catch(e){
				//TODO handle the exception
			}
			
			
		},
		onHide: function () {
			
		},
		onLoad() {
			/* uni.removeStorage({
				key: 'userInfor',
				success: function (res) {
					console.log('success');
				}
			}); */
			
		}
	}
</script>

<style>
</style>
