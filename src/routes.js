import Vue from 'vue'
import Router from 'vue-router'

// General User
import NotFound from './views/NotFound'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'

// Admin
import AdminBase from './views/admin/Base'
import AdminClass from './components/admin/class/Class' // CLASS
import AdminClassIndex from './components/admin/class/Index'
import AdminDashboard from './components/admin/dashboard/Dashboard'
import AdminDepartment from './components/admin/department/Department'
import AdminFaculty from './components/admin/faculty/Faculty' // FACULTY
import AdminFacultyIndex from './components/admin/faculty/Index'
import AdminGradeLevel from './components/admin/grade-level/GradeLevel' // GRADE LEVEL
import AdminGradeLevelIndex from './components/admin/grade-level/Index'
import AdminManageUsers from './components/admin/manage-users/ManageUsers'
import AdminRooms from './components/admin/rooms/Rooms'
import AdminStudents from './components/admin/students/Students' // STUDENT
import AdminIndex from './components/admin/students/student/Index'
import AdminViewStudent from './components/admin/students/student/ViewStudent'
import AdminEnrollStudent from './components/admin/students/student/enrollment-records/EnrollStudent'
import AdminStudentEnrollmentRecords from './components/admin/students/student/StudentEnrollmentRecords'
import AdminEnrollmentRecords from './components/admin/students/student/enrollment-records/Index'
import AdminEnrolledSubjects from './components/admin/students/student/enrollment-records/EnrolledSubjects'
import AdminSubjects from './components/admin/subjects/Subjects' // SUBJECT
import AdminSubjectIndex from './components/admin/subjects/Index'

// Professor
import ProfessorBase from './views/professor/Base'

// Student
import StudentBase from './views/student/Base'


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
      component: SignIn,
      redirect: "/login",
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
      path: '/login',
      name: 'login',
      component: SignIn,
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
            }
          ]
        },
        { 
          path: "department",
          component: AdminDepartment
        },
        { 
          path: "faculty",
          component: AdminFaculty,
          children: [
            {
              path: '/',
              component: AdminFacultyIndex
            }
          ]
        },
        { 
          path: "grade-level",
          component: AdminGradeLevel,
          children:[
            {
              path: '/',
              component: AdminGradeLevelIndex
            }
          ]
        },
        { 
          path: "manage-users",
          component: AdminManageUsers
        },
        { 
          path: "rooms",
          component: AdminRooms
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
        // { 
        //   path: "/", 
        //   redirect: "student-info"
        // },
        // { 
        //   path: "student-info", 
        //   component: StudentInfo
        // },
        // { 
        //   path: "clearance-form", 
        //   component: StudentClearanceForm
        // },
        { path: "*", component: NotFound }
      ]
    },
    {
        path: '/professor',
        name: 'professor',
        component: ProfessorBase,
        meta:{
          requiresAuth: true,
          isHeadDepartmentOnly: true
        },
        children: [
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
      next('/login')
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