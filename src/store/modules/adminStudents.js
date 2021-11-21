import {
    getStudents
} from '../../api'

var store = {
    namespaced: true,
    state: {
        students: {data:[],count:1}
    },
    getters: {
        getStudents: state => state.students
    },
    mutations: {
        SET_STUDENTS(state, payload){
            state.students = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        getStudents(context, payload){
            return new Promise((resolve, reject) => {
                getStudents(payload).then(res => {
                    if(res.response){
                        console.log(res)
                        context.commit('SET_STUDENTS', res)
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