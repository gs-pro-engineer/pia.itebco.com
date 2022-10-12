export default [{
    path: 'live/meetings/:uuid',
    name: 'liveMeeting',
    meta: {
        title: 'meeting.meeting_details',
    },
    component: () => import('@views/app/meeting/live' /* webpackChunkName: "app/meeting/live" */ ),
}]
