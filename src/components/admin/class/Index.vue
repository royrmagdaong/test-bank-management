<template>
  <v-card class="pa-4" tile>
    <div>
        <span class="headline tbl-name">List of Class</span>
    </div>

      <div class="mt-4 mb-2 d-flex justify-space-between align-center">
        <div class=" d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Show</span>
            <v-combobox
            style="max-width:120px !important;"
            :items="entryOptions"
            v-model="entryValue"
            outlined
            dense
            hide-details
            color="grey lighten-1"
            @input="getClass"
            ></v-combobox>
        </div>
        <div class="d-flex align-center">
            <span class="mr-2 font-weight-light grey--text text--darken-1 subtitle-2">Search: </span>
            <v-text-field 
            dense 
            hide-details
            outlined
            color="grey lighten-1"
            v-model="searchString"
            @input="getClass"
            ></v-text-field>
        </div>
    </div>
    <!-- <hr style="border:#222 solid 1px;"> -->
    <v-data-table
        :headers="headers"
        :items="get(classes, 'data')"
        :items-per-page="entryValue"
        class="elevation-0"
        search=""
        hide-default-footer
    >
        <template v-slot:[`item.class_code`]="{ item }">
            <div>
                {{get(item, 'class_code.code')}} - {{get(item, 'class_code.description')}}
            </div>
        </template>
        <template v-slot:[`item.instructor`]="{ item }">
            <div>
                {{get(item, 'instructor.first_name')}} {{get(item, 'instructor.last_name')}}
            </div>
        </template>
        <template v-slot:[`item.room`]="{ item }">
            <div>
                {{get(item, 'room.room')}}
            </div>
        </template>
        <template v-slot:[`item.section`]="{ item }">
            <div>
                {{get(item, 'section.grade_level')}} - {{get(item, 'section.section')}}
            </div>
        </template>
        <template v-slot:[`item.students`]="{ item }">
            <div class="view-student" @click="view(item)">
                View List
            </div>
        </template>
    </v-data-table>

    <hr style="border:#222 solid 1px;">
    <div class="mt-4 d-flex justify-space-between align-center">
        <div class="font-weight-light grey--text text--darken-1 subtitle-2">
            <span>Showing {{ getFirstnumEntryCount(((page-1)*entryValue)+1) }} to {{ getEntryCount() }} of {{ get(classes,'count') }} entries</span>
        </div>
        <v-pagination
            v-model="page"
            :length="Math.ceil(get(classes,'count')/entryValue)"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            class=""
            color="grey lighten-1"
            @input="paginate"
        ></v-pagination>
    </div>
    <div>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
            @click="$router.push('class/create')"
        >New</v-btn>
        <v-btn
            class="grey white--text text-capitalize caption"
            tile
        >Delete Selected</v-btn>
    </div>
  </v-card>
</template>

<script>
import {get,debounce} from 'lodash'
export default {
    data(){
        return{
            get,
            debounce,
            page: 1,
            entryOptions:[5,10,20,50,100],
            entryValue: 10,
            searchString: '',
            headers: [
            {
                text: 'No.',
                align: 'left',
                sortable: true,
                value: 'index',
            },
            { text: 'Class code', value: 'class_code', sortable: true },
            { text: 'Instructor', value: 'instructor', sortable: true },
            { text: 'Days and Time', value: 'days_and_time', sortable: true },
            { text: 'Room', value: 'room', sortable: true },
            { text: 'Section', value: 'section', sortable: true },
            { text: 'Students', value: 'students' }
            ],
            searchClass: debounce(()=>{
                this.$store.dispatch('adminClass/getClass', {
                    searchString: this.searchString,
                    limit: this.entryValue,
                    skip: ((this.page-1) * this.entryValue)
                })
            }, 300)
        }
    },
    computed:{
        classes(){
            return this.$store.getters['adminClass/getClass']
        }
    },
    mounted(){
        this.getClass()
    },
    methods:{
        view(students){
            console.log(students)
        },
        getClass(){
            this.page = 1
            this.searchClass()
        },
        paginate(){
            this.searchClass()
        },
        getEntryCount(){
            return ((this.page)*(this.entryValue)) < get(this.classes, 'count') ? ((this.page)*(this.entryValue)) : get(this.classes, 'count')
        },
        getFirstnumEntryCount(val){
            return get(this.classes, 'count')===0?0:val
        }
    }
}
</script>

<style scoped>
.view-student{
    color:rgb(245, 122, 122);
}
.view-student:hover{
    cursor: pointer;
    text-decoration: underline;
}
@media only screen and (max-width: 480px) {
  .tbl-name{
    font-size: 18px !important;
  }
}
</style>