import {
    createActivity,
    getProfActivities,
    getActivityById,
    updateActivity,
    deleteActivity,
    getActivityCount,
    assignActivityToClass,
    getClassByProfActivity,
    getAllClassByActivity
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
        activities: [],
        activity_count: 0,
        profClassActivity: []
    },
    getters: {
        getQuestions: state => state.questions,
        getActivityQuestions: state => state.activity_questions,
        getChoices: state => state.choices,
        getActivities: state => state.activities,
        getActivityCount: state => state.activity_count,
        getProfClassActivity: state => state.profClassActivity
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
        SET_ACTIVITY_COUNT(state, payload){
            state.activity_count = payload
        },
        SET_PROF_CLASS_ACTIVITY(state, payload){
            state.profClassActivity = payload
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
        getActivityById(context,payload){
            return new Promise((resolve, reject) => {
                getActivityById(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        updateActivity(context,payload){
            return new Promise((resolve, reject) => {
                updateActivity(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        deleteActivity(context,payload){
            return new Promise((resolve, reject) => {
                deleteActivity(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getActivityCount(context){
            return new Promise((resolve, reject) => {
                getActivityCount().then(res => {
                    if(res.response){
                        context.commit('SET_ACTIVITY_COUNT', res.count)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        assignActivityToClass(context, payload){
            return new Promise((resolve, reject) => {
                assignActivityToClass(payload).then(res => {
                    if(res.response){
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getClassByProfActivity(context, payload){
            return new Promise((resolve, reject) => {
                getClassByProfActivity(payload).then(res => {
                    if(res.response){
                        context.commit('SET_PROF_CLASS_ACTIVITY', res.data)
                        resolve(res)
                    }else{
                        resolve(res)
                    }
                }).catch(err => { reject(err) })
            })
        },
        getAllClassByActivity(context, payload){
            return new Promise((resolve, reject) => {
                getAllClassByActivity(payload).then(res => {
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