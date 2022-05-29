<template>
    <v-card >
       <v-card-title class="class-chart-head">Gross Monthly Income
           <v-autocomplete
                v-model="department_id"
                :items="departments"
                item-text="abbreviation"
                item-value="id"
                hide-details="auto"
                label="Department"
                placeholder="All"
                class="class-year"
                @change="getIncome(), getCourses()"
                filled
                dense
            ></v-autocomplete>
            <v-autocomplete
                v-model="course_id"
                :items="courses"
                item-text="code"
                item-value="id"
                hide-details="auto"
                label="Course"
                placeholder="All"
                class="class-year"
                @change="getIncome"
                filled
                dense
            ></v-autocomplete>
            <v-autocomplete
                v-model="batch"
                :items="years"
                hide-details="auto"
                label="Year Graduated"
                placeholder="All"
                class="class-year"
                @change="getIncome"
                filled
                dense
            ></v-autocomplete>
       </v-card-title>
        <v-card-text class="dashboard-main-container">
            <div class="dashboard-inner-container">
                <apexchart v-if="isincome && hasdata" width="800" type="pie" :options="chartOptions" :series="series"></apexchart>
                <h3 v-if="!hasdata">No data found</h3>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    components:{
        'apexchart':VueApexCharts
    },
    // props:{
    //     data:{}
    // },
    data(){
        return{
            series: [],
            chartOptions: {
                chart: {
                    width:800,
                    type: 'pie',
                    toolbar: {
                        show: true
                    },
                },
                stroke: {
                    colors: ['#fff']
                },
                labels:['below 5,000', '5,000 - 10,000', '10,000 - 15,000', '15,000 - 20,000', '20,000 - 25,000', 'above 25,000'],
                // title:{
                //     text: "Gross Monthly Income",
                // },
                fill: {
                    opacity: 0.8
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                        width: 200
                        },
                        legend: {
                        position: 'bottom'
                        }
                    }
                }]
            },
            isincome:false,
            batch:null,
            department_id:null,
            course_id:null,
            courses:[],
            departments:[],
            hasdata:false
        }
    },
    methods:{
        getIncome(){
            this.isincome = false
            this.hasdata = false
            let params=''
            if(this.department_id){
                localStorage.setItem('department_id', this.department_id)
                localStorage.removeItem('course_id')
                params = params + '&department_id='+this.department_id
            }
            if(this.course_id){
                localStorage.setItem('course_id', this.course_id)
                params = params + '&course_id='+this.course_id
            }
            if(this.batch){
                localStorage.setItem('batch', this.batch)
                params = params + '&batch='+this.batch
            }
            axios.get(`/admin/get-income?${params}`).then(({data})=>{
                this.series = data
                this.series.forEach(element => {
                    if(element > 0) this.hasdata=true
                });
                this.isincome = true
            })
        },
        getCourses(){
            let params = ''
            if(this.department_id){
                params = 'department_id=' + this.department_id
            }
            axios.get(`/admin/courses?${params}`).then(({data})=>{
                this.courses = data.data
            })
        },
        getDepartments(){
            axios.get(`/admin/departments`).then(({data})=>{
                this.departments = data.data
            })
        }
    },
    async created(){
        this.department_id = await parseInt(localStorage.getItem('department_id'))
        this.course_id = await parseInt(localStorage.getItem('course_id'))
        this.batch = await localStorage.getItem('batch')
        await this.getDepartments()
        await this.getCourses()
        await this.getIncome()
    },
    computed:{
        years(){
            let schoolYear = []
            let year = new Date().getFullYear()
            let startYear = year - 10
            for (let start = year-1; start >= startYear; start--) {
                schoolYear.push(`${start}-${start+1}`)
            }
            return schoolYear
        }
    },
    // watch:{
    //     "data":{
    //         handler(val){
    //             this.series = val
    //         },immediate:true
    //     }
    // }
    
}
</script>