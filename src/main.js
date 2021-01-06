import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Import FontAwesome CSS/JS Files
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
