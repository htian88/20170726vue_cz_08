<template>
    <div>
        <div id="demo">{{ fullName }}</div>
        <div id="demo1">{{ firstName }}</div>
        <div id="demo2">{{ lastName }}</div>
    </div>
</template>
<script>
    /*
    * 计算属性  vs  watch
    * */
    export default{
        data(){
            return{
                firstName: 'Foo',
                lastName: 'Bar',
//                fullName: 'Foo Bar'
            }
        },
        computed: {
//            fullName: function () {
//                return this.firstName + ' ' + this.lastName
//            }
            fullName: {
                // getter
                get: function () {
                    return this.firstName + ' ' + this.lastName
                },
                // setter
                set: function (newValue) {
                    var names = newValue.split(' ')
                    this.firstName = names[0]
                    this.lastName = names[names.length - 1]
                }
            }
        },
//        watch: {
//            firstName: function (val) {
//                this.fullName = val + ' ' + this.lastName
//            },
//            lastName: function (val) {
//                this.fullName = this.firstName + ' ' + val
//            }
//        },
        mounted(){
            const _this=this
            setTimeout(function () {
                _this.fullName='shi  guoqing'
            },3000)

        },

    }
</script>
<style>
    body{
        background-color:#ff0000;
    }
</style>
