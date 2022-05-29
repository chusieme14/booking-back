<template>
    <v-card>
        <v-card-title>Select date and time</v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-container>
                    <v-row>
                        <v-col class="col-text-field" cols="12" sm="12">
                            <v-menu v-model="menu1" offset-x bottom right :close-on-content-click="false">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text icon x-small v-bind="attrs" v-on="on">
                                        <v-icon>mdi-calendar</v-icon>
                                    </v-btn>
                                </template>
                                <v-date-picker
                                    v-model="payload.date"
                                    color="success"
                                    :min="minDate"
                                    no-title
                                    @input="menu1=false"
                                ></v-date-picker>
                            </v-menu>
                            <label><span class="text-red">*</span> Date</label>
                            <v-text-field
                                v-model="payload.date"
                                :rules="[() => !!payload.date ||  '']"
                                dense
                                filled
                                readonly
                                @click.stop="menu1 = true"
                            ></v-text-field>

                            <v-menu offset-x
                                v-model="menu2"
                                ref="menu"
                                :nudge-right="10" 
                                bottom right 
                                :close-on-content-click="false"
                                max-width="290px"
                                min-width="290px"    
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn text icon x-small v-bind="attrs" v-on="on">
                                        <v-icon>mdi-clock</v-icon>
                                    </v-btn>
                                </template>
                                <v-time-picker
                                    v-if="menu2"
                                    v-model="payload.time"
                                    full-width
                                    :min="minTime"
                                    :max="maxTime"
                                    no-title
                                    color="success"
                                    @click:minute="$refs.menu.save(time)"
                                ></v-time-picker>
                            </v-menu>
                            <label><span class="text-red">*</span> Time</label>
                            <v-text-field
                                @click="menu2=!menu2"
                                v-model="payload.time"
                                :rules="[() => !!payload.time ||  '']"
                                dense
                                filled
                                hide-details="auto"
                                readonly
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
            minDate: new Date().toISOString().slice(0,10),
            menu1:false,
            menu2:false,
            minTime:'8:00',
            maxTime:'18:00',
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