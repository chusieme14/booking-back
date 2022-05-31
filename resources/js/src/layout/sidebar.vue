<template>
    <v-navigation-drawer
        class=" accent-4"
        width=350
        :mini-variant="drawer"
        color="white"
        permanent
    >
        <v-list>
            <v-img
                lazy-src="/sample/nwssuseal2.png"
                max-height="120"
                max-width="290"
                src="/sample/nwssuseal2.png"
            ></v-img>
            <v-list-item
                v-for="item in Menuitems"
                :key="item.name"
                :class="getCurrentUrl == item.route ? 'active' : ''"
                @click.stop="$route.name != item.name?$router.push({name: item.route}):''"
                :disabled="hasPermission(item)"
            >
                <v-list-item-icon v-if="drawer">
                    <v-tooltip right color="success">
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                            >{{item.icon}}</v-icon>
                        </template>
                        <span>{{item.name.toUpperCase() }}</span>
                    </v-tooltip>
                </v-list-item-icon>
                <v-list-item-icon v-else>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                    <template v-slot:activator="{ on, attrs }">
                        <v-list-item-title v-bind="attrs" v-on="on">{{item.name.toUpperCase()}}</v-list-item-title>
                    </template>
                <v-list-item-title >{{item.name.toUpperCase()}}</v-list-item-title>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn v-if="!drawer" class="class-logout" @click="logout" block color="#006048">
                    Logout
                </v-btn>
                <v-icon class="ml-2" v-else @click="logout" color="#006048">mdi-logout</v-icon>
            </div>
        </template>
    </v-navigation-drawer>
</template>
<script>
import Menuitems from './MenuItems'
export default {
    props:{
        drawer:{}
    },
    data(){
        return{
            Menuitems: Menuitems,
            user:{}
        }
    },
    methods:{
        logout(){
            this.$emit('logout')
        },
        getUser(){
            axios.get(`/admin/get-user`).then(({data})=>{
                this.user = data
            })
        },
        hasPermission(item){
            if(!this.user.designation_id||this.user.designation_id==1) return false
            else if(this.user.designation_id==3){
                if(item.name=='Appointments') return false
                return true
            }
            else if(this.user.designation_id==2){
                if(item.name=='Employees') return true
                return false
            }
        }
    },
    created(){
        this.getUser()
    },
    computed:{
        getCurrentUrl() {
            let url = this.$route.fullPath
            let parts = url.split("/")
            console.log(parts[1],"dksdjksjlkdlllll")
            return parts[1]
        },
        getCurrentSubUrl(){
            let url = this.$route.fullPath
            let parts = url.split("/")
            return parts[2]
        },
        isSetting(){
            let url = this.$route.fullPath
            let parts = url.split("/")
            if(parts[1]=='setting') return true
            return false
        }

    }
}
</script>
<style lang="scss" scoped>
    .active {
        color: white !important;
        background-color:#006048;
    }
    .class-logout{
        color: white !important;
    }
</style>