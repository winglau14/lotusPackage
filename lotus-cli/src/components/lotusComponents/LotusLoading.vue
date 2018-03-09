<template>
    <div v-show="show" class="lotus-loading-wrap">
        <div class="lotus-loading-inner">
            <div class="lotus-loading-center">
                <i class="lotus-loading-img"></i>
                <p class="lotus-loading-text">加载中</p>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    @import "../../style/lotusComponents/loutsLoading.less";
</style>
<script>

    export default {
        name: 'lotus-loading',
        props: ['messageData'],
        data () {
            return {
                show: false
            }
        },
        components: {},
        methods: {},
        mounted(){

        },
        created(){

        }
    }
</script>