const user = 'user/'
const student = 'student/'
const prof = 'prof/'
const subj = 'subject/'
const gradeLevel = 'grade-level/'
const room = 'room/'
const _class = 'class/'

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
    getSubjects: subj,
    createSubject: subj + 'create',
    getGradeLevel: gradeLevel,
    createGradeLevel: gradeLevel + 'create',
    getRooms: room,
    createRoom: room + 'create',
    getClass: _class,
    createClass: _class + 'create',
}