import {
    getStudentActivities,
    getStudentActivity
} from '../../api'

var store = {
    namespaced: true,
    state: {
        activity: [],
        student_activity: null
    },
    getters: {
        getActivity: state => state.activity,
        getStudentActivity: state => state.student_activity
    },
    mutations: {
        SET_ACTIVITY(state, payload){
            state.activity = payload
        },
        SET_STUDENT_ACTIVITY(state, payload){
            state.student_activity = payload
        },
    },
    actions:{
        getActivity(context, payload){
            return new Promise((resolve, reject) => {
                getStudentActivities(payload).then(res => {
                    if(res.response){
                        context.commit('SET_ACTIVITY', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getStudentActivity(context, payload){
            return new Promise((resolve, reject) => {
                getStudentActivity(payload).then(res => {
                    if(res.response){
                        context.commit('SET_STUDENT_ACTIVITY', res.data)
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