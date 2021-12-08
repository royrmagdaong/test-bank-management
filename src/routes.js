import Vue from 'vue'
import Router from 'vue-router'

// General User
import NotFound from './views/NotFound'
import SignUp from './views/SignUp'
import Homepage from './views/Homepage'

// Admin
import AdminBase from './views/admin/Base'
import AdminRoom from './components/admin/room/Room' // ROOM
import AdminRoomIndex from './components/admin/room/Index'
import AdminRoomCreate from './components/admin/room/CreateRoom'
import AdminClass from './components/admin/class/Class' // CLASS
import AdminClassIndex from './components/admin/class/Index'
import AdminClassCreate from './components/admin/class/CreateClass'
import AdminClassStudents from './components/admin/class/StudentInClass'
import AdminClassAddStudent from './components/admin/class/AddStudent'
import AdminDashboard from './components/admin/dashboard/Dashboard'
import AdminFaculty from './components/admin/faculty/Faculty' // FACULTY
import AdminFacultyIndex from './components/admin/faculty/Index'
import AdminFacultyCreate from './components/admin/faculty/NewFaculty'
import AdminGradeLevel from './components/admin/grade-level/GradeLevel' // GRADE LEVEL
import AdminGradeLevelIndex from './components/admin/grade-level/Index'
import AdminGradeLevelCreate from './components/admin/grade-level/CreateGradeLevel'
import AdminManageUsers from './components/admin/manage-users/ManageUsers' // MANAGE USERS
import AdminManageUsersIndex from './components/admin/manage-users/Index'
import AdminManageUsersCreateUser from './components/admin/manage-users/CreateUser'
import AdminStudents from './components/admin/students/Students' // STUDENT
import AdminIndex from './components/admin/students/student/Index'
import AdminViewStudent from './components/admin/students/student/ViewStudent'
import AdminEnrollStudent from './components/admin/students/student/enrollment-records/EnrollStudent'
import AdminStudentEnrollmentRecords from './components/admin/students/student/StudentEnrollmentRecords'
import AdminEnrollmentRecords from './components/admin/students/student/enrollment-records/Index'
import AdminEnrolledSubjects from './components/admin/students/student/enrollment-records/EnrolledSubjects'
import AdminSubjects from './components/admin/subjects/Subjects' // SUBJECT
import AdminSubjectIndex from './components/admin/subjects/Index'
import AdminSubjectCreate from './components/admin/subjects/CreateSubject'

// Professor
import ProfessorBase from './views/professor/Base'
import ProfessorDashboard from './components/professor/dashboard/Dashboard' // DASHBOARD
import ProfessorDashboardIndex from './components/professor/dashboard/Index'
import ProfessorDashboardActivity from './components/professor/dashboard/activity/Base'
import ProfessorDashboardActivityIndex from './components/professor/dashboard/activity/Index'
import ProfessorDashboardActivityCreate from './components/professor/dashboard/activity/Create'
import ProfessorDashboardActivityEdit from './components/professor/dashboard/activity/Edit'
import ProfessorDashboardExam from './components/professor/dashboard/exam/Base'
import ProfessorDashboardExamIndex from './components/professor/dashboard/exam/Index'
import ProfessorDashboardExamCreate from './components/professor/dashboard/exam/Create'
import ProfessorDashboardGrowth from './components/professor/dashboard/growth/Index'
import ProfessorDashboardModule from './components/professor/dashboard/module/Index'
import ProfessorDashboardNotes from './components/professor/dashboard/notes/Index'
import ProfessorDashboardQuiz from './components/professor/dashboard/quiz/Base'
import ProfessorDashboardQuizIndex from './components/professor/dashboard/quiz/Index'
import ProfessorDashboardQuizCreate from './components/professor/dashboard/quiz/Create'
import ProfessorDashboardRetake from './components/professor/dashboard/retake/Index'
import ProfessorHelp from './components/professor/help/Help' // HELP
import ProfessorHelpIndex from './components/professor/help/Index'
import ProfessorProfile from './components/professor/profile/Profile' // PROFILE
import ProfessorProfileIndex from './components/professor/profile/Index'
import ProfessorStudents from './components/professor/students/Students' // STUDENTS
import ProfessorStudentsIndex from './components/professor/students/Index'
import ProfessorSubjects from './components/professor/subjects/Subjects' // SUBJECTS
import ProfessorSubjectsIndex from './components/professor/subjects/Index'

