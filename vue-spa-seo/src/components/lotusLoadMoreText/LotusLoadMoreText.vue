<template>
	<div v-if="lotusLoadMData.isShow" class="lotus-load-more">
		<div v-if="lotusLoadMData.showLoadImg" class="lotus-load-more-img"></div><span v-text="lotusLoadMData.text||text"></span>
	</div>
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
