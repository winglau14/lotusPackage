<template>
	<div v-if="flag" class="manga-advert">
		<img class="manga-advert-close" @click="clickClose" src="/static/images/delete-icon.png" />
		<a class="manga-advert-link" :href="advData.href">
			<img class="manga-advert-pic" :src="advData.imgUrl">
			<span class="manga-advert-txt">{{advData.title}}</span>
		</a>
	</div>
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
