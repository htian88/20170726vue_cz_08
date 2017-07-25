import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import AppContainer from '../containers/AppContainer.vue'
import routes from './routes.js'

const router = new VueRouter({
    mode:'hash',
    scrollBehavior (to, from, savedPosition) {
        if (to.name === 'call' && from.name === 'topic') {
            return {x: 0, y: +sessionStorage.getItem('scrollTop') || 0}
        } else {
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        }
    },
    routes
})

router.beforeEach((to, from, next) => {
   console.log('全局的钩子执行了')
    next()
})


const app = new Vue({
    data:{
        bus:new Vue()
    },
    router,
    render: h => h(AppContainer),
}).$mount('#app')



// const app = new Vue({
//     render: h => h(AppContainer),
// }).$mount('#app')
//


// new Vue({
//     el:'#app',
//     render: h => h(App)
// })