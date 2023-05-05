<template>
  <v-dialog v-model="show" persistenta width="600">
    <v-card>
      <v-card-title>Report filter</v-card-title>
      <v-card-text>
        <p class="ma-0 pa-0">Month</p>
        <v-autocomplete 
            solo
            :items="months"
            item-value="id"
            item-text="text"
            v-model="rfilter.month"
            hide-details="auto"
        >

        </v-autocomplete>
        <p class="ma-0 pa-0 mt-2">Year</p>
        <v-autocomplete 
            solo
            :items="years"
            item-value="id"
            item-text="text"
            v-model="rfilter.year"
            hide-details="auto"
        >

        </v-autocomplete>
      </v-card-text>
      <v-card-action class="d-flex flex-row-reverse pa-5">
        <v-btn color="success" @click="$emit('view')">View</v-btn>
        <v-btn color="error" class="mr-1" @click="$emit('cancel')">Cancel</v-btn>
      </v-card-action>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props:{
    rfilter:{},
    show:{
      type:Boolean,
      default:()=>false
    }
  },
  data(){
    return{
      months:[
        {
          id:1,
          text:'January'
        },
        {
          id:2,
          text:'February'
        },
        {
          id:3,
          text:'March'
        },
        {
          id:4,
          text:'April'
        },
        {
          id:5,
          text:'May'
        },
        {
          id:6,
          text:'June'
        },
        {
          id:7,
          text:'July'
        },
        {
          id:8,
          text:'August'
        },
        {
          id:9,
          text:'September'
        },
        {
          id:10,
          text:'October'
        },
        {
          id:11,
          text:'November'
        },
        {
          id:12,
          text:'December'
        },
      ]
    }
  },
  computed:{
    years(){
      const d = new Date();
      let year = d.getFullYear();
      let years = []
      for (let index = 1; index < 4; index++) {
        years.push({id:year, text: year});
        year = year-index
      }
      return years
    }
  }
}
</script>