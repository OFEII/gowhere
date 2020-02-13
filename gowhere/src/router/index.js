import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import List from '../pages/List'

Vue.use(Router)

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
         path:'/',
         name:'home',
         component:Home   
        },
        {
            path:'/list',
            name:'list',
            component:List   
           },
    ]
})