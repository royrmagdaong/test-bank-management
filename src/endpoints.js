const user = 'user/'
const student = 'student/'

export default {
    // general user
    signIn: user + 'signin',
    
    // admin
    getUsers: user,
    getStudents: student,
    createUser: user + 'create'
}