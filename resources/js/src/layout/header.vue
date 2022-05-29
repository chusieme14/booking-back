<template>
    <div class="main-container">
        <div class="main-inner-container">
            <v-app-bar-nav-icon class="inner-nav" @click="$emit('setDrawer',!drawer)"></v-app-bar-nav-icon>
            <div class="inner-text">
                <h2>NwSSU BOOKING SYSTEM</h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        drawer:{
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .main-container{
        height: 50px !important;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: #006048 ;
    }
    .avatar-container{
        margin: 10px;
        span{
            font-weight: 600;
        }
    }
    .main-inner-container{
        display: flex;
    }
    .inner-text{
        display: flex;
        justify-content: center;
        width: 100%;
        color: white;
    }
    .inner-nav{
        color: white !important;
    }
</style>