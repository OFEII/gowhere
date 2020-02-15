import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
// import List from '../pages/List'
import City from '../pages/City'
import Detail from '../pages/Detail'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    //   },
    routes:[
        {
            path:'/',
            name:'home',
            component:Home   
        },
        {
            path:'/city',
            name:'city',
            component:City   
        },
        {
            path:'/detail/:id',
            name:'detail',
            component:Detail   
        },
    ]
    
})