<template>
	<view class="user-center lotus-wrap">
		<!--用户信息-->
		<view class="user-center-top">
			<image class="user-center-top-header" :src="headerImg?headerImg:'../../static/images/user-default3.png'" mode="aspectFit"></image>
			<view class="user-center-top-msg"><text style="color:#fff;">昵称：</text>{{nickName?nickName:'--'}}</view>
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
				<image class="user-center-list-icon" src="../../static/images/service-icon.png" mode="aspectFit"></image>
				<view class="user-center-list-text">
					<text>客服</text>
				</view>
			</view>
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
		<!--自定义confirm弹窗-->
		<lotus-confirm @lotusConfirm="callBackFn" :ConfirmData="confirmData"></lotus-confirm>
		<!--自定义confirm弹窗 END-->
	</view>
</template>

<script>
	import LotusConfirm from "../../components/lotusConfirm/LotusConfirm.vue"
	export default {
		data(){
			return{
				nickName:'',
				headerImg:'',
				confirmData: {
					showImg:false,
					showConfirm: false,
					descText: '确定要退出登录麽？',
					noText: '取消',
					yesText: '确定'
				}
			}
		},
		components:{
			LotusConfirm
		},
		methods:{
			//退出登录
			quiteFn(){
				const _this = this;
				/* uni.showModal({
					title: '温馨提示',
					content: '退出后不会删除任何数据，下次登录依然可以使用本账号',
					success: function (res) {
						if (res.confirm) {
							//清除用户信息数据
							_this.$lotusUtils.setStorageFn('userInfor','').then(()=>{
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
				return false; */
				//打开自定义弹窗
				this.confirmData.showConfirm = true;
			},
			//自定义弹窗点击确定按钮回调
			callBackFn(){
				const _this = this;
				//清除用户信息数据
				_this.$lotusUtils.setStorageFn('userInfor','').then(()=>{
					//页面跳转
					uni.reLaunch({
						url:"/pages/login/login"
					});
				})
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
				//console.log(JSON.stringify(error));
			});
		}
	}
</script>

<style lang="less">
@import "./userCenter.less";
</style>
