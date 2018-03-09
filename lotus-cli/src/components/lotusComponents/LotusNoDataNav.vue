<template>
    <div v-if="noDataNavObj.show" class="lotus-no-data">
        <p class="lotus-no-data-text">
            <span v-text="noDataNavObj.text"></span>
        </p>
    </div>
</template>
<style lang="less">
    @import '../../style/lotusComponents/lotusNoDataNav.less';
</style>
<script>

    export default {
        name: 'tab-bar',
        props: ['messageData'],
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