<template>
    <div class="lotus-tab-bar">
        <div class="lotus-tab-bar-wrap">
            <div class="lotus-tab-bar-list" v-for="(item,index) in tabBarData" :key="index" >
                <div v-if="item.path == curPath" class="lotus-tab-bar-item">
                    <img class="lotus-tab-bar-item-pic" :src="item.path == curPath ? item.selectedIcon : item.icon" alt="">
                    <p :style="'color:'+item.selectedColor" class="lotus-tab-bar-item-title">{{item.title}}</p>
                </div>
                <router-link class="lotus-tab-bar-item" :to="item.path" v-else>
                    <img class="lotus-tab-bar-item-pic" :src="item.path == curPath ? item.selectedIcon : item.icon" alt="">
                    <p :style="'color:'+item.color" class="lotus-tab-bar-item-title">{{item.title}}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    @import './lotusTabBar.less';
</style>
<script>

    export default {
        name: 'tab-bar',
        props: ['tabBarData'],
        data() {
            return {
                curPath:this.$route.path
            }
        },
        components: {},
        methods: {},
        mounted() {
        },
        created() {

        }
    }
</script>