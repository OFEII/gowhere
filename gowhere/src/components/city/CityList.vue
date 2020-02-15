<template>
    <div class="list" ref='wrapper'>
        <div>
            <div class="area">
                <div class="title border-bottom">当前城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper">
                        <div class="btn">{{this.currentCity}}</div>
                    </div>                
                </div>
            </div>
            <div class="area">
                <div class="title border-bottom">热门城市</div>
                <div class="btn-list">
                    <div 
                        class="btn-wrapper" 
                        v-for="item of hot" 
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                        onClick="javascript:;"
                    >
                        <div class="btn">{{item.name}}</div>
                    </div>
                        
                </div>
            </div>
            <div 
                class="area" 
                v-for="(item, key) of cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-bottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                        v-for="innerItem of item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import Bscroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        cities: Object,
        hot: Array,
        letter: String,
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    methods: {
        handleCityClick(city){
            // this.$store.dispatch('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
    },
    watch: {
        letter(){
            // console.log(this.letter)
            if(this.letter){
                const element = this.$refs[this.letter][0]
                // console.log(element)
                this.scroll.scrollToElement(element, { mouseWheel: true, click: true, tap: true })
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
.border-bottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.list
    position absolute
    overflow hidden
    top 1.8rem
    left 0
    right 0
    bottom 0
    // background green    
    .title
        line-height .6rem
        background #eee 
        padding-left .2rem
        color #666 
        font-size .26rem
        text-align left
        font-weight bold
     
    .btn-list
        overflow hidden 
        padding 0.1rem .6rem .1rem .1rem
        .btn-wrapper
            float left
            width 33.33%
            .btn
                margin .1rem
                padding .1rem 0
                text-align center
                border 2px solid #ccc
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
            text-align left
                            

</style>