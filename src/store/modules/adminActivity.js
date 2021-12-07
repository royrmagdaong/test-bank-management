import {
    createActivity,
    getProfActivities
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
        activity_questions:[],
        activities: []
    },
    getters: {
        getQuestions: state => state.questions,
        getActivityQuestions: state => state.activity_questions,
        getChoices: state => state.choices,
        getActivities: state => state.activities
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
        },
        SET_ACTIVITIES(state, payload){
            state.activities = payload
        },
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
        setActivityQuestions(context, payload){
            context.commit('SET_ACTIVITY_QUESTIONS', payload)
        },
        setChoices(context, payload){
            context.commit('SET_CHOICES', payload)
        },
        createActivity(context, payload){
            return new Promise((resolve, reject) => {
                createActivity(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getProfActivities(context){
            return new Promise((resolve, reject) => {
                getProfActivities().then(res => {
                    if(res.response){
                        context.commit('SET_ACTIVITIES',res.data)
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