<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options='swiperOption'>
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>

            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>   
        </div>
    </div>
</template>
<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default(){
                return [
                // 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSITAcKAAMLsFkEUtAAAt6LAPvhBMAAwvI448.jpg',
                // 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloGIA4B5AAWRIOqCBycAAt6LAPML0sABZE4079.jpg',
                // 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSIUYAuAAO3jLTBc34AAt6LAPy1R4AA7ek000.jpg',
                ]
            }
        }
    },
    data() {
      return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type : 'fraction'
                },    
                observer:true,
                observeParents:true,
            }
    }
    },methods: {
        handleGallaryClick(){
            this.$emit('close')
        }
    },
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #333
    .wrapper
        width 100%
        height 0
        padding-bottom 100%
        // background #fff
        .gallary-img
            width 100%
        .swiper-pagination
            bottom -.8rem      
            color #fff
</style>