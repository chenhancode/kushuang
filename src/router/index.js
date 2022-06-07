import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {
            y: 0
        }
    },
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/',
            redirect: '/home'
        },
    ]
})

export default router