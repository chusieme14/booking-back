export default[
    {
        path:'/employees',
        component: () => import(/* webpackChunkName: "employees" */ '../pages/staff/index.vue'),
        meta:{ requiresAuth:true },
        name:'employees'
    },
]