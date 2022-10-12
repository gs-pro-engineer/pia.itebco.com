import store from '@js/store'

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'auth.login.page_title',
            description: 'auth.login.page_description',
        },
        component: () => import('@views/auth/login' /* webpackChunkName: "auth/login" */),
    },
    {
        path: '/login-sms-otp',
        name: 'login-sms-otp',
        meta: {
            title: 'auth.login.login_using_sms_otp',
            description: 'auth.login.page_description',
        },
        component: () => import('@views/auth/login-sms-otp' /* webpackChunkName: "auth/login-sms-otp" */),
        beforeEnter: ((to, from, next) => {
            if(!store.getters['config/configs'].auth.smsOtpLogin) {
                if(from.name !== 'login') {
                    if (to.query && to.query.ref) {
                        next({ name: 'login', query: { ref: to.query.ref } })
                    } else {
                        next({ name: 'login'})
                    }
                } else {
                    next(false)
                }
            } else {
                next()
            }
        })
    },
    {
        path: '/login-email-otp',
        name: 'login-email-otp',
        meta: {
            title: 'auth.login.login_using_email_otp',
            description: 'auth.login.page_description',
        },
        component: () => import('@views/auth/login-email-otp' /* webpackChunkName: "auth/login-email-otp" */),
        beforeEnter: ((to, from, next) => {
            if(!store.getters['config/configs'].auth.emailOtpLogin) {
                if(from.name !== 'login') {
                    if (to.query && to.query.ref) {
                        next({ name: 'login', query: { ref: to.query.ref } })
                    } else {
                        next({ name: 'login'})
                    }
                } else {
                    next(false)
                }
            } else {
                next()
            }
        })
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: 'auth.register.page_title',
            description: 'auth.register.page_description',
        },
        component: () => import('@views/auth/register' /* webpackChunkName: "auth/register" */),
        beforeEnter: ((to, from, next) => {
            if(!store.getters['config/configs'].auth.registration) {
                if(from.name !== 'login') {
                    if (to.query && to.query.ref) {
                        next({ name: 'login', query: { ref: to.query.ref } })
                    } else {
                        next({ name: 'login'})
                    }
                } else {
                    next(false)
                }
            } else {
                next()
            }
        })
    },
    {
        path: '/password',
        name: 'password',
        meta: {
            title: 'auth.password.forgot.page_title',
            description: 'auth.password.forgot.page_description',
        },
        component: () => import('@views/auth/password' /* webpackChunkName: "auth/password" */),
        beforeEnter: ((to, from, next) => {
            if(!store.getters['config/configs'].auth.resetPassword) {
                if(from.name !== 'login') {
                    if (to.query && to.query.ref) {
                        next({ name: 'login', query: { ref: to.query.ref } })
                    } else {
                        next({ name: 'login'})
                    }
                } else {
                    next(false)
                }
            } else {
                next()
            }
        })
    },
    {
        path: '/verify/:token',
        name: 'verify',
        meta: {
            title: 'auth.register.verify.page_title',
            description: 'auth.register.verify.page_description',
        },
        component: () => import('@views/auth/login' /* webpackChunkName: "auth/login" */),
        beforeEnter: ((to, from, next) => {
            if(!store.getters['config/configs'].auth.resetPassword) {
                if(from.name !== 'login') {
                    if (to.query && to.query.ref) {
                        next({ name: 'login', query: { ref: to.query.ref } })
                    } else {
                        next({ name: 'login'})
                    }
                } else {
                    next(false)
                }
            } else {
                const token = to.params.token
                if(token.length > 3) {
                    store.dispatch('user/VerifyToken', token).then(response => {
                        next({ name: 'login'})
                    }).catch(error => {
                        formUtil.handleErrors(error)
                        next({ name: 'login'})
                    })
                } else {
                    next({ name: 'login'})
                }
            }
        })
    },
]