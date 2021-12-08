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
        exam_questions:[]
    },
    getters: {
        getQuestions: state => state.questions,
        getExamQuestions: state => state.exam_questions,
        getChoices: state => state.choices
    },
    mutations: {
        SET_QUESTIONS(state, payload){
            state.questions = payload
        },
        SET_CHOICES(state, payload){
            state.choices = payload
        },
        SET_EXAM_QUESTIONS(state, payload){
            state.exam_questions = payload
        }
    },
    actions:{
        setQuestions(context, payload){
            context.commit('SET_QUESTIONS', payload)
        },
        setExamQuestions(context, payload){
            context.commit('SET_EXAM_QUESTIONS', payload)
        },
        setChoices(context, payload){
            context.commit('SET_CHOICES', payload)
        },
    }
}

export default store