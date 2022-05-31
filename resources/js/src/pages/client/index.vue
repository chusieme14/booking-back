<template>
    <v-card elevation="1" max-height="90vh">
        <v-card-text>
            <table-header
                :data="data"
                @addNew="addNew"
                @refresh="fetchPage"
                @search="fetchPage"
                @filterRecord="fetchPage"
                :hide="['filter','addNew']"
            >
                <template v-slot:custom_filter>
                    <graduate-filter
                        :filter="data.filter"
                    ></graduate-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="clients"
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
                <template v-slot:item.abbreviation="{ item }">
                    {{item.abbreviation.toUpperCase()}}
                </template>
                <template v-slot:item.action="{ item }">
                    <v-row>
                        <v-tooltip color="#1976D2" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn @click="acceptClient(item)" v-if="item.is_verified==0" v-bind="attrs" v-on="on" color="warning" icon>
                                    <v-icon small color="#1976D2">
                                        mdi-check-bold
                                    </v-icon>
                                </v-btn>
                            </template>
                            Accept client
                        </v-tooltip>
                        <v-tooltip v-if="item.is_verified==1" color="error" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn 
                                    v-if="item.is_verified==1" 
                                    v-bind="attrs" 
                                    v-on="on"
                                    :disabled="item.bookings.length?true:false" 
                                    @click="showDelete(item)" 
                                    color="warning" 
                                    icon
                                >
                                    <v-icon small color="error">
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </template>
                            Delete
                        </v-tooltip>
                    </v-row>
                </template>
            
            </v-data-table>

        </v-card-text>
        <v-dialog
            v-model="showForm"
            persistent
            max-width="600"
        >
            <reqs-form 
                :payload="payload"
                :show="showForm" 
                @cancel="cancel"
                @save="save"
            ></reqs-form>
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
import ReqsForm from './form.vue'
export default {
    components:{
        ReqsForm
    },
    data(){
        return {
            payload:{},
            showForm:false,
            isdelete:false,
            clients:[],
            payload:{},
            details:{},
            data: {
                title: "Clients",
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
                    text: 'Last name',
                    align: 'start',
                    sortable: true,
                    value: 'last_name',
                },
                {
                    text: 'First name',
                    align: 'start',
                    sortable: true,
                    value: 'first_name',
                },
                {
                    text: 'Middle name',
                    align: 'start',
                    sortable: true,
                    value: 'middle_name',
                },
                {
                    text: 'Email',
                    align: 'start',
                    sortable: true,
                    value: 'email',
                },
                {
                    text: 'Phone number',
                    align: 'start',
                    sortable: true,
                    value: 'phone_number',
                },
                {
                    text: 'Action',
                    align: 'start',
                    sortable: false,
                    value: 'action',
                },
            ]
        }
    },
    methods:{
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
            if(this.data.keyword)
                params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/clients?${params}`).then(({data})=>{
                this.clients = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        acceptClient(val){
            this.payload.is_verified = 1
            axios.put(`/admin/clients/${val.id}`, this.payload).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        save(){
            if (this.payload.id) {
                delete this.payload.created_at
                delete this.payload.updated_at
                axios.put(`/admin/requirements/${this.payload.id}`, this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/requirements`, this.payload).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        async showEdit(val){
            await Object.assign(this.payload, val)
            this.showForm = true
        },
        showDelete(val){
            Object.assign(this.payload, val)
            this.details.title = 'Delete'
            this.details.message = `Are you sure you want to remove "${this.payload.fullname}"?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/clients/${this.payload.id}`).then(({data})=>{
                this.fetchPage()
                this.clear()
            })
        },
        clear(){
            this.payload.price = ''
            this.payload.name = ''
            this.payload.requirements = []
            this.showForm = false
            this.isdelete = false
        }
      

    }
}
</script>