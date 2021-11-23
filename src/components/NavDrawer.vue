<template>
  <div>
      <!-- for md and up -->
    <v-navigation-drawer
      permanent
      class="success lighten-2 px-4 d-none d-md-block"
      fixed
    >
        <div style="height: 14vh;"></div>
        <div class="mx-4 mt-2 mb-5" style="background: #111; height:2px;"></div>

        <div class="d-flex flex-column" v-for="item in navItems" :key="item.title">
            <div class="text-uppercase subtitle-1 text-center mx-4 nav-item" @click="navItem(item.route)" :class="{'nav-item-active':$route.path.includes(item.route)?true:false}">{{ item.title }}</div>
        </div>
    </v-navigation-drawer>

    <!-- for sm and below -->
    <v-navigation-drawer
      :value="drawer"
      temporary
      class="success lighten-2 px-4 d-block d-md-none"
      fixed
      @input="drawerStatus"
    >
        <div style="height: 14vh;"></div>
        <div class="mx-4 mt-2 mb-5" style="background: #111; height:2px;"></div>

        <div class="d-flex flex-column" v-for="item in navItems" :key="item.title">
            <div class="text-uppercase subtitle-1 text-center mx-4 nav-item" @click="navItem(item.route)" :class="{'nav-item-active':$route.path.includes(item.route)?true:false}">{{ item.title }}</div>
        </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {get} from 'lodash'

export default {
    data: ()=>({
        get,
        navItems: [],
        adminItems: [
            { title: 'Dashboard', route: '/admin/dashboard' },
            { title: 'Students', route: '/admin/students' },
            { title: 'Subjects', route: '/admin/subjects' },
            { title: 'Grade level', route: '/admin/grade-level' },
            { title: 'faculty', route: '/admin/faculty' },
            { title: 'class', route: '/admin/class' },
            { title: 'room', route: '/admin/room' },
            { title: 'manage users', route: '/admin/manage-users' },
            { title: 'logout', route: 'logout' },
        ],
        professorItems: [
            { title: 'Dashboard', route: '/professor/dashboard' },
            { title: 'Profile', route: '/professor/profile' },
            { title: 'Subjects', route: '/professor/subjects' },
            { title: 'Students', route: '/professor/students' },
            { title: 'Help', route: '/professor/help' },
            { title: 'logout', route: 'logout' },
        ],
        studentItems: [
            { title: 'Dashboard', route: '/student/dashboard' },
            { title: 'Professor', route: '/student/professor' },
            { title: 'Subjects', route: '/student/subjects' },
            { title: 'Help', route: '/student/help' },
            { title: 'logout', route: 'logout' },
        ],
    }),
    computed:{
        userInfo(){
            return this.$store.getters['auth/getUserInfo']
        },
        drawer(){
            return this.$store.getters['core/getDrawer']
        }
    },
    mounted(){
        console.log(this.$route.path)
        if(get(this.userInfo, 'role') === 'admin'){
            this.navItems = this.adminItems
        }else if(get(this.userInfo, 'role') === 'professor'){
            this.navItems = this.professorItems
        }else{
            this.navItems = this.studentItems
        }
    },
    methods:{
        navItem(route){
            if(route === 'logout'){
                this.$store.dispatch('auth/logout')
                this.$router.push('/')
            }else{
                if(this.$route.path !== route){
                    this.$router.push(route)
                }
            }
        },
        drawerStatus(e){
            this.$store.dispatch('core/setDrawer',e)
        }
    }
}
</script>

<style scoped>
.nav-item{
    border-radius: 500px;
    padding-top: 1.6vh;
    padding-bottom: 1.6vh;
}
.nav-item-active{
    background: white !important;
}
.nav-item:hover{
    background: white !important;
    cursor: pointer;
}
</style>