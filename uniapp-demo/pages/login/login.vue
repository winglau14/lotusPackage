<template>
	<view class="login">
		<view class="login-welcome">
			<text class="login-welcome-line"></text>
			<text class="login-welcome-title">使用以下方式登录</text>
			<text class="login-welcome-line"></text>
		</view>
		<view class="login-list">
			<view @tap="loginType" class="login-list-item">
				<image style="width:100upx;height:100upx;" src="../../static/images/wx-icon.png" mode="aspectFit"></image>
				<text>微信</text>
			</view>
			<view @tap="loginType('qq');" class="login-list-item">
				<image style="width:100upx;height:100upx;" src="../../static/images/qq-icon.png" mode="aspectFit"></image>
				<text>QQ</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			//登录方式
			loginType(type){
				//开放的第三方登录
				if(typeof type === 'string'){
					this.$lotusUtils.wxLoginFn(type).then((response)=>{
						/* uni.showToast({
							title:JSON.stringify(response),
							icon:'none'
						}); */
						if(response.code>0){
							uni.switchTab({
								url: '/pages/userCenter/userCenter'
							});
						}
					});
				}else{
					//未授权
					uni.showToast({
						title:"敬请期待^_^",
						icon:"none"
					})
				}
			}
		},
		onLoad() {
			
		},
		onShow(){
			
		}
	}
</script>

<style lang="less">
@import "./login.less";
</style>
