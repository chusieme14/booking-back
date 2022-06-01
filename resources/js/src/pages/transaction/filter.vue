<template>
    <div>
        <v-menu v-model="menu1" offset-x bottom right :close-on-content-click="false">
            <template v-slot:activator="{ on, attrs }">
                <v-btn text icon x-small v-bind="attrs" v-on="on">
                    <v-icon>mdi-calendar</v-icon>
                </v-btn>
            </template>
            <v-date-picker
            v-bind="attrs" v-on="on"
                v-model="filter.date"
                color="success"
                :max="minDate"
                no-title
                @input="menu1=false"
            ></v-date-picker>
        </v-menu>
        <label><span class="text-red">*</span> Date</label>
        <v-text-field
            v-model="filter.date"
            dense
            filled
            readonly
            @click.stop="menu1 = true"
        ></v-text-field>
    </div>
</template>
<script>
export default {
    props:{
        filter:{}
    },
    data(){
        return{
            minDate: new Date().toISOString().slice(0,10),
            menu1:false,
        }
    }
}
</script>