import {
    getProfessorInfo,
    getProfessorSubjects
} from '../../api'

import {get} from 'lodash'

var store = {
    namespaced: true,
    state: {
        professorInfo: {},
        subjects: [],
        students: []
    },
    getters: {
        getProfessorInfo: state => state.professorInfo,
        getSubjects: state => state.subjects,
        getStudents: state => state.students,
    },
    mutations: {
        SET_PROFESSOR_INFO(state, payload){
            state.professorInfo = payload
        },
        SET_SUBJECTS(state, payload){
            state.subjects = payload
        },
        SET_STUDENTS(state, payload){
            let students_ = []
            let students_id = []
            if(payload.length>0){
                payload.forEach(item => {
                    item.students.forEach(stdt=>{
                        if(!students_id.includes(stdt._id)){
                            students_.push({
                                studentInfo: stdt,
                                subject: item.class_code.code + ' - ' +item.class_code.description
                            })
                            students_id.push(stdt._id)
                        }
                    })
                });
                state.students = students_
            }else{
                state.students = students_
            }
        }
    },
    actions:{
        initStore(context){
            let user_info = JSON.parse(localStorage.getItem('user_info'))
            if(get(user_info, 'role') === 'professor'){
                context.dispatch('getProfessorInfo')
            }
        },
        getProfessorInfo(context, payload){
            return new Promise((resolve, reject) => {
                getProfessorInfo(payload).then(res => {
                    if(res.response){
                        context.commit('SET_PROFESSOR_INFO', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getProfessorSubjects(context, payload){
            return new Promise((resolve, reject) => {
                getProfessorSubjects(payload).then(res => {
                    if(res.response){
                        context.commit('SET_SUBJECTS', res.data)
                        console.log(res.data)
                        context.commit('SET_STUDENTS', res.data)
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