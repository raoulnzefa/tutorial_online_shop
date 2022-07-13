import { createRouter, createWebHistory } from 'vue-router'

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'


let router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
        }
    ]
})

export default router