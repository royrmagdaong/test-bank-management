<template>
  <div>
    <v-container class="pa-0">
      <v-row no-gutters style="min-height:90vh;">
        <v-col cols="12" md="4" offset-md="4" class="d-flex align-center px-6">
          <v-card class="px-10 py-8" tile elevation="12" min-width="100%">
            <div class="headline text-center">SIGN UP</div>
            <div class="mt-4">
              <v-text-field outlined dense label="First Name" class="success--text"></v-text-field>
              <v-text-field outlined dense label="Middle Name" class="success--text"></v-text-field>
              <v-text-field outlined dense label="Last Name" class="success--text"></v-text-field>
              <v-text-field outlined dense label="Email" class="success--text"></v-text-field>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Birthday"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    block
                    outlined
                    dense
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                >
                </v-date-picker>
              </v-menu>
              <v-btn outlined block tile class="success white--text">Submit</v-btn>
              <div class="mt-1">
                <span class="caption">Click here to <a @click="routeTo('/login')">login</a></span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default{
  data:()=>({
    date:'',
    menu: false
  }),
  methods:{
    routeTo(route){
      if(this.$route.path !== route){
          this.$router.push(route)
      }
    }
  }
}
</script>

<style>

</style>