<template>
    <div class="client-main-container">
        <v-navigation-drawer
            class="accent-4 client-sub"
            width="250" 
            height="92vh" 
            permanent
        >
            <v-list nav>
                <template v-for="item in menus">
                    <v-list-item
                        link
                        :key="item.route"
                        @click.stop="_push(item.route)"
                        :class="activeSubRoute==item.route?'active-route':''"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <div class="client-inner-container">
            <transition name="slide-fade" mode="out-in">
                <router-view :key="$route.fullPath" />
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        menus: {
            type: Array
        }
    },
    computed: {
        activeSubRoute() {
            return this.$route.name
        }
    }
};
</script>
<style scoped>
.active-route {
    /* @apply bg-yellow-400; */
    color: white !important;
    background-color: #006048;
}
.active-route div {
    /* @apply text-black; */
    color: white !important;
}
.client-inner-container{
    width: calc(100% - 250px);
}
.client-main-container{
    display: flex;
}
.client-sub {
    margin: 2px 0 0 0;
    border-radius: 4px !important;
}
</style>