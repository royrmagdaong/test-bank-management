import {
    getSubjects
} from '../../api'

var store = {
    namespaced: true,
    state: {
        subjects: {data:[],count:0}
    },
    getters: {
        getSubjects: state => state.subjects
    },
    mutations: {
        SET_SUBJECTS(state, payload){
            state.subjects = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        getSubjects(context, payload){
            return new Promise((resolve, reject) => {
                getSubjects(payload).then(res => {
                    if(res.response){
                        console.log(res)
                        context.commit('SET_SUBJECTS', res)
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