<template>
	<div ref="filter" v-if="pageShow" class="manga-filter">
		<div class="manga-filter-list">
			<router-link v-for="(item,index) in filterArr" :key="index" :to="'../detail/detail?id='+item.comic_id" class="manga-filter-item">
				<img class="manga-filter-pic" v-lazy="item.cover_url">
				<div class="manga-filter-intor">
					<span class="manga-filter-txt1">{{item.title}}</span>
					<span class="manga-filter-txt2">更新到{{item.lated_seqno}}话</span>
					<div class="manga-filter-tag">
						<span v-for="(cur,curIndex) in item.theme" :key="curIndex">{{cur+' '}}</span>
					</div>
					<div class="manga-filter-txt3">{{item.brief_intrd}}</div>
				</div>
			</router-link>
			<LotusLoadMoreText :lotusLoadMData="lotusLoadMData"></LotusLoadMoreText>
			<div v-if="noDataFlag" class="list-no-data">
				<span>^_^主人，全部数据已加载完毕了喔^_^</span>
			</div>
		</div>
	</div>
</template>

<script>
	import LotusLoadMoreText from "../../components/lotusLoadMoreText/LotusLoadMoreText.vue";
    import loadMore from "../../Utils/loadMore";
	export default {
		data() {
			return {
				lotusLoadMData:{
					isShow:false,
					showLoadImg:true,
					text:''
				},
				noDataFlag:false,
				filterArr:[],
				id:0,
				pageShow:false,
				flag:true,
				type:'recommend',
				pageIndex:1,
				scrollHeight:0
			}
		},
		components:{
			LotusLoadMoreText
		},
		mounted(){
            const _this = this;
            const title = _this.$route.query.title;
            _this.$lotusChangeTitle(title);
            if(typeof document !== "undefined"){
                document.documentElement.scrollTop = 0;
            }
		},
        created() {
            const _this = this;
            //上拉加载更多
            const upLoadMore = () => {
                if (_this.$refs["filter"]) {
                    _this.getDataList();
                }
            };
            if(typeof window !== "undefined"){
                loadMore(upLoadMore, window.innerHeight * (2 / 3), 'up',true);
			}

            _this.getDataList();
		},
		methods: {
			getDataList(){
				const _this = this;
				if(_this.flag){
					_this.flag = false;
						this.$lotusAjax.post(`${_this.$lotusUtils.webUrl.api}mApi/`,{
							uri:"Index/more",
							options:JSON.stringify({
								filter:_this.type,
								page:_this.pageIndex
							})
						}).then((response)=>{
							_this.test = JSON.stringify(response);
							const res = response.data;
							if(res){
								_this.pageShow = true;
								_this.filterArr = _this.filterArr.concat(res);
								_this.pageIndex+=1;
								_this.flag = true;
								_this.lotusLoadMData.isShow = true;
								_this.noDataFlag = false;	
							}else{
								_this.lotusLoadMData.isShow = false;
								_this.noDataFlag = true;
							}
						});
				}
			}
		}
	}
</script>

<style lang="less">
	@import "./filter.less";
</style>
