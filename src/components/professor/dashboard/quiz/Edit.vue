<template>
  <v-card class="pa-8" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
        mdi-arrow-left
      </v-icon>
      <span class="headline tbl-title">Edit Quiz</span>
    </div>

    <div v-if="isLoading" class="text-center pa-4">
      <v-progress-circular
        indeterminate
        color="green"
        size="80"
        width="10"
      ></v-progress-circular>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="5" offset="7">
          <v-text-field
            placeholder="Quiz Name"
            hide-details
            dense
            outlined
            color="#aaa"
            style="border-radius: 0 !important;"
            v-model="quizName"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-card color="#eee" class="mt-4" tile flat v-for="(q,index) in questions" :key="index">
        <v-row no-gutters>
          <v-col cols="10" offset="1" class="pt-10 pb-15">
            <div class="d-flex justify-space-between">
              <span class="question-number">Question {{ index+1 }}</span>
              <v-icon class="question-delete" @click="deleteQuestion(index)">
                mdi-close
              </v-icon>
            </div>
            <v-text-field
              placeholder="Question"
              color="#aaa"
              class="mt-4 white"
              style="border-radius: 0 !important;"
              hide-details
              outlined
              v-model="quiz_questions[index]"
            ></v-text-field>
            <ol class="pa-0 pl-6" style="list-style-type: upper-alpha;">
              <li v-for="(choice,index2) in choices[index]" :key="index2" style="position:relative;">
                <div class="d-flex" style="position:absolute;z-index:2;right:10px;top:7px;">
                  <v-hover v-slot="{ hover }">
                    <div>
                      <v-icon :class="{'choice-check-active':choices[index][index2].value,'choice-check':!hover}" v-if="choices[index][index2].value">mdi-check</v-icon>
                      <v-icon :class="{'choice-check-active':hover,'choice-check':!hover}" v-else @click="changeAnswer(index,index2)">mdi-check</v-icon>
                    </div>
                  </v-hover>
                  <v-icon class="choice-delete" @click="deleteChoice(index, index2)">mdi-close</v-icon>
                </div>
                <v-text-field
                  placeholder="Answer"
                  color="#aaa"
                  class="mt-4 white"
                  style="border-radius: 0 !important;"
                  hide-details
                  outlined
                  dense
                  v-model="choices[index][index2].answer"
                ></v-text-field>
              </li>
            </ol>
            <div class="d-flex justify-end mt-2">
              <div class="add-choice d-flex align-center" @click="addChoice(index)">
                <span>add choice</span>
                <v-icon small color="rgb(53, 164, 238)">
                  mdi-plus
                </v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
    
    <v-hover v-slot="{ hover }">
      <v-card class="py-4 my-4 add-question" color="#E9F0FE" tile flat>
        <div class="d-flex align-center justify-center" @click="addQuestion">
          <span :style="{'color':hover?'white':'rgb(53, 164, 238)'}">Add Question</span>
          <v-icon small :color="hover?'white':'rgb(53, 164, 238)'">
            mdi-plus
          </v-icon>
        </div>
      </v-card>
    </v-hover>
    <div class="d-flex justify-end">
      <v-btn
        color="primary"
        class="black--text px-8"
        large
        tile
        @click="updateQuiz"
      >Update</v-btn>
    </div>
  </v-card>
</template>

<script>
import {get} from 'lodash'
export default {
  data(){
    return {
      get,
      quiz_questions: [],
      choices: [],
      questions: [],
      quizName: '',
      isLoading: true,
    }
  },
  computed:{
  },
  mounted(){
    this.getQuiz()
  },
  methods:{
    back(){
      this.$router.push('/professor/dashboard/quiz')
    },
    getQuiz(){
      this.$store.dispatch('professorQuiz/getQuizById',{id:this.$route.params.id}).then(res=>{
        if(res.response){
          let quiz_questions_temp = []
          let choices_temp = []
          for(let i=0;i<res.data.questions.length;i++){
            quiz_questions_temp.push(res.data.questions[i].question)
            choices_temp.push(res.data.questions[i].choices)
          }
          this.quizName = res.data.quizName
          this.questions = res.data.questions
          this.choices = choices_temp
          this.quiz_questions = quiz_questions_temp
        }
        setTimeout(()=>{
          this.isLoading = false
        },500)
      })
    },
    addChoice(question_number){
      this.choices[question_number].push({answer:'', value:false})
    },
    addQuestion(){
      this.questions.push({
        question:''
      })
      this.choices.push([
        {answer:'',value:true},
        {answer:'',value:false}
      ])
    },
    deleteQuestion(question_number){
      if(this.questions.length > 1){
        if (question_number > -1) {
          this.quiz_questions.splice(question_number, 1);
          this.questions.splice(question_number, 1);
          this.choices.splice(question_number, 1);
        }
      }else{
        console.log('You cannot delete question if it is the last one')
      }
    },
    changeAnswer(index1,index2){
      for(let i=0;i<this.choices[index1].length;i++){
        if(i !== index2){
          this.choices[index1][i].value = false
        }
      }
      this.choices[index1][index2].value = true
    },
    deleteChoice(index1, index2){
      if(this.choices[index1].length > 2){
        if(index2 > -1){
          if(this.choices[index1][index2].value){
            if(this.choices[index1].length>0){
              this.choices[index1].splice(index2,1)
              this.choices[index1][0].value = true
            }else{
              this.choices[index1].splice(index2,1)
            }
          }else{
            this.choices[index1].splice(index2,1)
          }
        }
      }else{
        console.log('you cannot delete a choice if the choices are only 2')
      }
    },
    updateQuiz(){
      let questions = []
      for(let i=0;i<this.quiz_questions.length;i++){
        questions.push({
          question: this.quiz_questions[i],
          choices: this.choices[i]
        })
      }

      if(questions.length>0 && this.quizName){
        this.$store.dispatch('professorQuiz/updateQuiz',{
          quizName: this.quizName,
          questions: questions,
          quizId: this.$route.params.id
        }).then(res=>{
          if(res.response){
            console.log(res.message)
          }
        })
      }else{
        console.log('requirements not met.')
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 480px) {
  .tbl-title{
    font-size: 18px !important;
  }
}

.question-number{
  font-size: 18px;
  font-weight: 500;
}
.question-delete{
  color: #aaa;
}
.question-delete:hover{
  cursor: pointer;
  color: rgb(53, 164, 238);
}
.add-choice{
  color: rgb(53, 164, 238);
  position: absolute;
}
.add-choice:hover{
  cursor: pointer;
  border-bottom: 1px solid rgb(53, 164, 238);
}
.add-question:hover{
  cursor: pointer;
  background-color: rgb(60, 120, 160)!important;
}
.choice-check{
  color:#21e96d;
  background-color: #dbf3dbcc;
  border-radius: 10%;
  margin-right:4px;
  cursor: pointer;
}
.choice-check-active{
  color:#fff;
  background-color: #21e96d;
  border-radius: 10%;
  margin-right:4px;
  cursor: pointer;
}
.choice-delete{
  color:#aaa;
}
.choice-delete:hover{
  border-radius: 10%;
  background-color:rgb(201, 101, 71);
  color: white;
  cursor: pointer;
}
</style>