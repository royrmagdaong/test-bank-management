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

export default {
    // general user
    signIn: user + 'signin',
    
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
    createQuiz: quiz + 'create',
    getProfQuizzes: quiz,
    getQuizById: quiz + 'get',
    updateQuiz: quiz + 'update',
    deleteQuiz: quiz + 'delete',
    getQuizCount: quiz + 'count',
    assignQuizToClass: quiz + 'assign-quiz',
    unassignQuizToClass: quiz + 'unassign-quiz',
    getAllClassAssignedToQuiz: quiz + 'assigned-quiz',
    createExam: exam + 'create',
    getProfExams: exam,
    getExamById: exam + 'get',
    updateExam: exam + 'update',
    deleteExam: exam + 'delete',
    getExamCount: exam + 'count',
    getClassByProf: _class + 'prof-class',
    
}