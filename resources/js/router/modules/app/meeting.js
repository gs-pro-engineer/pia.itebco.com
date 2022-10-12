import { getOptionRoutes } from './config/module-config'
import store from '@js/store'

export default [{
        path: 'instant-meetings',
        name: 'appInstantMeeting',
        redirect: { name: 'appInstantMeetingList' },
        meta: {
            title: 'meeting.instant_meetings',
            icon: 'fas fa-business-time',
            permissions: ['list-meeting', 'create-meeting', 'edit-meeting'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [{
                path: 'start',
                name: 'appInstantMeetingStart',
                meta: {
                    title: 'meeting.start_a_meeting',
                    permissions: ['create-meeting']
                },
                component: () => import('@views/app/meeting/start' /* webpackChunkName: "app/meeting/start" */ ),
            },
            {
                path: 'join',
                name: 'appInstantMeetingJoin',
                meta: {
                    title: 'meeting.join_a_meeting',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/meeting/join' /* webpackChunkName: "app/meeting/join" */ ),
            },
            {
                path: 'history',
                name: 'appInstantMeetingList',
                meta: {
                    trans: 'global.list',
                    title: 'meeting.meeting_history',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/meeting/history' /* webpackChunkName: "app/meeting/history" */ ),
            },
        ]
    },
    {
        path: 'meetings',
        name: 'appMeeting',
        redirect: { name: 'appMeetingList' },
        meta: {
            title: 'meeting.meetings',
            icon: 'far fa-calendar-alt',
            hideChildren: true,
            permissions: ['list-meeting', 'create-meeting', 'edit-meeting'],
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [{
                path: '',
                name: 'appMeetingList',
                meta: {
                    trans: 'global.list',
                    title: 'meeting.meetings',
                    permissions: ['list-meeting']
                },
                component: () => {
                    const configs = store.getters['config/configs']

                    if(configs && configs.meeting && configs.meeting.cardLayout) {
                        return import('@views/app/meeting/feed' /* webpackChunkName: "app/meeting/feed" */ )
                    }

                    return import('@views/app/meeting/index' /* webpackChunkName: "app/meeting/index" */ )
                }
            },
            {
                path: 'config',
                name: 'appMeetingConfig',
                redirect: { name: 'appMeetingConfigGeneral' },
                meta: {
                    title: 'config.config',
                    permissions: ['access-meeting-config'],
                    isConfigRoute: true,
                },
                component: () => import('@views/app/meeting/config/index' /* webpackChunkName: "app/meeting/config/index" */ ),
                children: [{
                        path: '',
                        name: 'appMeetingConfigGeneral',
                        meta: {
                            title: 'config.general',
                            permissions: ['access-meeting-config'],
                        },
                        component: () => import('@views/app/meeting/config/general' /* webpackChunkName: "app/meeting/config/general" */ ),
                    }, {
                        path: 'pam',
                        name: 'appMeetingConfigPam',
                        meta: {
                            title: 'meeting.publicly_accessible_meetings',
                            permissions: ['access-meeting-config'],
                        },
                        component: () => import('@views/app/meeting/config/pam' /* webpackChunkName: "app/meeting/config/pam" */ ),
                    }, {
                        path: 'snapshot',
                        name: 'appMeetingConfigSnapshot',
                        meta: {
                            title: 'meeting.config.snapshot',
                            permissions: ['access-meeting-config'],
                        },
                        component: () => import('@views/app/meeting/config/snapshot' /* webpackChunkName: "app/meeting/config/snapshot" */ ),
                    }, {
                        path: 'recording',
                        name: 'appMeetingConfigRecording',
                        meta: {
                            title: 'meeting.config.recording',
                            permissions: ['access-meeting-config'],
                        },
                        component: () => import('@views/app/meeting/config/recording' /* webpackChunkName: "app/meeting/config/recording" */ ),
                    }, {
                        path: 'auto-end',
                        name: 'appMeetingConfigAutoEnd',
                        meta: {
                            title: 'meeting.config.auto_end',
                            permissions: ['access-meeting-config'],
                        },
                        component: () => import('@views/app/meeting/config/auto-end' /* webpackChunkName: "app/meeting/config/auto-end" */ ),
                    },
                    getOptionRoutes({
                        path: 'categories',
                        entityTitle: 'meeting.meeting_category.category',
                        entitiesTitle: 'meeting.meeting_category.categories',
                        entityDescription: 'meeting.meeting_category.module_description',
                        routeNamePrefix: 'appMeetingConfigCategory',
                        permissionRequired: 'access-meeting-config',
                        optionType: 'meeting_category',
                        hasSlug: false,
                    }),
                ]
            },
            {
                path: 'add',
                name: 'appMeetingAdd',
                meta: {
                    trans: 'global.add',
                    title: 'meeting.meeting',
                    permissions: ['create-meeting']
                },
                component: () => import('@views/app/meeting/add' /* webpackChunkName: "app/meeting/add" */ ),
            },
            {
                path: ':uuid/edit',
                name: 'appMeetingEdit',
                meta: {
                    trans: 'global.edit',
                    title: 'meeting.meeting',
                    permissions: ['edit-meeting']
                },
                component: () => import('@views/app/meeting/edit' /* webpackChunkName: "app/meeting/edit" */ ),
            },
            {
                path: ':uuid/duplicate',
                name: 'appMeetingDuplicate',
                meta: {
                    trans: 'global.add',
                    title: 'meeting.meeting',
                },
                component: () => import('@views/app/meeting/edit' /* webpackChunkName: "app/meeting/edit" */),
            },
            {
                path: ':subUuid/invitees/add',
                name: 'appMeetingInviteeAdd',
                meta: {
                    trans: 'global.add',
                    title: 'meeting.invitee.invitees',
                },
                component: () => import('@views/app/meeting/invite' /* webpackChunkName: "app/meeting/invite" */),
            },
            {
                path: ':subUuid/config',
                name: 'appMeetingSingleConfig',
                meta: {
                    trans: 'global.config',
                    title: 'meeting.meeting_level',
                },
                component: () => import('@views/app/meeting/config' /* webpackChunkName: "app/meeting/config" */),
            },
            {
                path: ':uuid/snapshots',
                name: 'appMeetingSnapshots',
                meta: {
                    trans: 'global.view',
                    title: 'meeting.snapshots',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/meeting/snapshots' /* webpackChunkName: "app/meeting/snapshots" */ ),
            },
            {
                path: ':uuid/recordings',
                name: 'appMeetingRecordings',
                meta: {
                    trans: 'global.view',
                    title: 'meeting.recordings',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/meeting/recordings' /* webpackChunkName: "app/meeting/recordings" */ ),
            },
            {
                path: ':uuid/payment',
                name: 'appMeetingPayment',
                redirect: { name: 'appMeetingPaymentForm' },
                meta: {
                    title: 'meeting.paid_meeting',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/meeting/payment' /* webpackChunkName: "app/meeting/payment" */ ),
                children: [
                    {
                        path: '',
                        name: 'appMeetingPaymentForm',
                        meta: {
                            trans: 'global.view',
                            title: 'meeting.paid_meeting',
                        },
                        components: {
                            form:  () => import('@views/app/meeting/payment/form' /* webpackChunkName: "app/meeting/payment/form" */),
                        },
                    },
                ]
            },
            {
                path: ':uuid/payment/receipt',
                name: 'appMeetingPaymentReceipt',
                meta: {
                    title: 'meeting.payment.receipt',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/meeting/payment/receipt' /* webpackChunkName: "app/meeting/payment/receipt" */ ),
            },
            {
                path: ':uuid',
                name: 'appMeetingView',
                meta: {
                    trans: 'global.view',
                    title: 'meeting.meeting',
                    permissions: ['list-meeting']
                },
                component: () => import('@views/app/meeting/view' /* webpackChunkName: "app/meeting/view" */ ),
            },
        ]
    },
]
