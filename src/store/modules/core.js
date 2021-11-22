import {
} from '../../api'

var store = {
    namespaced: true,
    state: {
        drawer: false
    },
    getters: {
        getDrawer: state => state.drawer
    },
    mutations: {
        SET_DRAWER(state, payload){
            state.drawer = payload
        }
    },
    actions:{
        initStore(){
        },
        setDrawer(context,payload){
            context.commit('SET_DRAWER', payload)
        }
    }
}

export default store