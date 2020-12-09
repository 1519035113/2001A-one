export default [{
    path: '/homepage',
    name: 'homepage',
    component: () => import('@/views/homepage'),
    redirect: '/homepage/welcome',
    children: [{
        path: '/homepage/welcome',
        component: () => import('@/views/welcome')
    }]
},
{
    path:'/homepage/user',
    name:'homepage',
    component: () => import('@/views/homepage'),
    children:[
       { 
           path:'/',
           component:()=>import('@/views/user')
        }
    ]
},

]