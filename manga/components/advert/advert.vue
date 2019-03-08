<template>
	<view v-if="flag" class="manga-advert">
		<image class="manga-advert-close" v-on:tap="clickClose" src="../../static/images/delete-icon.png" mode="aspectFit"></image>
		<a class="manga-advert-link" :href="advData.href">
			<image class="manga-advert-pic" :src="advData.imgUrl" mode="aspectFit"></image>
			<span class="manga-advert-txt">{{advData.title}}</span>
		</a>
	</view>
</template>

<script>
	
	export default {
		props:['advData'],
		data() {
			return {
				flag:true
			}
		},
		components:{
		},
		onLoad(options) {
		},
		onShow() {},
		onHide(){},
		methods: {
			clickClose(){
				this.flag = !this.flag;
			}
		}
	}
</script>

<style lang="less">
	@import "./advert.less";
</style>
