<template>
    <div>
        <shi-guoqing age='999' :gender-sex="gender"></shi-guoqing>
        {{msg}}
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import Shiguoqing from '../components/Shiguoqing.vue'
    export default{
        data(){
            return{
                msg:'hello vue',
                gender:'男'
            }
        },
        components:{
            'shi-guoqing':Shiguoqing
        }
    }
</script>