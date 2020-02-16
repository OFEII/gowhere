<template>
    <div ref='dwrapper'>
        <detail-banner 
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        />
        <detail-header/>
        <div class="content" >
            <detail-list :list='list'/>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import  DetailBanner from '../components/detail/Banner'
import  DetailHeader from '../components/detail/Header'
import  DetailList from '../components/detail/List'
export default {
    name:'Detail',
    components:{
        DetailHeader,
        DetailBanner,
        DetailList
    },
    data() {
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods: {
        getDetailInfo(){
            axios.get('/api/detail',{
                params:{
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res){
            const data = res.data.data
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
            console.log(data.gallaryImgs)
        }
    },
    mounted(){
        this.getDetailInfo()
        this.scroll = new Bscroll(this.$refs.dwrapper, { mouseWheel: true, click: true, tap: true })
    },
}
</script>

<style lang="stylus" scoped>
.content
    height 20rem
</style>