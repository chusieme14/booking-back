export default[
    {
        path:'/requirements',
        component: () => import(/* webpackChunkName: "appointments" */ '../pages/requirement/index.vue'),
        meta:{ requiresAuth:true },
        name:'requirements'
    },
]