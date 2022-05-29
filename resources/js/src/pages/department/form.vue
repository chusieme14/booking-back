<template>
    <v-card>
        <v-card-title>{{payload.id?'Edit':'Add'}} department</v-card-title>
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
                            <label><span class="text-red-500">*</span> Abbreviation</label>
                            <v-text-field
                                :rules="[() => !!payload.abbreviation ||  '']"
                                ref="abbreviation"
                                v-model="payload.abbreviation"
                                hide-details="auto"
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

        }
    },
    methods:{
        save(){
            if(!this.$refs.form.validate()) return;
            this.$emit('save', this.payload)
        },
    },
    watch:{
        "show":{
            handler(val){
                if(!val && this.$refs.form){
                    this.$refs.form.resetValidation()
                }
            },immediate:true
        }
    }
}
</script>