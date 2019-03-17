import Vue from "vue"
import Router from "vue-router"
//const HelloWorld = resolve => require(['@/pages/HelloWorld'], resolve);
//const Test = resolve => require(['@/testPages/Test'], resolve);
import Index from "../pages/index/index.vue"
import Detail from "../pages/detail/detail.vue"
import Filter from "../pages/filter/filter.vue"
import View from "../pages/view/view.vue"
import Category from "../pages/category/category.vue"
import CategoryList from "../pages/categoryList/categoryList.vue"
import Search from "../pages/search/search.vue"
import VideoIndex from "../pages/videoIndex/videoIndex.vue"
import VideoDetail from "../pages/videoDetail/videoDetail.vue"
import Video from "../pages/video/video.vue"
import Test from "../testPages/Test.vue"

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/pages/detail/detail',
        name: 'Detail',
        component: Detail
    },{
        path: '/pages/filter/filter',
        name: 'Filter',
        component: Filter
    },{
        path: '/pages/view/view',
        name: 'View',
        component: View
    },{
        path: '/pages/category/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/pages/categoryList/categoryList',
        name: 'CategoryList',
        component: CategoryList
    },
    {
        path: '/pages/search/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/videoIndex',
        name: 'VideoIndex',
        component: VideoIndex
    },
    {
        path: '/videoDetail',
        name: 'VideoDetail',
        component: VideoDetail
    },
    {
        path: '/watch',
        name: 'Video',
        component: Video
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
];
export function CreateRouter() {
    return new Router({
        mode: 'history',
        routes/*: [
            {
                path: '/',
                name: 'HelloWorld',
                component: HelloWorld
            },
            {
                path: '/test',
                name: 'Test',
                component: Test
            }
        ]*/
    });
}
