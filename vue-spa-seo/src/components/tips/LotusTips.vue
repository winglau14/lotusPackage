<template>
    <div v-if="flag" class="lotus-tips">
        <span v-text="lotusTipsData?lotusTipsData:'温馨提示：建议在Wi-Fi环境下围观，效果更佳^_^'"></span>
        <span @click="close" class="lotus-tips-delete"></span>
    </div>
</template>
<style lang="less">
    @import "./lotusTips.less";
</style>
<script>

    export default {
        name: 'lotus-tips',
        props: ['lotusTipsData'],
        data() {
            return {
                flag:true
            }
        },
        components: {},
        methods: {
            close(){
                this.flag = false;
            }
        },
        mounted() {

        },
        created() {

        }
    }
</script>