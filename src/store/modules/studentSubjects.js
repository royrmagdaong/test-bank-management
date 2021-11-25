import {
    getStudentSubjects,
    getStudentInfo
} from '../../api'

var store = {
    namespaced: true,
    state: {
        subjects: [],
        studentInfo: {},
        instructors: []
    },
    getters: {
        getSubjects: state => state.subjects,
        getStudentInfo: state => state.studentInfo,
        getInstructors: state => state.instructors
    },
    mutations: {
        SET_SUBJECTS(state, payload){
            state.subjects = payload
        },
        SET_STUDENT_INFO(state, payload){
            state.studentInfo = payload
        },
        SET_INSTRUCTORS(state, payload){
            let instructors_ = []
            let instructors_id = []
            if(payload.length>0){
                payload.forEach(item => {
                    if(!instructors_id.includes(item.instructor._id)){
                        instructors_id.push(item.instructor._id)
                        instructors_.push(item.instructor)
                    }
                });
                state.instructors = instructors_
            }else{
                state.instructors = instructors_
            }
        }
    },
    actions:{
        initStore(context){
            let user_info = JSON.parse(localStorage.getItem('user_info'))
            if(user_info){
                context.dispatch('getStudentInfo')
            }
        },
        getStudentInfo(context, payload){
            return new Promise((resolve, reject) => {
                getStudentInfo(payload).then(res => {
                    if(res.response){
                        context.commit('SET_STUDENT_INFO', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getStudentSubjects(context, payload){
            return new Promise((resolve, reject) => {
                getStudentSubjects(payload).then(res => {
                    if(res.response){
                        context.commit('SET_SUBJECTS', res.data)
                        context.commit('SET_INSTRUCTORS', res.data)
                        console.log(res.data)
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