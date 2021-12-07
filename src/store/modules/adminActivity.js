import {
} from '../../api'

var store = {
    namespaced: true,
    state: {
        questions: [
            {
                question: '',
                choices: [
                {
                    value: true,
                    answer: '',
                },
                {
                    value: false,
                    answer: '',
                }
                ],
            },
        ],
        choices:[],
        activity_questions:[]
    },
    getters: {
        getQuestions: state => state.questions,
        getActivityQuestions: state => state.activity_questions,
        getChoices: state => state.choices
    },
    mutations: {
        SET_QUESTIONS(state, payload){
            state.questions = payload
        },
        SET_CHOICES(state, payload){
            state.choices = payload
        },
        SET_ACTIVITY_QUESTIONS(state, payload){
            state.activity_questions = payload
        }
    },
    actions:{
        setQuestions(context, payload){
            context.commit('SET_QUESTIONS', payload)
        },
        setActivityQuestions(context, payload){
            context.commit('SET_ACTIVITY_QUESTIONS', payload)
        },
        setChoices(context, payload){
            context.commit('SET_CHOICES', payload)
        },
    }
}

export default store