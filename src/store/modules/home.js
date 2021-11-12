
var store = {
    namespaced: true,
    state: {
        home:{
            carousel: true,
            login: false,
            signUp: false
        }
    },
    getters: {
        getHome: state => state.home
    },
    mutations: {
        SET_HOME(state, payload){
            state.home = payload
        }
    },
    actions:{
        setHome(context, payload){
            context.commit('SET_HOME',payload)
        }
    }
}

export default store