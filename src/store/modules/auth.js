import axios from 'axios'

import {
    login
} from '../../api'

var store = {
    namespaced: true,
    state: {
        user_info: null
    },
    getters: {
        getUserInfo: state => state.user_info
    },
    mutations: {
        SET_USER_INFO(state, payload){
            state.user_info = payload
        }
    },
    actions:{
        initStore(context){
            let user_info = JSON.parse(localStorage.getItem('user_info'))
            context.commit('SET_USER_INFO', user_info)
        },
        signIn(context, payload){
            return new Promise((resolve, reject) => {
                login(payload).then(res => {
                    if(res.response){
                        // set token
                        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

                        localStorage.setItem('user_info', JSON.stringify(res.data))
                        context.commit('SET_USER_INFO', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        logout(context){
            // unset token
            axios.defaults.headers.common['Authorization'] = '';

            localStorage.removeItem('user_info')
            context.commit('SET_USER_INFO', null)
        }
    }
}

export default store