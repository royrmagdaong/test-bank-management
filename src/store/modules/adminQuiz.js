import {
    createQuiz
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
        quiz_questions:[]
    },
    getters: {
        getQuestions: state => state.questions,
        getQuizQuestions: state => state.quiz_questions,
        getChoices: state => state.choices
    },
    mutations: {
        SET_QUESTIONS(state, payload){
            state.questions = payload
        },
        SET_CHOICES(state, payload){
            state.choices = payload
        },
        SET_QUIZ_QUESTIONS(state, payload){
            state.quiz_questions = payload
        }
    },
    actions:{
        resetQuestions(context){
            context.commit('SET_QUESTIONS', [
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
            ])
        },
        setQuestions(context, payload){
            context.commit('SET_QUESTIONS', payload)
        },
        setQuizQuestions(context, payload){
            context.commit('SET_QUIZ_QUESTIONS', payload)
        },
        setChoices(context, payload){
            context.commit('SET_CHOICES', payload)
        },
        createQuiz(context, payload){
            return new Promise((resolve, reject) => {
                createQuiz(payload).then(res => {
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