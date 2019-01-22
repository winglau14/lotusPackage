<template>
	<view class="express-detail">
		<view class="express-detail-top">
			<view class="express-detail-left">
				<image src="../../static/images/package-icon.png" mode="aspectFit"></image>
			</view>
			<view class="express-detail-right">
				<view class="express-detail-title1">快递公司：<text>{{name||'--'}}</text></view>
				<view class="express-detail-title2">快递单号：{{qrCode}}</view>
				<view class="express-detail-title2">管理状态：{{context||'--'}}</view>
			</view>
		</view>
		<view v-if="flag" class="express-detail-step-wrap">
                <text class="express-detail-step-nav">快递状态：</text>
                <view class="express-detail-step-reward" bindtap="showReward">
                    <image class="express-detail-step-image" mode="aspectFit" src="/images/shang-icon2.png"></image>
                </view>
            </view>
		<view v-if="flag" class="express-detail-status">
			<view :class="index == 0 ? 'express-detail-status-content express-detail-status-act':'express-detail-status-content'" v-for="(item,index) in statusArray" :key="index">
				<view v-if="item.phoneNumber">
					{{item.time}} {{item.context}} <text style="color:#13a3ff;" @click="callPhone(item.phoneNumber)">{{item.phoneNumber}}</text>
				</view>
				<view v-else>
					{{item.time}} {{item.context}}
				</view>
			</view>
		</view>
		<view v-if="noDataFlag" class="express-detail-no-data">
			<image class="express-detail-no-data-img" src="../../static/images/no-data.png" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
import company from '../../static/lib/company.js';
export default {
	data() {
		return {
			statusArray: [],
			qrCode: '',
			name: '',
			context: '',
			historyArr: [],
			prevHistory: [],
			flag: false,
			noDataFlag:false
		};
	},
	components: {},
	onLoad(option) {
		const _this = this;
		//获取缓存查询记录
		uni.getStorage({
			key: 'historyArr',
			success: function(res) {
				_this.prevHistory = res.data;
			}
		});
		this.qrCode = option.code;
		if (this.qrCode) {
			this.searchFn();
		}
	},
	methods: {
		//搜索快递单号数据
		searchFn() {
			this.statusArray = [];
			uni.request({
				url: 'https://express.xiaoyaozhan.com/express/', //仅为示例，并非真实接口地址。
				method: 'GET',
				data: {
					text: this.qrCode
				},
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success: res => {
					const result = res.data;
					//this.searchResult = JSON.stringify(result);
					const _this = this;
					this.flag = true;
					if (result.message === "ok") {
						//电话号码数据处理
						result.data.map(item => {
							if (item.context.match(/\d{11}/)) {
								this.phone = item.context.match(/\d{11}/)[0];
								item.phoneNumber = item.context.match(/\d{11}/)[0];
								item.context = item.context.replace(/\d{11}/, '');
							}
							_this.statusArray.push(item);
						});
						if (_this.statusArray.length) {
							_this.context = _this.statusArray[0].context;
						}
						//快递公司转换
						if (result.com) {
							company.map(item => {
								if (item.code === result.com) {
									_this.codeName = item.code;
									_this.name = item.companyname;
									return false;
								}
							});
						}
						//信息查询完毕
						if (_this.statusArray.length > 0 && _this.flag) {
							_this.statusArray[0].name = _this.name;
							_this.statusArray[0].codeName = _this.codeName;
							_this.statusArray[0].number = _this.qrCode;

							//缓存查询记录
							if (_this.prevHistory.length > 0) {
								_this.prevHistory.map((item, index) => {
									if (item.number === _this.qrCode) {
										_this.prevHistory.splice(index, 1);
									}
								});
								_this.prevHistory.unshift(_this.statusArray[0]);
								_this.historyArr = _this.prevHistory;
							} else {
								_this.historyArr.push(_this.statusArray[0]);
							}
							uni.setStorage({
								key: 'historyArr',
								data: _this.historyArr
							});
						}
						this.noDataFlag = false;
					}else{
						//查询出错
						uni.showToast({
							duration:2000,
							icon:'none',
							title:'查询不到该快递单号信息'
						});
						this.flag = false;
						this.noDataFlag = true;
					}
				}
			});
		},
		//拨打电话
		callPhone(phone) {
			debugger;
			uni.makePhoneCall({
				phoneNumber: phone //仅为示例
			});
		}
	}
};
</script>

<style lang="less">
@import './detail.less';
</style>
