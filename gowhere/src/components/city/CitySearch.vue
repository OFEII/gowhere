<template>
    <div>
        <div class="search">
            <input v-model='keyword' class="search-input" placeholder="输入城市名或拼音" type="text">
        </div>
        <div 
            class="search-content"
            ref="search"
            v-show="keyword"
        >
            <ul>
                <li 
                    v-for="item of list" 
                    :key="item.id" 
                    class="search-item border-bottom"
                >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities: Object
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    },
    data() {
        return {
            keyword:'',
            list:[],
            timer: null
        }
    },
    computed: {
        hasNoData(){
            return !this.list.length
        }
    },
    watch: {
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
            }
            this.timer = setTimeout(() => {
                const res = []
                for(let i in this.cities){
                    this.cities[i].forEach((val) => {
                        if(val.spell.indexOf(this.keyword)>-1||val.name.indexOf(this.keyword)>-1){
                            res.push(val)
                        }
                        
                    });
                }
                this.list = res
            }, 100);
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
.search 
    height .8rem
    padding 0.1rem
    background: #7F7FD5
    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)
    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)
    align-items center
    justify-content center
    .search-input
        box-sizing border-box
        width 100%
        border-radius 4px
        text-align center
        padding 0 .2rem
        width 6rem
        color #666
        line-height .62rem
.search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.8rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
        line-height .8rem
        padding-left .2rem
        color #666
        background #fff
        text-align left
        padding-left .8rem
     
</style>