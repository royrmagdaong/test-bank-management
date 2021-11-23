import {
    getClass,
    createClass
} from '../../api'

var store = {
    namespaced: true,
    state: {
        class: {data:[],count:0}
    },
    getters: {
        getClass: state => state.class
    },
    mutations: {
        SET_CLASS(state, payload){
            state.class = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        getClass(context, payload){
            return new Promise((resolve, reject) => {
                getClass(payload).then(res => {
                    if(res.response){
                        console.log(res)
                        context.commit('SET_CLASS', res)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        createClass(context, payload){
            return new Promise((resolve, reject) => {
                createClass(payload).then(res => {
                    if(res.response){
                        console.log(res)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
    }
}

export default store