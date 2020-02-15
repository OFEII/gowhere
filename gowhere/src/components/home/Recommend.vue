<template>
    <div class="recommend">
        <div class="title">热门推荐</div>
        <ul>
            <router-link :to="'/detail/' + item.id" class="item" v-for="item of list" :key="item.id" tag="li">
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
                        <button class="item-btn">
                            查看详情
                        </button>
                    </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        list: Array
    }
    // data() {
    //     return {
    //         recommendList:[
    //         {
    //             id:'001',
    //             imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/c8df6bb9-a800-4df9-a582-8ae162c6126c.jpg_r_480x320x90_452da5f5.jpg',
    //             title:'深圳-澳门 2天跟团游',
    //             desc:'香港澳门2日游天星小轮游维港，钟楼赏灯光秀，威尼斯人探秘澳门风云，港珠澳大桥'

    //         },
    //         {
    //             id:'002',
    //             imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/c8df6bb9-a800-4df9-a582-8ae162c6126c.jpg_r_480x320x90_452da5f5.jpg',
    //             title:'深圳-澳门 2天跟团游',
    //             desc:'香港澳门2日游天星小轮游维港，钟楼赏灯光秀，威尼斯人探秘澳门风云，港珠澳大桥'

    //         },
    //         {
    //             id:'003',
    //             imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/c8df6bb9-a800-4df9-a582-8ae162c6126c.jpg_r_480x320x90_452da5f5.jpg',
    //             title:'深圳-澳门 2天跟团游',
    //             desc:'香港澳门2日游天星小轮游维港，钟楼赏灯光秀，威尼斯人探秘澳门风云，港珠澳大桥'

    //         },
            
    //         ]
    //     }
    // },
}
</script>

<style lang="stylus" scoped>
.recommend
    height 100%
    .title
        background #fff
        line-height 0.8rem
        text-indent .2rem
        margin-top .2rem
        font-weight bold
    .item
        border-bottom 2px solid #adaeb3cc
        overflow hidden
        display flex
        height 2rem
        background #fff
        padding-bottom .1rem
        .item-img-container
            width 2.5rem
            height 2rem
            padding 0.1rem
            .item-img
                width 2.4rem
                height 1.8rem
                border-radius 4px
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                text-align left
            .item-desc
                line-height .4rem
                color #333
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                text-align left
            .item-btn
                background #ff9300
                padding .12rem
                border-radius .06rem
                line-height .44rem
                margin-top .16rem
                margin-left -3rem
                color #fff
                font-weight bold
                font-size .28rem
            
</style>