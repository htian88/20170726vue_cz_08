<template>
    <div>
        {{a}}
        <p>{{message.split('').reverse().join('')}}</p>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <p>Reversed message: "{{ reverseMessage1() }}"</p>
    </div>
</template>
<script>
    /*
     * 计算缓存 vs method
     * */
    export default{
        data(){
            return{
                message: 'Hello',
                a:1
            }
        },
        methods: {
            reverseMessage1: function () {
                console.log('方法被执行了')
                return this.message.split('').reverse().join('')
            }
        },
        computed: {
            // a computed getter
            reversedMessage: function () {
                console.log('计算属性被执行了')
                // `this` points to the vm instance
                return this.message.split('').reverse().join('')
            }
        },
        mounted(){
            const _this=this
            setTimeout(function () {
                _this.a=2
            },3000)

        },

    }
</script>
<style>
    body{
        background-color:#ff0000;
    }
</style>
