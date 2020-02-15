<template>
    <div class="recommend">
        <div class="title">周末旅游</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">
                <div class="item-img-container">
                    <img :src='item.imgUrl' class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">
                        {{item.title}}
                    </p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
.recommend
    height 10rem
    .title
        background #fff
        line-height 0.8rem
        text-indent .2rem
        margin-top .2rem
        font-weight bold
    .item
        border-bottom 2px solid #adaeb3cc
        overflow hidden
        display inline
        height 2rem
        background #fff
        padding-bottom .1rem
        .item-img-container
            overflow hidden
            width 100%
            height 0
            padding-bottom 34%
            .item-img
                width 100%
                border-radius 4px
        .item-info
            width 100%
            background #f2f2f2
            align-items center
            padding: .1rem
            .item-title
                line-height: .54rem
                font-size: .32rem
                white-space nowrap
                text-overflow ellipsis
                text-align left
            .item-desc
                line-height: .4rem
                color: #000          

                   
</style>