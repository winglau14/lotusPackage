<template>
	<view v-if="lotusLoadMData.isShow" class="lotus-load-more">
		<view v-if="lotusLoadMData.showLoadImg" class="lotus-load-more-img"></view><text v-text="lotusLoadMData.text||text"></text>
	</view>
</template>

<script>
	export default{
		name:'lotus-load-more-text',
		props:['lotusLoadMData'],
		data(){
			return{
				text:'数据拼命加载中...'
			}
		}
	}
</script>

<style lang="less">
	@import "./lotusLoadMoreText.less";
</style>
