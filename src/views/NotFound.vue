<template>
  <div>
    Page Not Found
    <v-btn @click="startExam">Start Exam</v-btn>
    <v-btn @click="joinRoom">Join class</v-btn>
    <v-text-field
      v-model="room"
      outlined
      label="room"
    ></v-text-field>

    <div class="text-center display-4 red--text">{{timer}}</div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  data:()=>({
    io,
    socket: io('http://localhost:3000'),
    timer: 0,
    room: '',
  }),
  mounted(){
    this.socket.on('connect', ()=>{
      console.log('hello socket')
    })

    this.socket.on("join-class-error", msg =>{
      console.log(msg)
    })
    this.socket.on("join-class-success", msg =>{
      console.log(msg)
    })
  },
  methods:{
    startExam(){
      this.socket.emit('start-exam', this.room, 100)
      this.socket.on("exam-timer", timer =>{
        this.timer = timer
      })
    },
    joinRoom(){
      this.socket.emit('join-class', {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFkODYzMzdhMDk5M2I4MDM3YjMyOCIsInJvbGUiOiJwcm9mZXNzb3IiLCJlbWFpbCI6InByb2Zlc3NvcjFAZ21haWwuY29tIiwiaWF0IjoxNjM5MDUxODM1LCJleHAiOjE2MzkxMzgyMzV9.JTlV8Lxed4_FIWQTY3xl55qvyU1B2PPtLexShdDQuUo', 
        room: this.room
      })
    }
  }
}
</script>

<style>

</style>