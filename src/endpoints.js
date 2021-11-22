const user = 'user/'
const student = 'student/'
const prof = 'prof/'
const subj = 'subject'

export default {
    // general user
    signIn: user + 'signin',
    
    // admin
    getUsers: user,
    getStudents: student,
    createUser: user + 'create',
    createStudent: student + 'create',
    getProf: prof,
    createProf: prof + 'create',
    getSubjects: subj
}