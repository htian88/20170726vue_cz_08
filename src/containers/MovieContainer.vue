<template>
    <div>
        MovieContainer
        <div>
            <router-link to="/movie/movieList">电影列表</router-link>
            <router-link to="/movie/movieDetail">电影详细</router-link>
        </div>
        <div>
            <router-view></router-view>
            <router-view name="view1"></router-view>
            <router-view name="view2"></router-view>
        </div>

    </div>
</template>
<style scope>

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

