<template>
    <div>
        <div 
            class="item" 
            v-for="(item, index) of list" 
            :key="index"
        >
            <div class="item-title border-bottom">
                <span class="item-title-icon iconfont">&#xe61c;</span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-child">
                <detail-list :list="item.children"/>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'DetailList',
    props:{
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
.border-bottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.item-title
    line-height .8rem
    // background #f2f2f2
    font-size .32rem
    text-align left
    .item-title-icon
        position relative
        display inline-block
        width .36rem
        height 0.36rem
        margin-right .1rem
        margin-left .2rem
        color #000
.item-child
    padding 0 .2rem

</style>