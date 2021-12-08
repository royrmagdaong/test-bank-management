import {
    getProf,
    createProf
} from '../../api'

var store = {
    namespaced: true,
    state: {
        professors: {data:[],count:0}
    },
    getters: {
        getProfessor: state => state.professors
    },
    mutations: {
        SET_PROFESSORS(state, payload){
            state.professors = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        fetchProf(context, payload){
            return new Promise((resolve, reject) => {
                getProf(payload).then(res => {
                    if(res.response){
                        context.commit('SET_PROFESSORS', res)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        createProf(context, payload){
            return new Promise((resolve, reject) => {
                createProf(payload).then(res => {
                    if(res.response){
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