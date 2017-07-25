<template>
    <div>
        <input type="radio" id="one" value="One1" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two2" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>

        <br>
        <input v-model="age" type="number">
        <br>
        <input v-model.lazy="msg" >
        {{msg}}
        <select v-model="selected"  multiple>
            <option>A1</option>
            <option>B2</option>
            <option>C3</option>
        </select>
        <span>Selected: {{ selected }}</span></div>
</template>
<script>
    /*
     * 计算缓存 vs method
     * */
    export default{
        data(){
            return {
                age:'',
                msg:'石国庆',
                ok: false,
                selected: [],
                picked:''
            }
        },
        methods: {
            say: function (message) {
                alert(message)
            }
        },
        watch:{
            age:function(val) {
                console.log(typeof val)
            }
        },
        mounted(){
            const _this = this
            setTimeout(function () {
                _this.ok = true
            }, 3000)

        },

    }
</script>
<style>
    body {
        background-color: #ff0000;
    }
</style>
