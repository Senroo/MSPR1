import Vue from 'vue';
import VueRouter from 'vue-router';
import Partenaire from '../views/Partenaire.vue';
import Faq from '../views/Faq.vue';

Vue.use(VueRouter)


const routes = [
    {
        path: '/lang',
        component: {
            render(c) {return c('router-view')}
        },
        children: [
     {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

    {
        path: '/burger',
        name: 'Burger',
        component: () => import('../components/menu/burger.vue')
    },

    {
        path: 'sidebar',
        name: 'Burger',
        component: () => import('../components/menu/sidebar.vue')
    },

    {
        path: '/partenaire',
        name: 'Partenaire',
        component: Partenaire,
    },
    {
        path: '/Faq',
        name: 'Faq',
        component: Faq,
    }
    ,
    {
        path: '/programmation',
        name: 'Programmation',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Programmation.vue')
    },

    {
        path: '/artiste-info?id=:id',
        name: 'info',
        params: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ArtisteInfo.vue')
    },

    {
        path: '/contact',
        name: 'info',
        params: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },

    {
        path: '/carte',
        name: 'carte',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Carte.vue')
    }
]
},

    {
        path: '/cgv',
        name: 'cgv',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Cgv.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
