<template>
    <div>
        <home-header :city='city'/>
        <home-swiper :list='swiperList'/>
        <home-icons :list='iconList'/>
        <home-recommend :list='recommendList'/>
        <home-weekend :list='weekendList'/>
    </div>
</template>
<script>
import HomeHeader from '../components/home/Header'
import HomeSwiper from '../components/home/Swiper'
import HomeIcons from '../components/home/Icons'
import HomeRecommend from '../components/home/Recommend'
import HomeWeekend from '../components/home/Weekend'
import axios from 'axios'

export default {
    name:'home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return{
            city:'广东',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods: {
        getHomeInfo (){
            axios.get('http://yapi.demo.qunar.com/mock/81056/api/index')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.city= data.city
                this.swiperList= data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList 
            }
            console.log(res)
        }
    },
    mounted() {
        // this.lastCity = this.city
        this.getHomeInfo()
    },
    activated() {
        // if(this.lastCity !== this.city){
        //     this.lastCity = this.city
        //     this.getHomeInfo()
        // }
    },

}
</script>

<style lang="stylus" scoped>

</style>