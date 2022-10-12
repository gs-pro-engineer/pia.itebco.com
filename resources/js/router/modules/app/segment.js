export default [{
    path: 'segments',
    name: 'appSegment',
    redirect: { name: 'appSegmentList' },
    meta: {
        title: 'contact.segment.segments',
        icon: 'fas fa-layer-group',
        hideChildren: true,
        permissions: ['access-contact'],
    },
    component: {
        template: '<router-view></router-view>'
    },
    children: [{
            path: '',
            name: 'appSegmentList',
            meta: {
                trans: 'global.list',
                title: 'contact.segment.segments',
                permissions: ['access-contact']
            },
            component: () => import('@views/app/segment/index' /* webpackChunkName: "app/segment/index" */ ),
        },
        {
            path: 'add',
            name: 'appSegmentAdd',
            meta: {
                trans: 'global.add',
                title: 'contact.segment.segment',
                permissions: ['access-contact']
            },
            component: () => import('@views/app/segment/add' /* webpackChunkName: "app/segment/add" */ ),
        },
        {
            path: ':uuid/edit',
            name: 'appSegmentEdit',
            meta: {
                trans: 'global.edit',
                title: 'contact.segment.segment',
                permissions: ['access-contact']
            },
            component: () => import('@views/app/segment/edit' /* webpackChunkName: "app/segment/edit" */ ),
        },
    ]
}, ]
