<template>
    <div>
    {{a}}
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                a:1
            }
        },
        beforeCreate(){
            console.log('beforeCreate')
        },
        created(){
            console.log('created')
        },
        beforeMount(){
            console.log('beforeMount')
        },
        mounted(){
            console.log('mounted')
            const _this=this
            setTimeout(function () {
                _this.a=2
            },3000)

        },
        beforeUpdate(){
            console.log('beforeUpdate')
        },
        updated(){
            console.log('updated')
        },
        beforeDestroy(){
            console.log('beforeDestroy')
        },
        destroyed(){
            console.log('destroyed')
        },
    }
</script>
