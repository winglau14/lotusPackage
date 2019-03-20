<template>
	<div class="manga-category">
		<div class="manga-category-hot">热门分类</div>
		<div class="manga-category-hot-list">
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=4&title=恐怖">
				<span class="manga-category-txt">| 恐怖</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_26_079e5bcf8a73b77857e0d212cd5e0d20.png/0">
			</router-link>
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=6&title=妖怪">
				<span class="manga-category-txt">| 妖怪</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_26_9e3365cff339f85bcc93fc72d9a27884.png/0">
			</router-link>
		</div>
		<div class="manga-category-hot-list">
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=11&title=恋爱">
				<span class="manga-category-txt">| 恋爱</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_26_79f6f2156ce47f4c47579671444263c9.png/0">
			</router-link>
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=2&title=玄幻">
				<span class="manga-category-txt">| 玄幻</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_26_1b8ef0efec87763077d2ee95e4cdaa13.png/0">
			</router-link>
		</div>
		<div class="manga-category-hot-list">
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=9&title=热血">
				<span class="manga-category-txt">| 热血</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_43b05722507f9e913533ae00f123bdeb.png/0">
			</router-link>
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=7&title=悬疑">
				<span class="manga-category-txt">| 悬疑</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_64085cac227c31477a921a9b52e07410.png/0">
			</router-link>
		</div>
		<view class="manga-category-hot-list">
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=13&title=彩虹">
				<span class="manga-category-txt">| 彩虹</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_6194ea4c4376578cbdf8c1f91b883922.png/0">
			</router-link>
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=12&title=少女">
				<span class="manga-category-txt">| 少女</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_d1c3588b16012b76563fe4890ad62151.png/0">
			</router-link>
		</view>
		<div class="manga-category-hot-list">
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=16&title=韩漫">
				<span class="manga-category-txt">| 韩漫</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_6268987d7f90727ab17db3f6d1eee537.png/0">
			</router-link>
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=8&title=科幻">
				<span class="manga-category-txt">| 科幻</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_c06f9704479b3a2bc3517d1c48bd9909.png/0">
			</router-link>
		</div>
		<div class="manga-category-hot-list">
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=3&title=都市">
				<span class="manga-category-txt">| 都市</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_2323eb2554ddfa153bb147784ef38d2e.png/0">
			</router-link>
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=14&title=治愈">
				<span class="manga-category-txt">| 治愈</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_56606cf718b6ce3f1e4ad3c26972f31b.png/0">
			</router-link>
		</div>
		<div class="manga-category-hot-list">
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=10&title=逗比">
				<span class="manga-category-txt">| 逗比</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_eeedc3e7f8f329425787b49142f4dd93.png/0">
			</router-link>
			<router-link class="manga-category-link" to="/pages/categoryList/categoryList?id=5&title=校园">
				<span class="manga-category-txt">| 校园</span>
				<img class="manga-category-pic" src="https://manhua.qpic.cn/manhua_detail/0/30_11_27_56fba2120c3a669ec521a7c2c89311a4.png/0">
			</router-link>
		</div>
		<tabBar :tabBarData="tabBarData"></tabBar>
	</div>
</template>

<script>
    import tabBar from "../../components/lotusTabBar/LotusTabBar.vue";
	export default {
	    data(){
	      return{
              tabBarData:this.$lotusUtils.tabBarData
		  }
		},
        components:{
            tabBar
		}
	}
</script>

<style lang="less">
	@import "./category.less";
</style>
