export default[
    {
        path:'/requirements',
        component: () => import(/* webpackChunkName: "requirements" */ '../pages/requirement/index.vue'),
        meta:{ requiresAuth:true },
        name:'requirements'
    },
]