export default[
    {
        path:'/',
        redirect:'appointments',
        // component: () => import(/* webpackChunkName: "appointments" */ '../pages/appointment/index.vue'),
        meta:{ requiresAuth:true },
        name:'appointments'
    },
    {
        path:'/appointments',
        component: () => import(/* webpackChunkName: "appointments" */ '../pages/appointment/index.vue'),
        meta:{ requiresAuth:true },
        name:'appointments'
    },
]