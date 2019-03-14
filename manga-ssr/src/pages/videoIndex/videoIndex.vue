<template>
    <div class="manga-video-index">
        <div class="manga-video-index-list">
            <router-link class="manga-video-index-link" to="/watch?title=海贼王">
                <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/154771241415.jpg" alt="">
                <p class="manga-video-index-title1">海贼王</p>
                <p class="manga-video-index-title2">更新至:875话</p>
            </router-link>
            <router-link class="manga-video-index-link" to="/watch?title=火影忍者：博人传之次世代继承者">
                <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/15477120582.jpg" alt="">
                <p class="manga-video-index-title1">火影忍者：博人传之次世代继承者</p>
                <p class="manga-video-index-title2">更新至:97话</p>
            </router-link>
            <router-link class="manga-video-index-link" to="/watch?title=龙珠">
                <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/154773044811.jpg" alt="">
                <p class="manga-video-index-title1">龙珠</p>
                <p class="manga-video-index-title2">更新至:153话</p>
            </router-link>
            <router-link class="manga-video-index-link" to="/watch?title=高达创形者">
                <img src="https://img.yongjiu7.com/upload/vod/2019-01-17/154771548718.jpg" alt="">
                <p class="manga-video-index-title1">高达创形者</p>
                <p class="manga-video-index-title2">更新至:25话</p>
            </router-link>
            <router-link class="manga-video-index-link" to="/watch?title=银魂第六季">
                <img src="https://img.yongjiu7.com/upload/vod/2019-01-30/15488210571.jpg" alt="">
                <p class="manga-video-index-title1">银魂第六季</p>
                <p class="manga-video-index-title2">更新至:355话</p>
            </router-link>
        </div>
        <LotusToTop></LotusToTop>
        <tabBar :tabBarData="tabBarData"></tabBar>
    </div>
</template>
<style lang="less">
    @import './videoIndex.less';
</style>
<script>
    import LotusToTop from "../../components/lotusToTop/lotusToTop.vue";
    import tabBar from "../../components/lotusTabBar/LotusTabBar.vue";
    export default {
        name: 'manga-video-index',
        props: ['videoIndexData'],
        data() {
            return {
                tabBarData:[{
                    path:'/videoIndex',
                    icon:'/static/images/tv-icon1.png',
                    selectedIcon:'/static/images/tv-icon2.png',
                    title:'视频',
                    color:'#333',
                    selectedColor:'#13a3ff'
                },{
                    path:'/',
                    icon:'/static/images/home-icon1.png',
                    selectedIcon:'/static/images/home-icon2.png',
                    title:'漫画',
                    color:'#333',
                    selectedColor:'#13a3ff'
                },{
                    path:'/pages/category/category',
                    icon:'/static/images/category-icon1.png',
                    selectedIcon:'/static/images/category-icon2.png',
                    title:'分类',
                    color:'#333',
                    selectedColor:'#13a3ff'
                },{
                    path:'/pages/search/search',
                    icon:'/static/images/search-icon1.png',
                    selectedIcon:'/static/images/search-icon2.png',
                    title:'搜索',
                    color:'#333',
                    selectedColor:'#13a3ff'
                }]
            }
        },
        components: {
            LotusToTop,
            tabBar
        },
        methods: {},
        mounted() {

        },
        created() {

        }
    }
</script>