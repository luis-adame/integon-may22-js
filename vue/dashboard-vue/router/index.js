import Vue from 'vue';
import VueRouter from 'vue-router';

import Grafica1Component from '../src/components/pages/Grafica1Component'
import ProgressComponent from '../src/components/pages/ProgressComponent'
import DashboardComponent from '../src/components/pages/Dashboard-Component'

import PagesComponent from '../src/components/pages/Pages-Component'
import PageNotFoundComponent from '../src/components/pages/Pagenotfound-Component'
import LoginComponent from '../src/components/auth/Login-Component'
import RegisterComponent from '../src/components/auth/Register-Component'

Vue.use(VueRouter);

export const routes=[
    {
        path: '/',
        name: 'pages',
        component: PagesComponent,
        children: [
            {
                path: '/grafica1',
                name: 'grafica1',
                component: Grafica1Component
            },
            {
                path: '/progress',
                name: 'progress',
                component: ProgressComponent
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: DashboardComponent
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent
    },
    {
        path: '*',
        name: 'pagenotfound',
        component: PageNotFoundComponent
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router