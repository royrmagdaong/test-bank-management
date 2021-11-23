import {
    getRooms,
    createRoom
} from '../../api'

var store = {
    namespaced: true,
    state: {
        rooms: {data:[],count:0}
    },
    getters: {
        getRooms: state => state.rooms
    },
    mutations: {
        SET_ROOMS(state, payload){
            state.rooms = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        getRooms(context, payload){
            return new Promise((resolve, reject) => {
                getRooms(payload).then(res => {
                    if(res.response){
                        console.log(res)
                        context.commit('SET_ROOMS', res)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        createRoom(context, payload){
            return new Promise((resolve, reject) => {
                createRoom(payload).then(res => {
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