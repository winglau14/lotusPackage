<template>
	<view class="login">
		<view class="login-welcome">
			<text class="login-welcome-line"></text>
			<text class="login-welcome-title">使用以下方式登录</text>
			<text class="login-welcome-line"></text>
		</view>
		<view class="login-list">
			<view @tap="loginClick" class="login-list-item">
				<image style="width:100upx;height:100upx;" src="../../static/images/wx-icon.png" mode="aspectFit"></image>
				<text>微信</text>
			</view>
			<view @tap="loginClick('qq');" class="login-list-item">
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
				loginTime:null
			}
		},
		methods:{
			//登录方式
			loginType(type){
				//开放的第三方登录
				const _this = this;
				if(typeof type === 'string'){
					//获取第三方授权用户信息
					_this.$lotusUtils.wxLoginFn(type).then((response)=>{
							const result = JSON.parse(response.userInfor);
							//调用注册api
							_this.registerApiFn(type,result).then((regData)=>{
								if(regData.code === 1){
									//跳转个人中心
									uni.switchTab({
										url: '/pages/userCenter/userCenter'
									});
								}
							});
					});
				}else{
					//未授权
					uni.showToast({
						title:"敬请期待^_^",
						icon:"none"
					})
				}
			},
			//用户注册
			registerApiFn(type,result){
				return this.$lotusUtils.ajax(`${this.$lotusUtils.webUrl.api}user/login`,'POST',{
					openId:result.openId,
					nickName:result.nickName,
					source:type,
					avatarUrl:result.avatarUrl
				});
			},
			//防止点击登录多次
			loginClick(type){
				clearTimeout(this.loginTime);
				this.loginTime = setTimeout(()=>{
					this.loginType(type);
				},200);
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
