import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Partenaire from '../views/Partenaire.vue';
import Faq from '../views/Faq.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
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
        path:'/Faq',
        name: 'Faq',
        component: Faq,
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
