<template>
    <div>
        <div>
            <router-link to="/home">首页</router-link>
            <router-link to="/movie">电影页面</router-link>
            <router-link to="/call">联系我们</router-link>
            <router-link to="/shiguoqing">别名</router-link>
        </div>
        <div>
            <!--<transition name="fade" mode="out-in">-->
                <router-view class="view"></router-view>
            <!--</transition>-->
        </div>
    </div>
</template>
<style>
    .view {
        border: 1px solid red;
        height: 2000px;
        position: relative;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .child-view {
        position: absolute;
        transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(30px, 0);
        transform: translate(30px, 0);
    }
    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>