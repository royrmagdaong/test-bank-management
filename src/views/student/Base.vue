<template>
  <div>
    <PTCBanner />
    <router-view></router-view>
  </div>
</template>

<script>
import PTCBanner from '../../components/PTCBanner.vue'
export default {
  components:{
    PTCBanner
  },
  computed:{
    studentInfo(){
      return this.$store.getters['studentSubjects/getStudentInfo']
    },
  },
  mounted(){
    // this should be call once in student page
    this.getStudentSubjects()

    // watch for call from other component
    this.$root.$on('getSubjectsAndInstructors',()=>{
      this.getStudentSubjects()
    })
  },
  methods:{
    getStudentSubjects(){
      if(this.studentInfo._id){
        this.$store.dispatch('studentSubjects/getStudentSubjects',{student_id: this.studentInfo._id})
      }else{
        this.$store.dispatch('studentSubjects/getStudentInfo').then(res=>{
          if(res.response){
            this.$store.dispatch('studentSubjects/getStudentSubjects',{student_id: res.data._id})
          }
        })
      }
    },
  }
}
</script>

<style>

</style>