
<style scope>
    div{
        background-color:orange;
    }
</style>
<script>
    export default{
        data(){
            return{

            }
        },
        mounted(){
            // 在组件 B 创建的钩子中监听事件
            this.$root.bus.$on('sayHi', function (id) {
               alert('你好石国庆')
            })
        },
        props:['age','genderSex']
    }
</script>
