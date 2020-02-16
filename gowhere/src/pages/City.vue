<template>
    <div>
        <city-header/> 
        <city-search
            :cities='cities' 
        />    
        <city-list 
            :cities='cities' 
            :hot='hotCities'
            :letter='letter'
        />
        <city-alphabet 
            :cities='cities'
            @change="handleLetterChange"
        />
    </div>
</template>

<script>
import CityHeader from '../components/city/CityHeader'
import CitySearch from '../components/city/CitySearch'
import CityList from '../components/city/CityList'
import CityAlphabet from '../components/city/Alphabet'
import axios from 'axios'
export default {
    name:'city',
    components:{
        CityAlphabet,
        CityList,
        CitySearch,
        CityHeader,  
    },
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods: {
        getCityInfo(){
            axios.get('/api/city')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            // console.log(res)
            // console.log(res.data.data)
            this.cities = res.data.data.cities
            this.hotCities = res.data.data.hotCities
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted() {
        this.getCityInfo()
    },

}
</script>

<style lang="stylus" scoped>

</style>