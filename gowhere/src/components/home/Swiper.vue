<template>
    <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
          <swiper-slide v-for="item of list" :key="item.id" >
            <img :src="item.imgUrl" alt="" class="swiper-img">
          </swiper-slide>
            <!-- <swiper-slide>
                <img class="swiper-img" src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSITAcKAAMLsFkEUtAAAt6LAPvhBMAAwvI448.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloGIA4B5AAWRIOqCBycAAt6LAPML0sABZE4079.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0B/00/ChMkJ1wcloSIUYAuAAO3jLTBc34AAt6LAPy1R4AA7ek000.jpg" alt="">
            </swiper-slide> -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->

        </swiper>   
    </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props:{
      list: Array
    },
    data() {
      return {
        swiperOption: {
          loop:true,
          autoplay:true
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },
    computed: {

      showSwiper(){
        return this.list.length
      }
    },
    mounted() {

    }
  }
</script>
<style lang="stylus" scoped>
.swiper-container
    overflow hidden
    width 100%
    height 0
    padding-bottom 31%
    background #eee    
    .swiper-img
        width 100%
</style>