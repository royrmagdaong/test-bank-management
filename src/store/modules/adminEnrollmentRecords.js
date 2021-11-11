import {
} from '../../api'

var store = {
    namespaced: true,
    state: {
        student: {}
    },
    getters: {
        getStudent: state => state.student
    },
    mutations: {
        SET_STUDENT(state, payload){
            state.student = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        setStudent(context, payload){
            context.commit('SET_STUDENT', payload)
        },
    }
}

export default store