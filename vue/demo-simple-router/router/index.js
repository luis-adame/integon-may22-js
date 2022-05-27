import Vue from 'vue';
import VueRouter from 'vue-router';

//import ClientesComponent from '../src/components/Clientes-Component'
//import FacturasComponent from '../src/components/Facturas-Component'

Vue.use(VueRouter);

export const routes=[
    {
        path: '/clientes',
        name: 'clientes',
       //component: ClientesComponent
        component: () => import(
            '../src/components/Clientes-Component'
        )
    },
    {
        path: '/facturas',
        name: 'facturas',
        //component: FacturasComponent
        component: () => import(
            '../src/components/Facturas-Component'
        )
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router