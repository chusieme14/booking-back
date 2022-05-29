import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
	theme: {
        themes: {
            light: {
                success: '#006048',
                primary: '#f39c12'
            },
        },
    },
}

export default new Vuetify(opts)