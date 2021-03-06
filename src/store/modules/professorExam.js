import {
    createExam,
    getProfExams,
    getExamById,
    updateExam,
    deleteExam,
    getExamCount,
    assignExamToClass,
    getClassByProfExam,
    getAllClassByExam,
    unAssignExamToClass
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
        exam_questions:[],
        exams: [],
        exam_count: 0,
        profClassExam: []
    },
    getters: {
        getQuestions: state => state.questions,
        getExamQuestions: state => state.exam_questions,
        getChoices: state => state.choices,
        getExams: state => state.exams,
        getExamCount: state => state.exam_count,
        getProfClassExam: state => state.profClassExam
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
        },
        SET_EXAMS(state, payload){
            state.exams = payload
        },
        SET_EXAM_COUNT(state, payload){
            state.exam_count = payload
        },
        SET_PROF_CLASS_EXAM(state, payload){
            state.profClassExam = payload
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
        setExamQuestions(context, payload){
            context.commit('SET_EXAM_QUESTIONS', payload)
        },
        setChoices(context, payload){
            context.commit('SET_CHOICES', payload)
        },
        createExam(context, payload){
            return new Promise((resolve, reject) => {
                createExam(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getProfExams(context){
            return new Promise((resolve, reject) => {
                getProfExams().then(res => {
                    if(res.response){
                        context.commit('SET_EXAMS',res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getExamById(context,payload){
            return new Promise((resolve, reject) => {
                getExamById(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        updateExam(context,payload){
            return new Promise((resolve, reject) => {
                updateExam(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        deleteExam(context,payload){
            return new Promise((resolve, reject) => {
                deleteExam(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getExamCount(context){
            return new Promise((resolve, reject) => {
                getExamCount().then(res => {
                    if(res.response){
                        context.commit('SET_EXAM_COUNT', res.count)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        assignExamToClass(context, payload){
            return new Promise((resolve, reject) => {
                assignExamToClass(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getClassByProfExam(context, payload){
            return new Promise((resolve, reject) => {
                getClassByProfExam(payload).then(res => {
                    if(res.response){
                        context.commit('SET_PROF_CLASS_EXAM', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getAllClassByExam(context, payload){
            return new Promise((resolve, reject) => {
                getAllClassByExam(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        unAssignExamToClass(context, payload){
            return new Promise((resolve, reject) => {
                unAssignExamToClass(payload).then(res => {
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