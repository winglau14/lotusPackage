<template>
    <div class="yjl-home">
        <vHeader></vHeader>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import vHeader from './Header'
    export default {
        name: 'v-home',
        props: ['messageData'],
        data () {
            return {}
        },
        components: {
            vHeader
        },
        methods: {},
        mounted(){

        },
        created(){

        }
    }
</script>