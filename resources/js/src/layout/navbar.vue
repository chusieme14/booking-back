<template>
    <v-main class="mx-5">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-main>

</template>
<script>
export default {
    
}
</script>