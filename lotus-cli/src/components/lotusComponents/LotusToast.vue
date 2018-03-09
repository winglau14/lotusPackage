<template>
    <div v-if="toastObj.type"  class="lotus-toast">
        <div class="lotus-toast-inner">
            <p v-text="toastObj.text"></p>
        </div>
    </div>
</template>
<style lang="less">
    @import '../../style/lotusComponents/lotusToast.less';
</style>
<script>

    export default {
        name: 'lotus-toast',
        props: ['lotusToastData'],
        data () {
            return {
                toastObj: {
                    text: '',
                    type:''
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