<template>
    <div class="swiper-container">
        <swiper :options="swiperOption" v-if="showSwiper">
          <swiper-slide v-for="item of list" :key="item.id" >
            <img :src="item.imgUrl" alt="" class="swiper-img">
          </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
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
          pagination: {
            el: '.swiper-pagination',
            type : 'progress'
          },
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