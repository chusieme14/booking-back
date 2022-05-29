export default[
    {
        path:'/services',
        component: () => import(/* webpackChunkName: "services" */ '../pages/service/index.vue'),
        meta:{ requiresAuth:true },
        name:'services'
    },
]