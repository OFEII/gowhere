import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    // state:{
    //     city:defaultCity
    //     // city: localStorage.city||'深圳'
    // },
    state: state,
    // state,
    // actions:{
    //     changeCity(ctx, city){
    //         ctx.commit('changeCity', city)
    //     }
    // },
    mutations: mutations,
    // mutations
    //localstorge
    // getters:{
    //     doubleCity(state){
    //         return state.city +' '+state.city
    //     }
    // }
})