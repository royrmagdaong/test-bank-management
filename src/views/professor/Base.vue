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
    professorInfo(){
      return this.$store.getters['professorSubjects/getProfessorInfo']
    },
  },
  mounted(){
    // this should be call once in student page
    this.getProfessorSubjects()

    // watch for call from other component
    this.$root.$on('getSubjectsAndStudents',()=>{
      this.getProfessorSubjects()
    })
  },
  methods:{
    getProfessorSubjects(){
      if(this.professorInfo._id){
        this.$store.dispatch('professorSubjects/getProfessorSubjects',{prof_id: this.professorInfo._id})
      }else{
        this.$store.dispatch('professorSubjects/getProfessorInfo').then(res=>{
          if(res.response){
            this.$store.dispatch('professorSubjects/getProfessorSubjects',{prof_id: res.data._id})
          }
        })
      }
    },
  }
}
</script>

<style>

</style>