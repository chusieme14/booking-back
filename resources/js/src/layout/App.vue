<template>
    <v-app v-if="!isfetching">
        <div v-if="isAuth && $route.name!='not-found'" class="d-flex class-main-container">
            <side-bar :drawer="drawer" @logout="logout"></side-bar>
            <div class="class-content">
                <main-header :drawer="drawer" @setDrawer="setDrawer"></main-header>
                <router-view class="ma-3"></router-view>
            </div>
        </div>
        <router-view v-else-if="$route.name=='not-found'"></router-view>
        <login v-else></login>
    </v-app>
</template>
<script>
import MainHeader from './header.vue'
import SideBar from './sidebar.vue'
import Login from './login.vue'
export default {
    components:{
        MainHeader,
        SideBar,
        Login
    },
    data(){
        return{
            isSuperAdmin:false,
            isAuth:false,
            isfetching:true,
            drawer:false
        }
    },
    methods:{
        setDrawer(val){
            this.drawer = val
            localStorage.setItem("drawer", val);
            console.log(val,"asjdhsakjdh")
        },
        logout(){
            axios.get(`/admin/logout`).then(({data})=>{
                this.$router.push({name:'login'})
                this.isAuth = false
            })
        },
        getAuthuser(){
            axios.get(`/admin/checkuser`).then(({data})=>{
                console.log(data,"checkuser")
                this.isAuth = data
                this.isfetching = false
            })
        }
    },
    mounted(){
        this.drawer = localStorage.getItem('drawer')=="true"?true:false
    },
    computed:{

    },
    watch:{
        $route (to, from){
           this.getAuthuser()
        }
    }
}
</script>
<style lang="scss" scoped>
.class-header{
    width: 100%;
}
.v-application .primary--text {
    color:#070707 !important;
}
.class-main-container{
    height: 100%;
}
.class-content{
    width: 100%;
    background-color: rgb(236, 231, 231);
}
.active {
	color: #070707 !important;
    background-color: rgb(35, 107, 17);
}
.v-list-item__content {
    cursor: pointer;
}
</style>