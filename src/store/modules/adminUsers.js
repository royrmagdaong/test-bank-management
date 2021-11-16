import {
    getUsers
} from '../../api'

var store = {
    namespaced: true,
    state: {
        users: []
    },
    getters: {
        getUsers: state => state.users
    },
    mutations: {
        SET_USERS(state, payload){
            state.users = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        getUsers(context, payload){
            return new Promise((resolve, reject) => {
                getUsers(payload).then(res => {
                    if(res.response){
                        context.commit('SET_USERS', res.data)
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