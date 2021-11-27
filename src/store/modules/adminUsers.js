import {
    getUsers,
    createUser,
    getStudentsWithoutUser,
    getProfessorsWithoutUser
} from '../../api'

var store = {
    namespaced: true,
    state: {
        users: {data:[],count:1},
        students: {data:[],count:0},
        professors: {data:[],count:0}
    },
    getters: {
        getUsers: state => state.users,
        getStudents: state => state.students,
        getProfessors: state => state.professors,
    },
    mutations: {
        SET_USERS(state, payload){
            state.users = payload
        },
        SET_STUDENTS(state, payload){
            state.students = payload
        },
        SET_PROFESSORS(state, payload){
            state.professors = payload
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
                        context.commit('SET_USERS', res)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        createUser(context, payload){
            return new Promise((resolve, reject) => {
                createUser(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getStudentsWithoutUser(context, payload){
            return new Promise((resolve, reject) => {
                getStudentsWithoutUser(payload).then(res => {
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
        getProfessorsWithoutUser(context, payload){
            return new Promise((resolve, reject) => {
                getProfessorsWithoutUser(payload).then(res => {
                    if(res.response){
                        console.log(res)
                        context.commit('SET_PROFESSORS', res)
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