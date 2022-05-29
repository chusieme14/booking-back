<template>
    <v-card elevation="1" max-height="90vh">
        <v-card-text>
            <table-header
                :data="data"
                @addNew="addNew"
                @refresh="fetchPage"
                @search="fetchPage"
                @filterRecord="fetchPage"
                :hide="['addNew']"
            >
                <template v-slot:custom_filter>
                    <graduate-filter
                        :filter="data.filter"
                    ></graduate-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="appointments"
                max-height="100%"
                :single-select="false"
                show-select
                :search="data.keyword"
                :loading="data.isFetching"
                :server-items-length="total"
                :footer-props="footerPages"
                :options.sync="options"
                :items-per-page="options.itemsPerPage"
                @update:options="fetchPage"
                @click:row="viewDepartment"
                class="cursor-pointer table-fix-height"
                fixed-header
            >
                <!-- @click:row="viewRecord" -->
                <template v-slot:item.student_number="{ item }">
                    {{item.client.student_number}}
                </template>
                <template v-slot:item.client="{ item }">
                    {{item.client.fullname}}
                </template>
                <template v-slot:item.service="{ item }">
                    {{item.service.name}}
                </template>
                <template v-slot:item.created_at="{ item }">
                    {{_normalFormatDate(item.date_requested)}}
                </template>
                <template v-slot:item.action="{ item }">
                    <v-row v-if="item.status==1">
                        <v-tooltip color="success" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="success"
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="showAcceptForm(item)"
                                >
                                    <v-icon small>
                                    mdi-check-bold
                                    </v-icon>
                                </v-btn>
                            </template>
                            Accept Booking
                        </v-tooltip>
                        <v-tooltip color="error" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="error"
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="acceptBooking(item)"
                                >
                                    <v-icon small>
                                    mdi-close
                                    </v-icon>
                                </v-btn>
                            </template>
                            Decline Booking
                        </v-tooltip>
                    </v-row>
                    <template v-if="item.status==2">
                        <v-tooltip color="success" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="success"
                                    v-bind="attrs"
                                    v-on="on"
                                    icon
                                    @click="markAsDone(item)"
                                >
                                    <v-icon small>
                                        mdi-check-all
                                    </v-icon>
                                </v-btn>
                            </template>
                            Mark as Done
                        </v-tooltip>
                    </template>
                </template>
            
            </v-data-table>

        </v-card-text>
        <v-dialog
            v-model="showForm"
            persistent
            max-width="600px"
        >
            <appt-form 
                :payload="payload"
                :show="showForm" 
                @cancel="cancel"
                @save="acceptBooking"
            ></appt-form>
        </v-dialog>
        <confirm-dialog
            :details="details"
            :show="isdelete"
            @cancel="cancel"
            @confirm="remove"
        />
    </v-card>
</template>
<script>
import ApptForm from './form.vue'
export default {
    components:{
        ApptForm
    },
    data(){
        return {
            payload:{},
            showForm:false,
            isdelete:false,
            appointments:[],
            selectedBooking:{},
            payload:{
                date:null,
                time:null
            },
            details:{},
            data: {
                title: "Appointments",
                isFetching: false,
                keyword: "",
                filter:{}
            },
            footerPages: {
                "items-per-page-options": [5, 10, 15, 20, 30, 40, 50, 100,-1], 
            },
            options:{
                itemsPerPage: 15
            },
            total: 0,
            headers:[
                {
                    text: 'Id',
                    align: 'start',
                    sortable: true,
                    value: 'id',
                },
                {
                    text: 'Student number',
                    align: 'start',
                    sortable: true,
                    value: 'student_number',
                },
                {
                    text: 'Client',
                    align: 'start',
                    sortable: true,
                    value: 'client',
                },
                {
                    text: 'Service',
                    align: 'start',
                    sortable: true,
                    value: 'service',
                },
                {
                    text: 'Requested date',
                    align: 'start',
                    sortable: true,
                    value: 'created_at',
                },
                {
                    text: 'Action',
                    align: 'start',
                    sortable: true,
                    value: 'action',
                },
            ]
        }
    },
    methods:{
        showAcceptForm(val){
            Object.assign(this.selectedBooking, val)
            this.showForm = true
        },
        acceptBooking(){
            axios.put(`/admin/accept-booking/${this.selectedBooking.id}`, this.payload).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        markAsDone(val){
            axios.put(`/admin/done-booking/${val.id}`, val).then(({data})=>{
                this.fetchPage()
            })
        },
        viewDepartment(val){
            // this.$router.push({ name: 'dep-civil-status', params: { department_id: val.id } })
        },
        cancel(){
            this.clear()
        },
        addNew(){
            this.showForm = true
        },
        fetchPage(){
            this.data.isFetching = true
            let params = this._createParams(this.options);
            params = params + this._createFilterParams(this.data.filter)
            console.log(this.data.keyword,"keyword")
            if(this.data.keyword){
                params = params + '&keyword=' + this.data.keyword
            }
            params = params + '&appointment=1'
            axios.get(`/admin/bookings?${params}`).then(({data})=>{
                this.appointments = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        async showEdit(val){
            await Object.assign(this.payload, val)
            this.showForm = true
        },
        showDelete(val){
            Object.assign(this.payload, val)
            this.details.title = 'Delete'
            this.details.message = `Are you sure you want to remove ${this.payload.abbreviation}?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/departments/${this.payload.id}`).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        clear(){
            this.payload.date = null
            this.payload.name = null
            this.details = {}
            this.showForm = false
            this.isdelete = false
        }
      

    }
}
</script>