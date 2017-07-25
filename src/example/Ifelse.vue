<template>
    <div>
        <a v-on:click.once="say('nihao')">点击事件</a>
        <div>
            <span v-for="n in 10">{{ n }}</span>
        </div>
        <div>
            <div v-if="Math.random() > 0.5">
                Sorry
            </div>
            <div v-else>
                Not sorry
            </div>

            template
            <template v-if="ok">
                <h1>Title</h1>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
            </template>
        </div>
    </div>

</template>
<script>
    /*
     * 计算缓存 vs method
     * */
    export default{
        data(){
            return{
               ok:false
            }
        },
        methods: {
            say: function (message) {
                alert(message)
            }
        },
        mounted(){
            const _this=this
            setTimeout(function () {
                _this.ok=true
            },3000)

        },

    }
</script>
<style>
    body{
        background-color:#ff0000;
    }
</style>
