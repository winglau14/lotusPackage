<template>
	<div v-if="pageShow" class="manga-view">
		<div id="scroll-body">
			<div v-for="(item,index) in imageArr" :key="index" class="manga-view-wrap">
				<img :pid="item.picture_id" class="manga-view-pic" style="'margin-top:-0.32rem;" v-lazy="item.url">
			</div>
		</div>
		<!--返回顶部-->
		<LotusToTop></LotusToTop>
		<!--返回顶部END-->
		<LotusConfirm @lotusConfirm="lotusConfirm" :ConfirmData="ConfirmData"></LotusConfirm>
		<tabBar :tabBarData="tabBarData"></tabBar>
	</div>
</template>
<style lang="less">
	@import "../../../static/style/pages/view.less";
</style>
<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
    import LotusConfirm from "../../components/lotusConfirm/LotusConfirm.vue";
	import LotusToTop from "../../components/lotusToTop/lotusToTop.vue";
    import tabBar from "../../components/lotusTabBar/LotusTabBar.vue";
	export default {
		data() {
			return {
				viewData:{},//详情页数据源
				id:'551414',
				cid:1,
				detail:'1',
				imageArr:[],
				pageSize:8,
				type:'',
				pageShow:false,
                ConfirmData:{
                    descText:'<p style="font-size: 0.4rem;">温馨提示</p><p style="font-size: 0.4rem;">由于版权或者政策问题，该作品暂不支持阅读，抱歉^_^!</p>',
                    showConfirm:false,
                    showImg:false,
                    twoButton:false
                },
                tabBarData:this.$lotusUtils.tabBarData,
			}
		},
		components:{
			LotusLoadMoreText,
			LotusToTop,
            LotusConfirm,
            tabBar
		},
		mounted() {
            this.id = this.$route.query.id;
            this.cid = this.$route.query.cid*1;
            this.next = this.$route.query.next*1;
            this.type = this.$route.query.type;
            if(this.type === 'tx'){
                this.getDataList();
            }else{
                this.getShList();
            }
		},
		methods: {
            lotusConfirm(){
                if(typeof window !== "undefined"){
                    window.history.go(-1);
                }
            },
            //版权问题提示
            copyrightFn(){
                this.ConfirmData.showConfirm = true;
            },
			//获取图片数据
			getDataList(){
				const _this = this;
				this.$lotusAjax.post(`${this.$lotusUtils.webUrl.api}mApi/`,{
					uri:"View/comic",
					options:JSON.stringify({
						id:_this.id,
						cid:_this.cid,
						detail:_this.detail
					})
				}).then((response)=>{
					const res = response.data;
					if(res){
						_this.pageShow = true;
						_this.viewData = res;
						
						//设置标题
						_this.$lotusChangeTitle(`${res.title}`);
						//判断是否需要会员权限
						if(res.chapter.vip_state*1 === 2){
							_this.copyrightFn();
							return false;
						}
						if(res.picture.length>1){
                            _this.imageArr = res.picture.splice(0,res.picture.length-1);
						}else{
                            _this.imageArr = res.picture;
						}
						_this.noDataFlag = true;
					}
					
				});
			},
			getShList(){
				const _this = this;
					this.$lotusAjax.post(`${this.$lotusUtils.webUrl.api}lastApi/`,{
						id:_this.cid
					}).then((response)=>{
						const res = response.data;
						if(res){
							res.contentImg.map((item,index)=>{
								if(index > 0&&index<res.contentImg.length-1){
									item.height = 1400;
									_this.imageArr.push(item);
								}
								
							});
							_this.pageShow = true;
                            //设置标题
                            _this.$lotusChangeTitle(`${res.title}`);
						}
					});
			}
		}
	}
</script>
