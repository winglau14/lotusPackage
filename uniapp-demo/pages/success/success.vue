<template>
	<view class="success">
		<image class="success-img" src="../../static/images/success-bg.png" mode="aspectFit"></image>
		<text class="success-text">提交成功，我们将尽快进行处理喔^_^</text>
		<view class="success-btn-wrap">
			<button @tap="goTo('');" class="mini-btn success-btn-wrap-l" type="default" size="mini">查看详情</button>
            <button @tap="goTo('tabbar');" class="mini-btn" type="primary" size="mini">返回我的</button>
			<!-- <navigator url="../formDetail/formDetail">查看详情</navigator>
			<navigator open-type="switchTab" url="../userCenter/userCenter">返回个人中心</navigator> -->
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				id:0
			}
		},
		methods:{
			//页面跳转
			goTo(type){
				const _this = this;
				if(type === 'tabbar'){
					//跳转个人中
					uni.switchTab({
						url:'/pages/userCenter/userCenter'
					});
				}else{
					//跳转表单详情
					uni.redirectTo({
						url:'/pages/formDetail/formDetail?id='+_this.id
					});
				}
				
			}
		},
		onLoad(options){
			this.id = options.id
		}
	}
</script>

<style lang="less">
@import "./success.less";
</style>
