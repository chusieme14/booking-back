export default[
    {
        path:'/services',
        component: () => import(/* webpackChunkName: "appointments" */ '../pages/service/index.vue'),
        meta:{ requiresAuth:true },
        name:'services'
    },
]