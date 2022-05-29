<template>
    <div class="dashboard-main-container">
        <v-row no-gutters>
            <v-col cols="12" sm="4">
              <civil-status v-if="iscivil" :data="civil_status"></civil-status>
            </v-col>
            <v-col cols="12" sm="4">
              <gender v-if="isgender" :data="gender"></gender>
            </v-col>
            <v-col cols="12" sm="4">
              <residence v-if="isresidence" :data="residence"></residence>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12" sm="4">
              <employment v-if="isemployment" :data="employments"></employment>
            </v-col>
            <v-col cols="12" sm="4">
              <employment-status v-if="isemploymentstatus" :data="employmentStatus"></employment-status>
            </v-col>
            <v-col cols="12" sm="4">
              <work v-if="iswork" :data="work"></work>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12" sm="4">
              <attainment v-if="isattainment" :data="attainment"></attainment>
            </v-col>
            <v-col cols="12" sm="4">
              <income v-if="isincome" :data="income"></income>
            </v-col>
            <v-col cols="12" sm="4">
              <time-job v-if="istime_jobs" :data="time_jobs"></time-job>
            </v-col>
            
        </v-row>
        <v-row no-gutters>
           
            <v-col cols="12" sm="4">
              <curriculum v-if="iscurriculum" :data="curriculum"></curriculum>
            </v-col>
            <v-col cols="12" sm="4">
              <promotion v-if="ispromotion" :data="promotion"></promotion>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import CivilStatus from './charts/civil-status.vue'
import Gender from './charts/gender.vue'
import Residence from './charts/residence.vue'
import Attainment from './charts/attainment.vue'
import Employment from './charts/employment.vue'
import EmploymentStatus from './charts/employment-status.vue'
import Work from './charts/work.vue'
import Income from './charts/income.vue'
import TimeJob from './charts/time-job.vue'
import Curriculum from './charts/curriculum.vue'
import Promotion from './charts/promotion.vue'
export default {
    components:{
        CivilStatus,
        Gender,
        Residence,
        Attainment,
        Employment,
        EmploymentStatus,
        Work,
        Income,
        TimeJob,
        Curriculum,
        Promotion
    },
    data(){
        return{
          civil_status:[],
          gender:[],
          residence:[],
          employment:[],
          employmentStatus:[],
          work:[],
          attainment:[],
          income:[],
          time_jobs:[],
          curriculum:[],
          promotion:[],
          iscivil:false,
          isgender:false,
          isresidence:false,
          isemployment:false,
          isemploymentstatus:false,
          iswork:false,
          isattainment:false,
          isincome:false,
          istime_jobs:false,
          iscurriculum:false,
          ispromotion:false,
        }
    },
    methods:{
      // getCivilStatus(){
      //   this.iscivil = false
      //   axios.get(`/admin/get-civil-statistics`).then(({data})=>{
      //     this.civil_status = data
      //     this.iscivil = true
      //     this.getGender()
      //   })
      // },
      // getGender(){
      //   this.isgender = false
      //   axios.get(`/admin/get-gender`).then(({data})=>{
      //     this.gender = data
      //     this.isgender = true
      //     this.getResidence()
      //   })
      // },
      // getResidence(){
      //   this.isresidence = false
      //   axios.get(`/admin/get-residence`).then(({data})=>{
      //     this.residence = data
      //     this.isresidence = true
      //     this.getEmployment()
      //   })
      // },
      // getEmployment(){
      //   this.isemployment = false
      //   axios.get(`/admin/get-employment`).then(({data})=>{
      //     this.employments = data
      //     this.isemployment = true
      //     this.getEmploymentStatus()
      //   })
      // },
      // getEmploymentStatus(){
      //   this.isemploymentstatus = false
      //   axios.get(`/admin/get-employment-status`).then(({data})=>{
      //     this.employmentStatus = data
      //     this.isemploymentstatus = true
      //     this.getWork()
      //   })
      // },
      // getWork(){
      //   this.iswork = false
      //   axios.get(`/admin/get-work`).then(({data})=>{
      //     this.work = data
      //     this.iswork = true
      //     this.getAttainment()
      //   })
      // },
      // getAttainment(){
      //   this.isattainment = false
      //   axios.get(`/admin/get-attainment`).then(({data})=>{
      //     this.attainment = data
      //     this.isattainment = true
      //     this.getIncome()
      //   })
      // },
      // getIncome(){
      //   this.isincome = false
      //   axios.get(`/admin/get-income`).then(({data})=>{
      //     this.income = data
      //     this.isincome = true
      //     this.getTimeJobs()
      //   })
      // },
      // getTimeJobs(){
      //   this.istime_jobs = false
      //   axios.get(`/admin/get-time-jobs`).then(({data})=>{
      //     this.time_jobs = data
      //     this.istime_jobs = true
      //     this.getCurriculum()
      //   })
      // },
      // getCurriculum(){
      //   this.iscurriculum = false
      //   axios.get(`/admin/get-curriculum`).then(({data})=>{
      //     this.curriculum = data
      //     this.iscurriculum = true
      //     this.getPromotion()
      //   })
      // },
      getPromotion(){
        this.ispromotion = false
        axios.get(`/admin/get-promotion`).then(({data})=>{
          this.promotion = data
          this.ispromotion = true
        })
      },
    },
    created(){
      this.getCivilStatus()
    }
}
</script>
<style lang="scss" scoped>
  .dashboard-main-container{
    max-height: 92vh;
    overflow-x: scroll;
  }
</style>