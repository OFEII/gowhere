<template>
    <div class="city-header">
        城市列表
        <router-link to="/">
            <div class="iconfont header-back">&#xe6be;</div>
        </router-link>
    </div>
    
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
.city-header
    position relative   
    overflow hidden
    line-height .86rem
    height .86rem
    text-align center
    color #fff
    background: #7F7FD5
    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)
    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)
    font-size .32rem
    font-weight bold
    .header-back
        position absolute
        top 0
        left 0
        width 0.64rem
        text-align center
        font-size .4rem
        color #fff


</style>