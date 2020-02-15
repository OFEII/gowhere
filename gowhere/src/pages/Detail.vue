<template>
    <div>
        <detail-banner/>
        <detail-header/>
        <div class="content" ref='dwrapper'>
            <div >123</div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import  DetailBanner from '../components/detail/Banner'
import  DetailHeader from '../components/detail/Header'
export default {
    name:'Detail',
    components:{
        DetailHeader,
        DetailBanner,
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.dwrapper, { mouseWheel: true, click: true, tap: true })
    },
}
</script>

<style lang="stylus" scoped>
.content
    height 20rem
</style>