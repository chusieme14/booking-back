<template>
    <v-card elevation="1" max-height="90vh">
        <v-card-text>
            <table-header
                :data="data"
                @addNew="addNew"
                @refresh="fetchPage"
                @search="fetchPage"
                @filterRecord="fetchPage"
                :hide="['filter']"
            >
                <template v-slot:custom_filter>
                    <graduate-filter
                        :filter="data.filter"
                    ></graduate-filter>
                </template>
            </table-header>
            <v-data-table
                :headers="headers"
                :items="services"
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
                        <!-- <v-tooltip color="#1976D2" left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" color="warning" icon>
                                    <v-icon small color="#1976D2">
                                        mdi-eye
                                    </v-icon>
                                </v-btn>
                            </template>
                            Show
                        </v-tooltip> -->
                        <table-action :item="item" 
                            @editItem="showEdit" 
                            @deleteItem="showDelete"
                        ></table-action>
                    </v-row>
                </template>
            
            </v-data-table>

        </v-card-text>
        <v-dialog
            v-model="showForm"
            persistent
            max-width="800px"
        >
            <service-form 
                :payload="payload"
                :show="showForm" 
                @cancel="cancel"
                @save="save"
            ></service-form>
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
import ServiceForm from './form.vue'
export default {
    components:{
        ServiceForm
    },
    data(){
        return {
            payload:{},
            showForm:false,
            isdelete:false,
            services:[],
            payload:{
                name:'',
                abbreviation:'',
                requirements:[]
            },
            details:{},
            data: {
                title: "Services",
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
                    text: 'Name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
                {
                    text: 'Price',
                    align: 'start',
                    sortable: true,
                    value: 'price',
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
            console.log(this.options,"option")
            this.data.isFetching = true
                let params = this._createParams(this.options);
                params = params + this._createFilterParams(this.data.filter)
                console.log(this.data.keyword,"keyword")
                if(this.data.keyword)
                    params = params + '&keyword=' + this.data.keyword
            axios.get(`/admin/services?${params}`).then(({data})=>{
                this.services = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        save(){
            if (this.payload.id) {
                delete this.payload.created_at
                delete this.payload.updated_at
                axios.put(`/admin/services/${this.payload.id}`, this.payload).then(({data})=>{
                    this.fetchPage()
                    this.clear()
                })
                return
            }
            axios.post(`/admin/services`, this.payload).then(({data})=>{
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
            this.details.message = `Are you sure you want to remove "${this.payload.name}"?`
            this.isdelete = true
        },
        remove(){
            axios.delete(`/admin/services/${this.payload.id}`).then(({data})=>{
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