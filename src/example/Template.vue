<template>

    <div>
        <div :shiguoqing="'石国庆'">v-bind简写</div>
        <br>
        <div>{{str|capitalize(1,2)}}</div>
        <br>
        <p v-if="seen">Now you see me</p>
        <br>
        <div v-bind:id="id">{{a}}</div>
        <br>
        <div>{{a}}</div>
        <br>
        <div v-html="a"></div>
        <br>
        <div v-once>{{a}}</div>
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
                a:'<div>shiguqoing</div>',
                id:34343,
                seen:false,
                str:'dfdfdf'
            }
        },
        filters: {
            capitalize: function (value,prop1,prop2) {
                console.log(prop1)
                console.log(prop2)
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
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
                _this.seen=true
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
