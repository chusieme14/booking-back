export default[
    {
        path:'/',
        redirect:'dashboard',
        // component: () => import(/* webpackChunkName: "dashboard" */ '../pages/dashboard/index.vue'),
        meta:{ requiresAuth:true },
        name:'dashboard'
    },
    // {
    //     path:'/dashboard',
    //     component: () => import(/* webpackChunkName: "dashboard" */ '../pages/dashboard/index.vue'),
    //     meta:{ requiresAuth:true },
    //     name:'dashboard'
    // },
    {
        path: "/dashboard",
        component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/view.vue'),
        children: [
            {
                path:'/dashboard',
                redirect:'civil-status'
            },
            {
                path:'civil-status',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/civil-status.vue'),
                name: 'civil-status',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'gender',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/gender.vue'),
                name: 'gender',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'residents',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/residence.vue'),
                name: 'residents',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'employment',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/employment.vue'),
                name: 'employment',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'employment-status',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/employment-status.vue'),
                name: 'employment-status',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'place-work',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/work.vue'),
                name: 'place-work',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'educational-attainment',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/attainment.vue'),
                name: 'educational-attainment',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'gross-monthly-income',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/income.vue'),
                name: 'gross-monthly-income',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'time-get-job',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/time-job.vue'),
                name: 'time-get-job',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'relevance-curriculum',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/curriculum.vue'),
                name: 'relevance-curriculum',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
            {
                path:'promotion',
                component: () => import(/* webpackChunkName: "alumni" */ '../pages/dashboard/charts/promotion.vue'),
                name: 'promotion',
                meta:{ 
                    parent:'/dashboard',
                    requiresAuth:true,
                }
            },
        ]
    },
]