// Student
import StudentBase from './views/student/Base'
import StudentDashboard from './components/student/dashboard/Dashboard' // DASHBOARD
import StudentDashboardIndex from './components/student/dashboard/Index'
import StudentDashboardActivity from './components/student/dashboard/activity/Index'
import StudentDashboardExam from './components/student/dashboard/exam/Index'
import StudentDashboardGrowth from './components/student/dashboard/growth/Index'
import StudentDashboardModule from './components/student/dashboard/module/Index'
import StudentDashboardNotes from './components/student/dashboard/notes/Index'
import StudentDashboardQuiz from './components/student/dashboard/quiz/Index'
import StudentHelp from './components/student/help/Help' // HELP
import StudentHelpIndex from './components/student/help/Index'
import StudentProfessors from './components/student/professors/Professors' // PROFESSORS
import StudentProfessorsIndex from './components/student/professors/Index'
import StudentSubjects from './components/student/subjects/Subjects' // SUBJECTS
import StudentSubjectsIndex from './components/student/subjects/Index'


Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'page-not-found',
      component: NotFound
    },
    {
      path: '/',
      component: Homepage,
      meta:{
        noLoggedInUser: true
      }
    },
    {
      path: '/home',
      component: Homepage,
      meta:{
        noLoggedInUser: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: SignUp,
      meta:{
        noLoggedInUser: true
      }
    },
    {
      path: '/admin',
      component: AdminBase,
      meta:{
        requiresAuth: true,
        isAdminOnly: true
      },
      children: [
        {
          path: '/',
          redirect: "dashboard"
        },
        { 
          path: "dashboard",
          component: AdminDashboard
        },
        { 
          path: "class",
          component: AdminClass,
          children: [
            {
              path: '/',
              component: AdminClassIndex
            },
            {
              path: 'create',
              component: AdminClassCreate
            },
            {
              path: 'students',
              component: AdminClassStudents
            },
            {
              path: 'add-student',
              component: AdminClassAddStudent
            }
          ]
        },
        { 
          path: "room",
          component: AdminRoom,
          children: [
            {
              path: '/',
              component: AdminRoomIndex
            },
            {
              path: 'create',
              component: AdminRoomCreate
            }
          ]
        },
        { 
          path: "faculty",
          component: AdminFaculty,
          children: [
            {
              path: '/',
              component: AdminFacultyIndex
            },
            {
              path: 'create',
              component: AdminFacultyCreate
            }
          ]
        },
        { 
          path: "grade-level",
          component: AdminGradeLevel,
          children: [
            {
              path: '/',
              component: AdminGradeLevelIndex
            },
            {
              path: 'create',
              component: AdminGradeLevelCreate
            }
          ]
        },
        { 
          path: "manage-users",
          component: AdminManageUsers,
          children: [
            {
              path: '/',
              component: AdminManageUsersIndex
            },
            {
              path: 'create-user',
              component: AdminManageUsersCreateUser
            }
          ]
        },
        { 
          path: "students",
          component: AdminStudents,
          children:[
            {
              path: "/",
              component: AdminIndex
            },
            {
              path: "view-student",
              component: AdminViewStudent
            },
            {
              path: "enrollment-records",
              component: AdminStudentEnrollmentRecords,
              children:[
                {
                  path: '/',
                  component: AdminEnrollmentRecords
                },
                {
                  path: 'enrolled-subjects',
                  component: AdminEnrolledSubjects
                },
                {
                  path: "enroll-student",
                  component: AdminEnrollStudent
                },
              ]
            },
            { path: "*", component: NotFound } // should be last
          ]
        },
        { 
          path: "subjects",
          component: AdminSubjects,
          children:[
            {
              path: "/",
              component:AdminSubjectIndex
            },
            {
              path: "create",
              component:AdminSubjectCreate
            }
          ]
        },
        { path: "*", component: NotFound } // should be last
      ]
    },
    {
      path: '/student',
      name: 'student',
      component: StudentBase,
      meta:{
        requiresAuth: true,
        isStudentOnly: true
      },
      children: [
        {
          path: '/',
          redirect: 'dashboard'
        },
        { 
          path: "dashboard",
          component: StudentDashboard,
          children:[
            {
              path: '/',
              component: StudentDashboardIndex
            },
            {
              path: 'activity',
              component: StudentDashboardActivity
            },
            {
              path: 'exam',
              component: StudentDashboardExam
            },
            {
              path: 'growth-development',
              component: StudentDashboardGrowth
            },
            {
              path: 'module',
              component: StudentDashboardModule
            },
            {
              path: 'notes',
              component: StudentDashboardNotes
            },
            {
              path: 'quiz',
              component: StudentDashboardQuiz
            }
          ]
        },
        { 
          path: "help",
          component: StudentHelp,
          children:[
            {
              path: '/',
              component: StudentHelpIndex
            }
          ]
        },
        { 
          path: "professor",
          component: StudentProfessors,
          children:[
            {
              path: '/',
              component: StudentProfessorsIndex
            }
          ]
        },
        { 
          path: "subjects",
          component: StudentSubjects,
          children:[
            {
              path: '/',
              component: StudentSubjectsIndex
            }
          ]
        },
        { path: "*", component: NotFound }
      ]
    },
    {
        path: '/professor',
        component: ProfessorBase,
        meta:{
          requiresAuth: true,
          isHeadDepartmentOnly: true
        },
        children: [
          {
            path: '/',
            redirect: "dashboard"
          },
          { 
            path: "dashboard",
            component: ProfessorDashboard,
            children:[
              {
                path: '/',
                component: ProfessorDashboardIndex
              },
              {
                path: 'activity',
                component: ProfessorDashboardActivity,
                children:[
                  {
                    path: '/',
                    component: ProfessorDashboardActivityIndex
                  },
                  {
                    path: 'create',
                    component: ProfessorDashboardActivityCreate
                  },
                  {
                    path: 'edit/:id',
                    component: ProfessorDashboardActivityEdit
                  }
                ]
              },
              {
                path: 'exam',
                component: ProfessorDashboardExam,
                children:[
                  {
                    path: '/',
                    component: ProfessorDashboardExamIndex
                  },
                  {
                    path: 'create',
                    component: ProfessorDashboardExamCreate
                  }
                ]
              },
              {
                path: 'growth-development',
                component: ProfessorDashboardGrowth
              },
              {
                path: 'module',
                component: ProfessorDashboardModule
              },
              {
                path: 'notes',
                component: ProfessorDashboardNotes
              },
              {
                path: 'quiz',
                component: ProfessorDashboardQuiz,
                children:[
                  {
                    path: '/',
                    component: ProfessorDashboardQuizIndex
                  },
                  {
                    path: 'create',
                    component: ProfessorDashboardQuizCreate
                  }
                ]
              },
              {
                path: 'retake',
                component: ProfessorDashboardRetake
              }
            ]
          },
          { 
            path: "help",
            component: ProfessorHelp,
            children:[
              {
                path: '/',
                component: ProfessorHelpIndex
              }
            ]
          },
          { 
            path: "profile",
            component: ProfessorProfile,
            children:[
              {
                path: '/',
                component: ProfessorProfileIndex
              }
            ]
          },
          { 
            path: "students",
            component: ProfessorStudents,
            children:[
              {
                path: '/',
                component: ProfessorStudentsIndex
              }
            ]
          },
          { 
            path: "subjects",
            component: ProfessorSubjects,
            children:[
              {
                path: '/',
                component: ProfessorSubjectsIndex
              }
            ]
          },
          { path: "*", component: NotFound } // should be last
        ]
      }
  ]
});

router.beforeEach((to, from, next) => {
  let user_info = JSON.parse(localStorage.getItem('user_info'))
  let userRole = null
  if(user_info){
    userRole = user_info.role
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if(!user_info){
      next('/')
    }else if( to.matched.some(record => record.meta.isAdminOnly) && (userRole === 'student' || userRole === 'professor') ){
      if(userRole === 'student'){
        next('/student')
      }else{
        next('/professor')
      }
    }else if( to.matched.some(record => record.meta.isHeadDepartmentOnly) && (userRole === 'student' || userRole === 'admin') ){
      if(userRole === 'student'){
        next('/student')
      }else{
        next('/admin')
      }
    }else if( to.matched.some(record => record.meta.isStudentOnly) && (userRole === 'professor' || userRole === 'admin') ){
      if(userRole === 'admin'){
        next('/admin')
      }else{
        next('/professor')
      }
    }else{
      next()
    }
  } else if(to.matched.some(record => record.meta.noLoggedInUser)){
    if(userRole){
      if(userRole === 'student'){
        next('/student')
      }else if(userRole === 'professor'){
        next('/professor')
      }else{
        next('/admin')
      }
    }else{
      next()
    }
  }else{
    next()
  }

});

export default router;