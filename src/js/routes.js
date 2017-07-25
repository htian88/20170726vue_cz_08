import HomeContainer from '../containers/HomeContainer.vue'
import MovieContainer from '../containers/MovieContainer.vue'
import MovieListContainer from '../containers/MovieListContainer.vue'
import MovieDetailContainer from '../containers/MovieDetailContainer.vue'
// import CallContainer from '../containers/CallContainer.vue'
const CallContainer = r => require.ensure([], () => r(require('../containers/CallContainer.vue')), 'call')
import NotFoundContainer from '../containers/NotFoundContainer.vue'

export default [
    { path: '/home', component: HomeContainer },
    {
        path: '/movie',
        component: MovieContainer,
        beforeEnter: (to, from, next) => {
            console.log('独享的钩子执行了')
            next()
        },
        children: [
            { path: '', component: MovieListContainer },
            {
                path: 'movieList',
                alias: '/shiguoqing',
                components: {
                    default: MovieListContainer,
                    view1: HomeContainer,
                    view2: CallContainer
                }
                // component: MovieListContainer
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: 'movieDetail',
                component: MovieDetailContainer
            }
        ]
    },
    { path: '/call', component: CallContainer,meta: { scrollToTop: true } },
    { path: '/', redirect: '/home'},
    { path: '*', component: NotFoundContainer },
]