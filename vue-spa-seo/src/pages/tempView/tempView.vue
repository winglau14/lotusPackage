<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		data(){
			return{
				chapterId:0,
				cid:0,
				url:''
			}
		},
		onLoad(options) {
			if(options.id){
				this.chapterId = options.id;
				this.cid = options.cid;
			}
			this.url = `https://m.ac.qq.com/chapter/index/id/${this.chapterId}/cid/${this.cid}`;
		},
		onShow(){
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
	@import "./tempView.less";
</style>
