<template>
    <div>
        MovieDetailContainer
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
        },
        beforeRouteEnter(to, from, next){
            console.log('组件内钩子执行了')
            next()
        }
    }
</script>

