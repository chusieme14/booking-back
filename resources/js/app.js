require('./bootstrap');
window.Vue = require('vue');

import router from './src/router/index'
import vuetify from '@/plugin/vuetify/index'
import "./src/mixins/index"
import VueToast from 'vue-toast-notification';
// import VeeValidate from 'vee-validate';

import 'vue-toast-notification/dist/index.css';
// Vue.use(VeeValidate);
Vue.use(VueToast);
const axios = require('axios');
const files = require.context("./src/components/", true, /\.vue$/i);
files.keys().map(key =>
    Vue.component(
        key
        .split("/")
        .pop()
        .split(".")[0],
        files(key).default
    )
);

Vue.component('main-app', require('@/layout/App.vue').default);

const app = new Vue({
    el:'#app',
    vuetify,
    router,
    VueToast
});
