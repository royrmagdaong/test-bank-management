import endpoints from './endpoints'
import axios from 'axios'

// FOR USER API CALLS

export function login(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.signIn, {
            email: payload.email,
            password: payload.password
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

// FOR ADMIN USERS
export function getUsers(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.getUsers, {
            searchString: payload.searchString,
            limit: payload.limit,
            skip: payload.skip
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function getStudents(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.getStudents, {
            searchString: payload.searchString,
            skip: payload.skip,
            limit: payload.limit
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function createUser(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.createUser, {
            role: payload.role,
            account_name: payload.account_name,
            email: payload.email,
            password: payload.password
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function createStudent(payload){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.createStudent, {
          first_name: payload.first_name,
          middle_name: payload.middle_name,
          last_name: payload.last_name,
          status: payload.status,
          year_level: payload.year_level,
          section: payload.section,
          academic_year: payload.academic_year
        })
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

