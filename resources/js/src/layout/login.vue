<template>
    <div class="login-main-container">
        <div class="left-container">
            <div class="left-container1">
                <div class="right-inner-container">
                    <v-card width=470>
                        <v-card-title>Sign in</v-card-title>
                        <v-card-text>
                            <v-label>Email</v-label>
                            <v-text-field
                                v-model="credential.username"
                                solo
                                dense
                                color="success"
                            ></v-text-field>
                            <v-label>Password</v-label>
                            <v-text-field
                                v-model="credential.password"
                                solo
                                type="password"
                                dense
                                color="success"
                            ></v-text-field>
                            <div class="class-btn">
                                <v-btn color="success" @click="login">Login</v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                    <!-- <h2>Sign in</h2>
                    <v-layout justify-center row>
                        <v-flex md10>
                            <v-label>Emial</v-label>
                            <v-text-field
                                v-model="credential.username"
                                solo
                                dense
                                color="success"
                            ></v-text-field>
                        </v-flex>
                        <v-flex md10>
                            <v-label>Password</v-label>
                            <v-text-field
                                v-model="credential.password"
                                solo
                                type="password"
                                dense
                                color="success"
                            ></v-text-field>
                        </v-flex>
                        <v-flex class="class-text" md10>
                            <small v-if="iserror" class="errormessege">Invalid email or password</small>
                        </v-flex>
                        <v-btn color="#89ABB5" @click="login">Login</v-btn>
                    </v-layout> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            credential:{},
            isloading:false,
            iserror:false
        }
    },
    methods:{
        login(){
            let payload = this.credential
                axios.post(`/admin/login`,{...payload}).then(({data})=>{
                    if(!data.error_message){
                        this.$router.push({name:'appointments'})
                    }else {
                        this.iserror = true
                        setTimeout(() => {
                            this.iserror = false
                        }, 5000);
                    }
                })
                .finally(()=>{
                    this.isloading = false
                })
        }
    }
}
</script>
<style lang="scss" scoped>
.class-input-container{
    margin-top: 230px;
    // box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // -webkit-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // -moz-box-shadow: 0px 0px 9px 1px rgba(0,0,0,0.42);
    // padding: 55px;
}
.class-text{
    margin-top: -30px;
    .errormessege{
        color: red;
    }
}
.test-class{
    // position: absolute;
    width: 200px;
    // display: none;
}
.class-btn{
    display: flex;
    justify-content: flex-end;
}
</style>