<template>
    <v-card>
        <v-card-title>{{payload.id?'Edit':'Add'}} transaction</v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-container>
                    <v-row>
                        <v-col class="col-text-field" cols="12" sm="12">
                            <label><span class="text-red">*</span> Name </label>
                            <v-text-field
                                :rules="[() => !!payload.name ||  '']"
                                v-model="payload.name"
                                filled
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn color="success" @click="save">Save</v-btn>
        </v-card-actions>
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
            requirements:[],
            selectRequirements:[],
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
            this.payload.requirement_ids = this._pluck(this.selectRequirements,'id')
            this.$emit('save', this.payload)
        },
        getRequirements(){
            this.data.isFetching = true
            let params = this._createParams(this.options)
            if(this.data.keyword){
                params=params+'&keyword='+this.data.keyword
            }
            axios.get(`/admin/requirements?${params}`).then(({data})=>{
                this.requirements = data.data
                this.total = data.total
                this.data.isFetching = false
            })
        }
    },
    watch:{
        "show":{
            handler(val){
                if(!val && this.$refs.form){
                    this.$refs.form.resetValidation()
                }else{
                    this.selectRequirements = []
                    if(this.payload.requirements.length){
                        Object.assign(this.selectRequirements, this.payload.requirements)
                        this.getRequirements()
                        console.log(this.selectRequirements,"sjdhajkshdjksahdjshd")
                    }
                }
            },immediate:true
        }
    },
}
</script>