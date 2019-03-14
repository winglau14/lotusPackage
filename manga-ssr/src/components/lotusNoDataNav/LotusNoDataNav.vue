<template>
    <div v-if="noDataNavObj.show" :style="'padding-top:'+(noDataNavObj.paddingTop?noDataNavObj.paddingTop:'')"  class="lotus-no-data">
        <p class="lotus-no-data-text">
            <i v-if="noDataNavObj.showLine" :style="'background:'+(noDataNavObj.lineColor?noDataNavObj.lineColor:'')" class="lotus-no-data-line"></i><span :style="'color:'+(noDataNavObj.textColor?noDataNavObj.textColor:'')" v-text="noDataNavObj.text"></span><i v-if="noDataNavObj.showLine" :style="'background:'+(noDataNavObj.lineColor?noDataNavObj.lineColor:'')" class="lotus-no-data-line"></i>
        </p>
    </div>
</template>
<style lang="less">
    @import './lotusNoDataNav.less';
</style>
<script>

    export default {
        name: 'lotus-no-data-nav',
        props: ['lotusNoDataNavData'],
        data () {
            return {
                noDataNavObj:{
                    show:false,
                    text:''
                }
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