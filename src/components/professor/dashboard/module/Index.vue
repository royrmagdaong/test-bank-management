<template>
  <v-card class="pa-4" tile>
    <div class="d-flex">
      <v-icon color="" @click="back" class="mr-2">
        mdi-arrow-left
      </v-icon>
      <span class="headline tbl-title">Modules</span>
    </div>

    <div class="mt-4 mb-2 d-flex justify-space-between align-center">
      <div class=" d-flex align-center">
        <!-- <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
        <v-combobox
          style="max-width:120px !important;"
          outlined
          dense
          hide-details
          color="grey lighten-1"
          v-model="entryValue"
          :items="entryOptions"
        ></v-combobox> -->
      </div>
      <div class="d-flex align-center">
        <!-- <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Search: </span>
        <v-text-field 
          dense 
          hide-details
          outlined
          color="grey lighten-1"
          v-model="searchString"
        ></v-text-field> -->
      </div>
    </div>
    <v-data-table
      :headers="headers"
      :items="modules"
      :items-per-page="entryValue"
      class="elevation-0"
      hide-default-footer
    >
      <template v-slot:[`item.created_at`]="{ item }">
        <div>
          {{formatDate(item.created_at)}}
        </div>
      </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <!-- <div class="mt-4 d-flex justify-space-between align-center">
      <div class="font-weight-light grey--text text--darken-1 subtitle-2">
        <span>Showing 0 to 0 of 0 entries</span>
      </div>
      <v-pagination
        v-model="page"
        :length="1"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        class=""
        color="grey lighten-1"
      ></v-pagination>
    </div> -->
    <div>
      <v-btn
        class="grey white--text text-capitalize caption mt-2"
        tile
        @click="uploadDialog = true"
      >Upload</v-btn>
    </div>

    <!-- set duration -->
    <v-dialog
      v-model="uploadDialog"
      width="400"
    >
      <v-card class="py-4 px-6">
        <form @submit.prevent="" enctype="multipart/form-data">
          <div class="col-12 px-0">
            <label>Module Name:</label>
            <v-text-field placeholder="Enter module name" v-model="moduleName"></v-text-field>
            <v-select
              :items="subjects"
              label="Subjects"
              item-text="class_code.description"
              return-object
              v-model="subject"
              @change="selectSubj"
            ></v-select>
          </div>
          <input type="file" name="_module"  class="mt-3" accept="image/png, image/jpeg, application/pdf" @change="onChange"/>
          <div style="font-size:12px;">*png, jpg, pdf only</div>
        </form>
        <div class="d-flex justify-content-end">
          <v-btn variant="warning" class="mr-2" @click.prevent="cancel">Cancel</v-btn>
          <v-btn type="submit" variant="success" @click.prevent="uploadModules">Save</v-btn>
        </div>
      </v-card>
    </v-dialog>

  </v-card>
</template>

<script>
import {get} from 'lodash'
import moment from 'moment'

export default {
  data:()=>({
    page: 1,
    get,
    moment,
    entryValue: 10,
    entryOptions: [5,10,20,50,100],
    searchString: '',
    uploadDialog: false,
    module_upload: null,
    moduleName: '',
    subject: null,
    headers: [
      { text: 'Module Name', value: 'moduleName', sortable: true },
      { text: 'Class', value: 'class_name', sortable: true },
      { text: 'File Name', value: 'originalFileName', sortable: true },
      { text: 'Type', value: 'mimetype', sortable: true },
      { text: 'Date Uploaded', value: 'created_at', sortable: true }
    ],
  }),
  computed:{
    modules(){
      return this.$store.getters['professorModule/getModules']
    },
    subjects(){
      return this.$store.getters['professorSubjects/getSubjects']
    }
  },
  mounted(){
    this.getModules()
  },
  methods:{
    formatDate(date){
      if(date){
        return moment(date).format('MMM DD, YYYY')
      }
      return '-'
    },
    back(){
      this.$router.push('/professor/dashboard')
    },
    cancel(){
      this.uploadDialog = false
      this.moduleName = ''
    },
    onChange(event) {
      this.module_upload = event.target.files[0]
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
      }
    },
    getModules(){
      this.$store.dispatch('professorModule/getProfModules')
    },
    uploadModules(){
      if(this.module_upload){
        const formData = new FormData()
        formData.append('module_',this.module_upload)
        formData.append('subj_id', this.subject._id)
        formData.append('moduleName', this.moduleName)

        this.$store.dispatch('professorModule/uploadModule',{
          formData:formData
        }).then(res=>{
          console.log(res)
          if(res.response){
            this.getModules()
            // this.makeToast(this, false, 'Upload Success.', res.message, 4000, 'success')
            this.cancel()
          }
        }).catch(err=>{
          // this.makeToast(this, false, 'Upload failed', err.message, 4000, 'danger')
          console.log(err.message)
        })
      }else{
        // this.makeToast(this, false, 'Upload warning', 'You need to choose file/s first.', 4000, 'warning')
        console.log('You need to choose file/s first.')
      }
    },
    selectSubj(){
      console.log(this.subjects)
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
.edit-active{
  cursor: pointer;
  background: rgb(204, 204, 226);
  border-radius: 10%;
}
.delete-active{
  cursor: pointer;
  background: rgb(233, 186, 189);
  border-radius: 10%;
}
.view-list:hover, .assign-to:hover{
  text-decoration: underline;
  cursor: pointer;
}
.unassign:hover{
  cursor: pointer;
}
</style>