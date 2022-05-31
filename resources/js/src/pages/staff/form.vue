<template>
    <v-card>
        <v-card-title>{{payload.id?'Edit':'Add'}} service
            <v-spacer></v-spacer>
            <v-btn class="mr-2" color="error" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn color="success" @click="save">Save</v-btn>
        </v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-container>
                    <v-row>
                        <v-col class="col-text-field" cols="12" sm="4">
                            <label><span class="text-red">*</span> First name </label>
                            <v-text-field
                                v-model="payload.first_name"
                                :rules="[() => !!payload.first_name ||  '']"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col class="col-text-field" cols="12" sm="4">
                            <label><span class="text-red">*</span> Last name </label>
                            <v-text-field
                                v-model="payload.last_name"
                                :rules="[() => !!payload.last_name ||  '']"
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col class="col-text-field" cols="12" sm="4">
                            <label><span class="text-red">*</span> Middle name</label>
                            <v-text-field
                                v-model="payload.middle_name"
                                :rules="[() => !!payload.middle_name ||  '']"
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="col-text-field" cols="12" sm="4">
                            <label><span class="text-red">*</span> Employee id </label>
                            <v-text-field
                                v-model="payload.employeeID"
                                :rules="[() => !!payload.employeeID ||  '']"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col class="col-text-field" cols="12" sm="4">
                            <label><span class="text-red">*</span> Designation </label>
                            <v-autocomplete
                                v-model="payload.designation_id"
                                :rules="[() => !!payload.designation_id ||  '']"
                                hide-details="auto"
                                :items="designations"
                                item-text="name"
                                item-value="id"
                                filled
                                dense
                            ></v-autocomplete>
                        </v-col>
                        <v-col class="col-text-field" cols="12" sm="4">
                            <label><span class="text-red">*</span> Username</label>
                            <v-text-field
                                v-model="payload.username"
                                :rules="[() => !!payload.username ||  '']"
                                hide-details="auto"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row v-if="!payload.id">
                        <v-col class="col-text-field" cols="12" sm="6">
                            <label><span class="text-red">*</span> Password </label>
                            <v-text-field
                                v-model="payload.password"
                                :rules="[() => !!payload.password ||  '']"
                                type="password"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                        <v-col class="col-text-field" cols="12" sm="6">
                            <label><span class="text-red">*</span> Retype password</label>
                            <v-text-field
                                v-model="payload.c_password"
                                :rules="[() => payload.c_password==payload.password ||  '']"
                                hide-details="auto"
                                type="password"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
            <v-card>
                <v-card-title>Select Requirements
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="data.keyword"
                        dense
                        placeholder="Search"
                        label="Search"
                        @keydown.enter="getServices"
                    >
                    </v-text-field>
                </v-card-title>
                <v-card-text>
                    <v-data-table
                        v-model="selectService"
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
                        @update:options="getServices"
                        class="cursor-pointer table-fix-height"
                        fixed-header
                    >
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-card-text>
        <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn color="success" @click="save">Save</v-btn>
        </v-card-actions> -->
    </v-card>
</template>
<script>
export default {
    props:{
        payload:{

        },
        show:{}
    },
    data(){
        return{
            services:[],
            designations:[],
            selectService:[],
            data: {
                title: "Requirements",
                isFetching: false,
                keyword: "",
                filter:{}
            },
            footerPages: {
                "items-per-page-options": [5], 
            },
            options:{
                itemsPerPage: 5
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
            ]
        }
    },
    methods:{
        save(){
            if(!this.$refs.form.validate()) return;
            this.payload.service_ids = this._pluck(this.selectService,'id')
            this.$emit('save', this.payload)
        },
        getServices(){
            this.data.isFetching = true
            let params = this._createParams(this.options)
            if(this.data.keyword){
                params=params+'&keyword='+this.data.keyword
            }
            axios.get(`/admin/services?${params}`).then(({data})=>{
                this.services = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        },
        getDesignations(){
            axios.get(`/admin/designations`).then(({data})=>{
                this.designations = data.data
            })
        }
    },
    watch:{
        "show":{
            handler(val){
                if(!val && this.$refs.form){
                    this.$refs.form.resetValidation()
                }else{
                    this.selectService = []
                    if(this.payload.services.length){
                        Object.assign(this.selectService, this.payload.services)
                        this.getServices()
                    }
                    this.getDesignations()
                }
            },immediate:true
        }
    },
}
</script>