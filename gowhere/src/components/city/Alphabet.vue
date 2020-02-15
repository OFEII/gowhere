<template>
    <div class="list">
        <ul>
            <li 
                class="item" 
                v-for="item of letters"
                :key="item" 
                :ref="item"
                @touchstart="handleTouchStart"
                @touchend="handleTouchEnd"
                @touchmove="handleTouchMove"
                @click="handleLetterClick"
                >
                {{item}}
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities: Object
    },
    computed: {
        letters(){
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data() {
        return {
            touchStatus: false,
            startY: 0
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        //function 节流
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
            // console.log(e.target.innerText)
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer  = setTimeout(() => {
                    const touchY = e.touches[0].clientY-79
                    const index= Math.floor((touchY-this.startY)/20)
                    console.log(index)
                    if(index >=0 && index <this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                }, 16);
            }
            // if(this.touchStatus){
            //     const startY = this.$refs['A'][0].offsetTop

            // }
        },
        handleTouchEnd(){
            this.touchStatus =false
        },
        handleTouchStart(){
            this.touchStatus = true
        }
    },
}
</script>

<style lang="stylus" scoped>
.list
    display flex
    // background #333
    flex-direction column
    justify-content center
    position absolute
    top 0
    right 0
    bottom 0
    width 0.4rem
    .item
        line-height .4rem
        text-align center
        color #7F7FD5
        font-weight bold




</style>