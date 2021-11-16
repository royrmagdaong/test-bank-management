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

export function getStudents(){
    return new Promise((resolve, reject) => {
        axios.post(endpoints.getStudents, {})
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

