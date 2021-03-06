import {
    createQuiz,
    getProfQuizzes,
    getQuizById,
    updateQuiz,
    deleteQuiz,
    getQuizCount,
    assignQuizToClass,
    unassignQuizToClass,
    getAllClassAssignedToQuiz,
    getClassByProfQuiz
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
        quiz_questions:[],
        quizzes: [],
        quiz_count: 0,
        class_assigned: [],
        profClassQuiz: []
    },
    getters: {
        getQuestions: state => state.questions,
        getQuizQuestions: state => state.quiz_questions,
        getChoices: state => state.choices,
        getQuizzes: state => state.quizzes,
        getQuizCount: state => state.quiz_count,
        getClassAssigned: state => state.class_assigned,
        getProfClassQuiz: state => state.profClassQuiz
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
        },
        SET_QUIZZES(state, payload){
            state.quizzes = payload
        },
        SET_QUIZ_COUNT(state, payload){
            state.quiz_count = payload
        },
        SET_CLASS_ASSIGNED(state, payload){
            state.class_assigned = payload
        },
        SET_PROF_CLASS_QUIZ(state, payload){
            state.profClassQuiz = payload
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
        getProfQuizzes(context){
            return new Promise((resolve, reject) => {
                getProfQuizzes().then(res => {
                    if(res.response){
                        context.commit('SET_QUIZZES',res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getQuizById(context,payload){
            return new Promise((resolve, reject) => {
                getQuizById(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        updateQuiz(context,payload){
            return new Promise((resolve, reject) => {
                updateQuiz(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        deleteQuiz(context,payload){
            return new Promise((resolve, reject) => {
                deleteQuiz(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getQuizCount(context){
            return new Promise((resolve, reject) => {
                getQuizCount().then(res => {
                    if(res.response){
                        context.commit('SET_QUIZ_COUNT', res.count)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        assignQuizToClass(context,payload){
            return new Promise((resolve, reject) => {
                assignQuizToClass(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getClassByProfQuiz(context, payload){
            return new Promise((resolve, reject) => {
                getClassByProfQuiz(payload).then(res => {
                    if(res.response){
                        context.commit('SET_PROF_CLASS_QUIZ', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getAllClassAssignedToQuiz(context,payload){
            return new Promise((resolve, reject) => {
                getAllClassAssignedToQuiz(payload).then(res => {
                    if(res.response){
                        context.commit('SET_CLASS_ASSIGNED', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        unassignQuizToClass(context,payload){
            return new Promise((resolve, reject) => {
                unassignQuizToClass(payload).then(res => {
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