import {
    getStudentActivities
} from '../../api'

var store = {
    namespaced: true,
    state: {
        activity: []
    },
    getters: {
        getActivity: state => state.activity
    },
    mutations: {
        SET_ACTIVITY(state, payload){
            state.activity = payload
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
    }
}

export default store