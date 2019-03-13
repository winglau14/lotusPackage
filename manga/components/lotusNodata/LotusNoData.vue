<template>
	<view v-if="lotusNoData.isShow" class="lotus-no-data" :style="{'padding-top':lotusNoData.paddingTop}">
		<image class="lotus-no-data-pic" :src="lotusNoData.src?lotusNoData.src:'../../static/images/npc-not-found.png'" mode="aspectFit"></image>
		<view class="lotus-no-data-text">{{lotusNoData.text?lotusNoData.text:'对不起，未搜索到您想要的漫画^_^'}}</view>
	</view>
</template>

<script>
	export default {
		props:['lotusNoData'],
		data(){
			return{
				
			}
		},
		onLoad(){
			
		}
	}
</script>

<style lang="less">
@import "./lotusNoData.less";
</style>
