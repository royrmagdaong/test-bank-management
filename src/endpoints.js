const user = 'user/'
const student = 'student/'
const prof = 'prof/'
const subj = 'subject/'
const gradeLevel = 'grade-level/'
const room = 'room/'
const _class = 'class/'
const activity = 'activity/'
const quiz = 'quiz/'
const exam = 'exam/'

const server_name = 'http://localhost:3000'

export default {
    // general user
    signIn: user + 'signin',
    server_name,
    
    // admin
    getUsers: user,
    getStudents: student,
    getStudentsWithoutUser: student+ 'students-no-user',
    getProfessorsWithoutUser: prof+ 'professors-no-user',
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
    getStudentsByID: student + 'students',
    addStudent: _class + 'add-student',
    getStudentsInClass: _class + 'students',

    // student
    getStudentInfo: student + 'student-info',
    getStudentSubjects: _class + 'student-subjects',
    getStudentActivities: activity + 'student-activities',

    // professor
    getProfessorInfo: prof + 'prof-info',
    getProfessorSubjects: _class + 'prof-subjects',
    createActivity: activity + 'create',
    getProfActivities: activity,
    getActivityById: activity + 'get',
    updateActivity: activity + 'update',
    deleteActivity: activity + 'delete',
    getActivityCount: activity + 'count',
    assignActivityToClass: activity + 'assign-activity',
    getClassByProfActivity: activity + 'class-prof-activity',
    getAllClassByActivity: activity + 'class-by-activity',
    unAssignActivityToClass: activity + 'unassign-activity-to-class',
    setExamDuration: activity + 'set-exam-duration',
    createQuiz: quiz + 'create',
    getProfQuizzes: quiz,
    getQuizById: quiz + 'get',
    updateQuiz: quiz + 'update',
    deleteQuiz: quiz + 'delete',
    getQuizCount: quiz + 'count',
    assignQuizToClass: quiz + 'assign-quiz',
    getClassByProfQuiz: quiz + 'class-prof-exam',
    unassignQuizToClass: quiz + 'unassign-quiz',
    getAllClassAssignedToQuiz: quiz + 'assigned-quiz',
    createExam: exam + 'create',
    getProfExams: exam,
    getExamById: exam + 'get',
    updateExam: exam + 'update',
    deleteExam: exam + 'delete',
    getExamCount: exam + 'count',
    assignExamToClass: exam + 'assign-exam',
    getClassByProfExam: exam + 'class-prof-exam',
    getAllClassByExam: exam + 'class-by-exam',
    unAssignExamToClass: exam + 'unassign-exam-to-class',
    
}