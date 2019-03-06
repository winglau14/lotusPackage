<template>
	<view class="manga-advert" v-html="jdAdvHtml"></view>
</template>

<script>
	let jd_union_unid="1001396773",jd_ad_ids="1455:6",jd_union_pid="CLevtoSVLRCltMDdAxoAILDPwLUGKgA=";
	let jd_width=0;
	let jd_height=0;
	let jd_union_euid="";
	let p="AhQEVhhbFAQUAmVEH0hfIlgRRgYlXVZaCCsfSlpMWGVEH0hfIl8XRyUPVk96ME8lXVBgWhNpEnN9UWdZF2sVBBIOXRtZEwAQN1UaWhUAGgBTHVklMk1DCEZrXmwTNwpfBkgyEgNRG1IXBxUDVB9fEjITN2Ur";
	const jdAdv = require("./jdAdvert.js");
	export default {
		data() {
			return {
				jdAdvHtml:''
			}
		},
		components:{
		},
		onLoad(options) {
			jdAdvHtml = jdAdv;
			console.log(jdAdv);
		},
		onShow() {},
		onHide(){},
		methods: {
			getAdvert(){
				
			}
		}
	}
</script>

<style lang="less">
	@import "./advert.less";
</style>
