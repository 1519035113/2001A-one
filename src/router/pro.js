export default [{
    path: '/hhome',
    name: 'hhome',
    component: () => import('@/views/hhome'),
    redirect: '/hhome/welcome',
    children: [{
        path: '/hhome/welcome',
        component: () => import('@/views/welcome')
    }]
},
{
    path:'/hhome/user',
    name:'hhome',
    component: () => import('@/views/hhome'),
    children:[
       { 
           path:'/',
           component:()=>import('@/views/user')
        }
    ]
},
{
    path:'/hhome/photo',
    name:'hhome',
    component: () => import('@/views/hhome'),
    children:[
       { 
           path:'/',
           component:()=>import('@/views/photo')
        }
    ]
},
{
    path:'/hhome/shop',
    name:'hhome',
    component: () => import('@/views/hhome'),
    children:[
       { 
           path:'/',
           component:()=>import('@/views/shop')
        }
    ]
},

]