<template>
    <div>
        <router-link tag='div' to='/' class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe6be;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to='/'>
                <div class="iconfont header-fixed-back">&#xe6be;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailHeader',
    data() {
        return {
            showAbs: true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    activated() {
        window.addEventListener('scroll',this.handleScroll)
    }, 
    methods: {
        handleScroll(){
            const top = document.documentElement.scrollTop
            if(top>60) {
                let opacity = top/140
                opacity = opacity>1 ?1:opacity
                this.opacityStyle={opacity}
                this.showAbs =false
            }else{
                this.showAbs = true
            }
        }
    },

}
</script>

<style lang="stylus" scoped>
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width 0.8rem
        height 0.8rem
        border-radius .4rem
        line-height .4rem
        text-align center
        justify-content center
        background #333c
        .header-abs-back
            color #fff
            font-size .4rem
            margin-top .2rem
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
        
        overflow hidden
        height 0.86rem
        line-height 0.86rem
        text-align center
        color #fff 
        background: #7F7FD5
        background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)
        background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)
        font-size .32rem
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem        


</style>