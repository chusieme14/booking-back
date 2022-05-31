export default[
    {
        path:'/clients',
        component: () => import(/* webpackChunkName: "client" */ '../pages/client/index.vue'),
        meta:{ requiresAuth:true },
        name:'clients'
    },
]