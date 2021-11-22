import {
    getGradeLevel
} from '../../api'

var store = {
    namespaced: true,
    state: {
        gradeLevels: {data:[],count:0}
    },
    getters: {
        getGradeLevel: state => state.gradeLevels
    },
    mutations: {
        SET_GRADE_LEVELS(state, payload){
            state.gradeLevels = payload
        }
    },
    actions:{
        // initStore(context){
        //     let user_info = JSON.parse(localStorage.getItem('user_info'))
        //     context.commit('SET_USER_INFO', user_info)
        // },
        getGradeLevel(context, payload){
            return new Promise((resolve, reject) => {
                getGradeLevel(payload).then(res => {
                    if(res.response){
                        console.log(res)
                        context.commit('SET_GRADE_LEVELS', res)
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