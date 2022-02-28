import {
    uploadModule,
    getProfModules,
    getProfModulesCount
} from '../../api'

var store = {
    namespaced: true,
    state: {
        modules: [],
        moduleCount: 0,
    },
    getters: {
        getModules: state => state.modules,
        getModuleCount: state => state.moduleCount
    },
    mutations: {
        SET_MODULES(state, payload){
            state.modules = payload
        },
        SET_MODULE_COUNT(state, payload){
            state.moduleCount = payload
        },
    },
    actions:{
        getProfModules(context){
            return new Promise((resolve, reject) => {
                getProfModules().then(res => {
                    if(res.response){
                        context.commit('SET_MODULES', res.data)
                        console.log(res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getProfModulesCount(context){
            return new Promise((resolve, reject) => {
                getProfModulesCount().then(res => {
                    if(res.response){
                        context.commit('SET_MODULE_COUNT', res.count)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        uploadModule(context, formData){
            return new Promise((resolve, reject) => {
                uploadModule(formData).then(res => {
                    if(res.response){
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