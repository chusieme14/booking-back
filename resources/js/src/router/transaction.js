export default[
    {
        path:'/transactions',
        component: () => import(/* webpackChunkName: "transactions" */ '../pages/transaction/index.vue'),
        meta:{ requiresAuth:true },
        name:'transactions'
    },
]