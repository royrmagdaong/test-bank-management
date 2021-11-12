<template>
  <div>
    <AppBar />
    <Carousel v-if="get(home, 'carousel')" />
    <SignUp v-if="get(home, 'signUp')" />
    <SignIn v-if="get(home, 'login')"/>
    <TestManagement v-if="!get(home, 'login')" />
    <TestManagement2 v-else />
    <VisionMission />
    <Contacts />
  </div>
</template>

<script>
import {get} from 'lodash'
import AppBar from '../components/AppBar'
import Carousel from '../components/Carousel'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import TestManagement from '../components/TestBankManagement'
import TestManagement2 from '../components/TestBankManagement2'
import VisionMission from '../components/VisionMission'
import Contacts from '../components/Contacts'
export default {
    components:{
        AppBar,
        Carousel,
        SignUp,
        SignIn,
        TestManagement,
        VisionMission,
        Contacts,
        TestManagement2
    },
    data:()=>({
        get
    }),
    computed:{
        home(){
            return this.$store.getters['home/getHome']
        }
    }
}
</script>

<style>

</style>