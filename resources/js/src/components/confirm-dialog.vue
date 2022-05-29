<template>
    <v-dialog
        width="500"
        v-model="show"
        @keydown.esc="cancel"
        persistent
    >
        <v-card>
            <v-card-title class="dialog-title">
                {{ details?details.title:'' }}
            </v-card-title>
            <v-card-text class="dialog-message">
                <h3>{{details?details.message:''}}</h3>
            <div class="confirm-action">
                <v-btn color="error" text @click.stop="cancel">
                    cancel
                </v-btn>
                <v-btn color="#89ABB5" text @click.stop="confirm">
                    confirm
                </v-btn>
            </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props:{
        show:{
            type:Boolean
        },
        details:{

        }
    },
    data(){
        return{
        }
    },

    methods: {
        cancel(){
            this.$emit('cancel')
        },
        confirm(){
            this.$emit('confirm')
        }
    },
    // watch:{
    //     data:{
    //         handler(val){
    //             if(val.dialog) {
    //                 this.dialog = val.dialog;
    //             }
    //         }
    //     }
    // }
};
</script>
<style>
    .confirm-action{
        display: flex;
        justify-content: flex-end;
    }
    .dialog-title{
        text-transform: uppercase;
    }
    .dialog-message{
        text-align: center;
    }
    .dialog-message h3{
        margin: 0px 0px 10px 0px;
    }
</style>