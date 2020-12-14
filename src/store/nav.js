export default [
    {
        path: '/log/a',
        name: '首页',
        icon:'el-icon-document',
        children: [{
                path: '/hhome/user',
                name: '后台首页',
                icon: ''
            },
            {
                path: '/hhome/photo',
                name: '相册管理',
                icon: ''
            },
            {
                path: '/hhome/shop',
                name: '商品列表',
                icon: ''
            }
        ]
    },
    {
        path: '/admin/b',
        name: '商品',
        icon:'el-icon-plus',
        children: [{
                path: '/hhome/addshop',
                name: '商品分类',
                icon: ''
            },
            {
                path: '/hhome/goods',
                name: '商品规格',
                icon: ''
            }
        ]
    },
    {
        path: '/admin/c',
        name: '会员',
        icon:'el-icon-star-on',
        children: [{
                path: '/hhome/ccc',
                name: '会员列表',
                icon: ''
            },
            {
                path: '/hhome/aaa',
                name: '会员等级',
                icon: ''
            }
        ]
    },
   
    {
        path: '/admin/e',
        name: '设置',
        icon:'el-icon-setting',
        children: [{
                path: '/hhome/dddd',
                name: '基础设置',
                icon: ''
            }
        ]
    },

]