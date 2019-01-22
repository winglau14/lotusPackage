<template>
	<view class="user-center lotus-wrap">
		<!--用户信息-->
		<view class="user-center-top">
			<image class="user-center-top-header" :src="headerImg?headerImg:'../../static/images/user-default.png'" mode="aspectFit"></image>
			<view class="user-center-top-msg"><text style="color:#333;">昵称：</text>{{nickName?nickName:'--'}}</view>
		</view>
		<!--用户信息 END-->
		<!--用户操作-->
		<view class="user-center-list">
			<navigator open-type="navigate" url="../form/form">
				<view class="user-center-list-item">
					<image class="user-center-list-icon" src="../../static/images/create-form-icon.png" mode="aspectFit"></image>
					<view class="user-center-list-text">新建</view>
					<text class="user-center-list-jt"></text>
				</view>
			</navigator>
			<navigator open-type="switchTab" url="../list/list">
				<view class="user-center-list-item">
					<image class="user-center-list-icon" src="../../static/images/jl-icon.png" mode="aspectFit"></image>
					<view class="user-center-list-text">记录</view>
					<text class="user-center-list-jt"></text>
				</view>
			</navigator>
			<view class="user-center-list-item">
				<image class="user-center-list-icon" src="../../static/images/setting-icon.png" mode="aspectFit"></image>
				<view class="user-center-list-text">
					<text>关于帮您购</text>
					<text class="user-center-list-text-r">版本1.0.0</text>
				</view>
			</view>
			<!--退出登录-->
			<view @tap="quiteFn" class="user-center-quit">退出登录</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return{
				nickName:'',
				headerImg:'',
			}
		},
		methods:{
			quiteFn(){
				uni.showModal({
					title: '温馨提示',
					content: '退出后不会删除任何数据，下次登录依然可以使用本账号',
					success: function (res) {
						if (res.confirm) {
							//清除用户信息数据
							this.$lotusUtils.setStorageFn('userInfor','').then(()=>{
								//页面跳转
								uni.redirectTo({
									url:"/pages/login/login"
								});
							})
						} else if (res.cancel) {
							//console.log('用户点击取消');
						}
					}
				});
			}
		},
		onLoad() {
			
		},
		onShow(){
			const _this = this;
			//获取用户信息
			this.$lotusUtils.getStorageFn('userInfor').then((response)=>{
				const userInfor = JSON.parse(response);
				_this.nickName = userInfor.nickName;
				_this.headerImg = userInfor.avatarUrl;
			},(error)=>{
				console.log(JSON.stringify(error));
			});
		
		
		}
	}
</script>

<style lang="less">
@import "./userCenter.less";
</style>
