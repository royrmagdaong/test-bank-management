import {
    getClass,
    createClass,
    getStudentsByID,
    addStudent,
    getStudentsInClass
} from '../../api'

var store = {
    namespaced: true,
    state: {
        class: {data:[],count:0},
        students: {data:[],count:0},
        selected_class_id: '',
        classStudents: []
    },
    getters: {
        getClass: state => state.class,
        getStudents: state => state.students,
        getSelectedClassID: state => state.selected_class_id,
        getClassStudents: state => state.classStudents
    },
    mutations: {
        SET_CLASS(state, payload){
            state.class = payload
        },
        SET_STUDENTS(state, payload){
            state.students = payload
        },
        SET_CLASS_ID(state, payload){
            state.selected_class_id = payload
        },
        SET_CLASS_STUDENTS(state, payload){
            state.classStudents = payload
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
        setSelectedClassID(context, payload){
            context.commit('SET_CLASS_ID', payload)
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
        getStudentsByID(context, payload){
            return new Promise((resolve, reject) => {
                getStudentsByID(payload).then(res => {
                    if(res.response){
                        context.commit('SET_STUDENTS', res)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        addStudent(context, payload){
            return new Promise((resolve, reject) => {
                addStudent(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getClassStudents(context, payload){
            return new Promise((resolve, reject) => {
                getStudentsInClass(payload).then(res => {
                    if(res.response){
                        context.commit('SET_CLASS_STUDENTS', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        }
        
    }
}

export default store