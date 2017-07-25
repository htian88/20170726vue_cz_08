<template>
    <div @click="sayHi">
        <div>
            <slot name="header">
                只有在没有要分发的内容时才会显示。
            </slot>
        </div>
        姓名：石国庆，年龄：{{age}},性别：{{genderSex}}
        <div>
            <slot name="footer">
                只有在没有要分发的内容时才会显示。
            </slot>
        </div>

    </div>
</template>
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
        methods:{
            sayHi:function () {
                alert('你好周游')
                this.$root.bus.$emit('sayHi', 1)
            }
        },
        props:['age','genderSex']
    }
</script>
