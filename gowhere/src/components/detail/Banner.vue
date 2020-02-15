<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSITAcKAAMLsFkEUtAAAt6LAPvhBMAAwvI448.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    大连圣亚海洋世界（AAAA景区）
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe62a;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary
            :imgs='imgs'
            v-show="showGallary"
            @close="handleGallaryClose"
        />      
    </div>

</template>

<script>
import CommonGallary from '../common/gallary/gallary'
export default {
    name:'DetailBanner',
    components:{
        CommonGallary
    },
    data() {
        return {
            showGallary:false,
            imgs:[
                'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSITAcKAAMLsFkEUtAAAt6LAPvhBMAAwvI448.jpg',
                'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloGIA4B5AAWRIOqCBycAAt6LAPML0sABZE4079.jpg',
                'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSIUYAuAAO3jLTBc34AAt6LAPy1R4AA7ek000.jpg'
            ],
        }
    },
    methods: {
        handleBannerClick(){
            this.showGallary =true
        },
        handleGallaryClose(){
            this.showGallary = false
        }
    },
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    padding-bottom 55%
    height 0
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            margin-top .14rem
            padding .16rem
            height .32rem
            line-height .32rem
            border-radius .2rem
            background #000c
            font-size .24rem
            .banner-icon
                font-size .24rem    
</style>