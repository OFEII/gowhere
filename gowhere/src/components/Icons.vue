<template>
    <div class="icons">
        <swiper :options="swiperOption" ref="iconSwiper" @someSwiperEvent="callback">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"
                     v-for="item of page"
                     :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>

export default {
    name:'HomeIcons',
    data() {
      return {
          iconList:[
              {
                  id:'001',
                  imgUrl:'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  desc:'酒店'
              },
              {
                  id:'002',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                  desc:'旅行'
              },
              {
                  id:'003',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/train.png',
                  desc:'火车'
              },
              {
                  id:'004',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                  desc:'订票'
              },
              {
                  id:'005',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                  desc:'订票'
              },
              {
                  id:'006',
                  imgUrl:'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                  desc:'酒店'
              },{
                  id:'007',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
                  desc:'旅行'
              },
              {
                  id:'008',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/train.png',
                  desc:'火车'
              },
              {
                  id:'009',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/package.png',
                  desc:'订票'
              },
              {
                  id:'0010',
                  imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
                  desc:'订票'
              },
          ],
          swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        }
      }
    },    
    computed: {
      swiper() {
        return this.$refs.iconSwiper.swiper
      },
      pages(){
          const pages=[]
          this.iconList.forEach((item,index) => {
              const page =Math.floor(index/8)
              if(!pages[page]){
                  pages[page]=[]
              }
              pages[page].push(item)
          })
          return pages
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      this.swiper.slideTo(0, 1000, false)
    }
}
</script>

<style lang="stylus" scoped>
.icons>>>.swiper-container
    // background #333
    // overflow hidden
    margin-top .2rem
    height 0
    padding-bottom 50%
    .icon
        position relative
        float left
        overflow hidden
        width 25%
        padding-bottom 25%
        // background red
    .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom  .44rem
        box-sizing border-box
        padding 0.1rem
        // background blue
        .icon-imgcontent
            display block
            margin 0 auto 
            height 100%         
    .icon-desc
        text-align center
        position absolute
        bottom 0
        left 0
        right 0
        color #000
        font-weight bold
        height .44rem
        line-height .44rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
            
            

</style>