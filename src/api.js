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

