<template>
	<view class="express">
		<image class="express-logo" src="../../static/images/logo.png" mode="aspectFit"></image>
		<view class="express-input-module">
			<text class="express-input-text">快递单号：</text>
			<input type="text" class="uni-input express-input-val" v-model="qrCode" confirm-type="search" placeholder="请输入快递单号" >
			<image @click="scanCodeFn" class="express-input-qr" src="../../static/images/ss-icon.png" mode="aspectFit"></image>
		</view>
		<button @click="searchFn" class="express-button" type="primary">查询</button>
		<button style="display: block;margin-bottom: 40upx;" @click="openClick" type="primary">打开相机</button>
		<button style="display: block;margin-bottom: 40upx;" @click="openLightClick(true)" type="primary">打开闪光灯</button>
		<button style="display: block;margin-bottom: 40upx;" @click="openLightClick(false)" type="primary">关闭闪光灯</button>
		<image :src="tempImg" mode="aspectFit"></image>
		<view v-if="history.length" class="express-history">
            <text class="express-history-title">查询记录</text>
            <view class="express-history-model">
                <view v-for="(item,index) in history" :key="index" @click="checkExpress(item.number)" class="express-history-item">
                    <view class="express-history-wrap1">
                        <image class="express-history-img" mode="aspectFit" :src="'https://cdn.kuaidi100.com/images/all/56/'+item.codeName+'.png'"></image>
                        <view>
                            <text class="express-history-company">{{item.name}}</text>
                            <text class="express-history-number">快递单号：{{item.number}}</text>
                        </view>
                    </view>
                </view>
            </view>
</view>
<!--剪贴板内容-->
<view v-if="showJqMask" class="express-jq">
	<view class="express-jq-content">
		<text class="express-jq-title1">查询剪贴板的单号</text>
		<text class="express-jq-title2">{{qrCode}}</text>
		<view class="express-jq-action">
			<text @click="cancelJqMask" class="express-jq-cancel">取消</text>
			<text @click="checkExpress(qrCode)" class="express-jq-right">确定</text>
		</view>
	</view>
</view>
	</view>
	<!-- <web-view src="http://lotusui.winglau14.com/#/addressDemo"></web-view> -->
</template>

<script>
import {lotusUtils} from "../../static/utils/utils.js";
export default {
	data() {
		return {
			title: '我要查物流',
			qrCode: '',
			statusArray: [],
			history: [],
			showJqMask: false,
			tempImg: ''
		};
	},
	components: {},
	onLoad() {
		/* uni.setEnableDebug({
		    enableDebug: true
		}); */
	},
	onShow() {
		//获取剪切内容
		this.getClipboardVal();
		//获取查询缓存记录
		if (uni.getStorageSync('historyArr')) {
			this.history = uni.getStorageSync('historyArr');
			//显示前十个历史记录
			if (this.history.length > 10) {
				this.history = this.history.splice(0, 10);
			}
		}
	},
	methods: {
		//扫码二维码
		scanCodeFn() {
			const _this = this;
			uni.scanCode({
				success: function(res) {
					uni.showToast({
						title: '快递单号：' + res.result,
						duration: 2000,
						icon: 'none'
					});
					_this.qrCode = res.result;
					//执行搜索函数
					_this.searchFn();
				}
			});
		},
		//搜索快递单号数据
		searchFn() {
			if (!this.qrCode) {
				uni.showToast({
					title: '请输入快递单号',
					icon: 'none',
					duration: 2000
				});
				return false;
			}
			//页面跳转
			uni.navigateTo({
				url: '/pages/detail/detail?code=' + this.qrCode
			});
			this.qrCode = '';
		},
		//拨打电话
		callPhone(phone) {
			uni.makePhoneCall({
				phoneNumber: phone //仅为示例
			});
		},
		checkExpress(qrCode) {
			this.showJqMask = false;
			//页面跳转
			uni.navigateTo({
				url: '/pages/detail/detail?code=' + qrCode
			});
			this.qrCode = '';
			//设置剪切值为空
			uni.setClipboardData({
				data: '',
				success: function() {}
			});
		},
		cancelJqMask() {
			this.showJqMask = false;
			this.qrCode = '';
		},
		//获取复制内容
		getClipboardVal() {
			const _this = this;
			uni.getClipboardData({
				success: function(res) {
					const reg = /^[0-9]{12,13}$|^[0-9]{12}$|^[0-9]{13}$|^[0-9]{12}$|^[A-Za-z0-9]{11,14}$|^[0-9]{9,12}$|^[0-9]{10,14}$|^[A-Za-z0-9]{10,13}$|^[0-9]{8,11}$|^[0-9]{11,12}$|^[0-9]{10,12}$|^[0-9]{10}$|^[A-Za-z0-9]{7,22}$|^[0-9]{9,10}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{12}$|^[0-9]{10}$|^[0-9]{10,12}$|^[0-9]{10,12}$|^[A-Za-z0-9]{7,20}$|^[A-Za-z0-9]{8,20}$|^[0-9]{9}$|^[A-Za-z0-9]{10,20}$|^[a-z-A-Z]{2}[0-9]{9}[a-z-A-Z]{2}$|^[A-Za-z0-9]{5,10}$|^[0-9]{12}$|^[0-9]{10}$|^[0-9]{8}$|^[0-9]{12}$|^[0-9]{10,12}$|^[A-Za-z0-9]{10,20}$|^[0-9]{10}$|^[A-Za-z0-9]{8,20}$|^(500)[0-9]{6}$|^[A-Za-z0-9]{8,11}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{7,20}$|^[0-9]{7}$|^[0-9]{9}$|^[0-9]{10}$|^[A-Za-z0-9]{8,20}$|^[A-Za-z0-9]{5,20}$|^[0-9]{12}$|^[0-9]{10}$|^(316)[A-Za-z][0-9]{9}$|^[A-Za-z0-9]{9,20}$/;
					if (reg.test(res.data)) {
						_this.qrCode = res.data;
						_this.showJqMask = true;
					}
				}
			});
		},
		openClick() {
			const _this = this;
			lotusUtils.openCamera().then((response)=>{
				_this.tempImg = response;
			});
		},
		openLightClick(flag){
			if(flag){
				lotusUtils.openLight();
			}else{
				lotusUtils.closeLight();
			}
			
		}
	}
};
</script>

<style lang="less">
@import './index.less';
</style>
