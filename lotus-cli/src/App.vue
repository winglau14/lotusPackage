<template>
    <div class="index-app">
        <transition name="fade">
            <router-view keep-alive></router-view>
        </transition>
    </div>
</template>

<style lang="less">
    @import 'style/base.less';
    body, html {
        background-color: #e95853;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        color:#666;
    }
    /**页面切换淡入淡出效果**/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s ease-in-out;
    }

    .fade-enter-active {
        transition-delay: .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .index-app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: #222;
        display: block;
    }

    a:hover {
        text-decoration: none !important;
    }

    a:active {
        text-decoration: none !important;
        background: #ececec;
    }
    .lock-body{
        height:100%;
        overflow: hidden;
    }
    .body-bg{
        background: #fff !important;
    }
    .abso-body{
        position: absolute;
        left:0;
        width:100%;
        height:100%;
    }
</style>

