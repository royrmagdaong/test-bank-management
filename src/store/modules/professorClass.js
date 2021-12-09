import {
    getClassByProf
} from '../../api'


var store = {
    namespaced: true,
    state: {
        prof_class: []
    },
    getters: {
        getClass: state => state.prof_class,
    },
    mutations: {
        SET_CLASS(state, payload){
            state.prof_class = payload
        }
    },
    actions:{
        getClassByProf(context, payload){
            return new Promise((resolve, reject) => {
                getClassByProf(payload).then(res => {
                    if(res.response){
                        context.commit('SET_CLASS', res.data)
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