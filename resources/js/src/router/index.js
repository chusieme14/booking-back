import Axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './dashboard'
import booking from './booking'
import service from './service'
import requirement from './requirement'
import transaction from './transaction'
import client from './client'
import employee from './employee'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '',
    scrollBehavior (){
        return {x: 0, y: 0}
    },

    routes: [
        ...booking,
        ...service,
        ...requirement,
        ...transaction,
        ...client,
        ...employee,
        {
            path:'/login',
            component: () => import(/* webpackChunkName: "login" */'@/layout/login.vue'),
            name:'login'
        },
        {
            path:'*',
            component: () => import(/* webpackChunkName: "404" */'@/layout/404.vue'),
            name:'not-found'
        }
    ]
})
router.beforeEach((to, from, next) => {
    Axios.get(`/admin/checkuser`).then(({data})=>{
        if(from.meta.parent=="/dashboard" && !to.meta.parent){
            localStorage.removeItem('department_id')
            localStorage.removeItem('batch')
            localStorage.removeItem('course_id')
        }
        console.log(from.meta.parent,"from")
        if(to.name=='login' && data){
            next({
                name: 'not-found',
                query: { redirect: to.fullPath }
              })
            return 
        } 
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!data) {
                next({
                    name: 'login',
                    query: { redirect: to.fullPath }
                })
            } else {
            next()
            }
        } else {
            next()
        }
    })
  })

export default router