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
                <template v-slot:item.abbreviation="{ item }">
                    {{item.abbreviation.toUpperCase()}}
                </template>
                <template v-slot:item.action="{ item }">
                    <v-row>
                        <table-action :item="item" 
                            @editItem="showEdit" 
                            @deleteItem="showDelete"
                            :disable="item.courses.length?['delete']:['']"
                        ></table-action>
                    </v-row>
                </template>
            
            </v-data-table>

        </v-card-text>
        <v-dialog
            v-model="showForm"
            persistent
            max-width="600px"
        >
            <dep-form 
                :payload="payload"
                :show="showForm" 
                @cancel="cancel"
                @save="save"
            ></dep-form>
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
// import DepForm from './form.vue'
export default {
    components:{
        // DepForm
    },
    data(){
        return {
            payload:{},
            showForm:false,
            isdelete:false,
            appointments:[],
            payload:{
                name:'',
                abbreviation:''
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
                    text: 'Action',
                    align: 'start',
                    sortable: true,
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
            console.log(this.options,"option")
            this.data.isFetching = true
                let params = this._createParams(this.options);
                params = params + this._createFilterParams(this.data.filter)
                console.log(this.data.keyword,"keyword")
                if(this.data.keyword)
                    params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/departments?${params}`).then(({data})=>{
                this.departments = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        save(){
            this.payload.abbreviation = this.payload.abbreviation.toLowerCase()
            if (this.payload.id) {
                delete this.payload.created_at
                delete this.payload.updated_at
                axios.put(`/admin/departments/${this.payload.id}`, this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/departments`, this.payload).then(({data})=>{
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
            this.payload.abbreviation = ''
            this.payload.name = ''
            this.details = {}
            this.showForm = false
            this.isdelete = false
        }
      

    }
}
</script>