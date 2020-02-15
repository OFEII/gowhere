<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe6be;</span>
        </div>
        <div class="header-input">
            输入城市/景点/
            <span class="iconfont">&#xe60c;</span>
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{this.city}}
                <span class="iconfont">&#xe61c;</span>
            </div>

        </router-link>
        
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }

}
</script>

<style lang="stylus" scoped>
    .header
      background: #7F7FD5;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      color #fff
      display flex
      line-height .86rem
      .header-left
        width .64rem
        float left
        .back-icon
            text-align center
            font-size .4rem
      .header-input
        flex 1
        margin-top .12rem
        margin-left .1rem
        height .64rem
        background #fff
        border-radius 8px
      .header-right
        width 1.24rem
        float right
        color #fff     


</style>